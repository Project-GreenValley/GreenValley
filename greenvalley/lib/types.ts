export type Users = {
  id: bigint;
  email: string;
  password: string;
  salt: string;
  name: string;
  created_at: Date;
  bio: string | null;
  google_id: string | null;
};
export interface CaroselComponent {
  slides: React.ReactNode[];
}
