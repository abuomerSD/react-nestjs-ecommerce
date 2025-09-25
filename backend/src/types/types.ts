enum UserRole {
  customer = 'customer',
  admin = 'admin',
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
