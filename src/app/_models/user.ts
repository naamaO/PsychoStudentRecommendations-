import { Role } from "./role";

export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    address?:string;
    role: Role;
    token?: string;
  email: string;
}