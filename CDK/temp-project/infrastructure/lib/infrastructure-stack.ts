import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { IpAddresses, Vpc } from 'aws-cdk-lib/aws-ec2';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { ApplicationProtocol } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Platform } from 'aws-cdk-lib/aws-ecr-assets';

import path from 'path';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, `${id}-vpc`, {
      vpcName: `${id}-vpc`,
      ipAddresses: IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
    });

    const cluster = new ecs.Cluster(this, `${id}-cluster`, {
      clusterName: `${id}-cluster`,
      vpc,
    });

    // Load secrets from Secrets Manager
    const secret = secretsmanager.Secret.fromSecretNameV2(
      this,
      `${id}-secret`,
      'greenvalley/env2'
    );
    const dbSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'DBSecret',
      'greenvalleyRDS/DATABASE_URL'
    );
    const nextSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'NextSecret',
      'greenvalleyNEXT/NEXT_URL'
    );

    const fargateService = new ApplicationLoadBalancedFargateService(
      this,
      `${id}-fargate`,
      {
        serviceName: `${id}-fargate-service`,
        loadBalancerName: `${id}-fargate-lba`,
        cluster,
        cpu: 512,
        memoryLimitMiB: 1024,
        protocol: ApplicationProtocol.HTTP,
        desiredCount: 1,
        publicLoadBalancer: true,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset(
            path.join(__dirname, '../../../../greenvalley'),

            {
              platform: Platform.LINUX_AMD64,
              buildArgs: {
                DATABASE_URL: 'file:./dev.db',
                REDIS_URL: 'http://dummy-redis-url',
                NEXTAUTH_SECRET: 'dummytoken',
              },
            }
          ),
          containerName: `${id}-container`,
          containerPort: 3000,

          // 🧬 Inject runtime secrets securely
          secrets: {
            DATABASE_URL: ecs.Secret.fromSecretsManager(
              dbSecret,
              'DATABASE_URL'
            ),
            DIRECT_URL: ecs.Secret.fromSecretsManager(secret, 'DIRECT_URL'),
            GOOGLE_CLIENT_ID: ecs.Secret.fromSecretsManager(
              secret,
              'GOOGLE_CLIENT_ID'
            ),
            GOOGLE_CLIENT_SECRET: ecs.Secret.fromSecretsManager(
              secret,
              'GOOGLE_CLIENT_SECRET'
            ),
            NEXTAUTH_URL: ecs.Secret.fromSecretsManager(
              nextSecret,
              'NEXTAUTH_URL'
            ),
            NEXTAUTH_SECRET: ecs.Secret.fromSecretsManager(
              secret,
              'NEXTAUTH_SECRET'
            ),
            REDIS_URL: ecs.Secret.fromSecretsManager(secret, 'REDIS_URL'),
            REDIS_TOKEN: ecs.Secret.fromSecretsManager(secret, 'REDIS_TOKEN'),
          },

          // (Optional) Add non-secret env vars here:
          environment: {
            NODE_ENV: 'production',
            PORT: '3000',
          },
        },
      }
    );

    new cdk.CfnOutput(this, `${id}-url`, {
      value: fargateService.loadBalancer.loadBalancerDnsName,
    });
  }
}
