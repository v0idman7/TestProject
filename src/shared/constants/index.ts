export type JogType = {
  id: number;
  user_id: string;
  distance: number;
  time: number;
  date: number;
};

export type UserType = {
  id: string;
  email: string;
  phone: string;
  role: string;
  first_name: string;
  last_name: string;
};
