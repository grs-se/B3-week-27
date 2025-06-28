export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  bio: string;
  age: number;
}

export interface UserForm {
  name: string;
  email: string;
  password: string;
  age: number;
}
