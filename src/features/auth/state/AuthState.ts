export interface User {
  id?: number;
  username: string;
  email: string;
  token?: string;
  bio: string;
  image: string;
}
export interface RequestNewUser {
  email: string;
  username: string;
  password: string;
}
export interface RequestLoginUser {
  email: string;
  password: string;
}
