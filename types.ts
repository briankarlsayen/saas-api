export interface DbModel {
  // name: any
  [key: string]: any
}

export interface UserParams {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  type: string;
}

export interface AppKeyParams {
  type: string;
  expireMin?: number;
  expireHr?: number;
  expireDay?: number;
}