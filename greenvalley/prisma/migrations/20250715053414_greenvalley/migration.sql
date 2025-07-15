-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" VARCHAR NOT NULL,
    "bio" TEXT,
    "email" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL DEFAULT 'Anonymous',
    "salt" VARCHAR NOT NULL DEFAULT 'NULL',
    "google_id" VARCHAR,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");
