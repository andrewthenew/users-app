export interface UserProps {
  username: string;
  email: string;
  phone: string;
}

export interface UserCollectionProps {
  [key: string]: UserProps;
}
