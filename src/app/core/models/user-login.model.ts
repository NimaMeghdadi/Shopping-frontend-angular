export class User {
  UserID: number;
  UserName: string;
  BirthDate?: string;
  CreateDate?: number;
  Email?: string;
  FirstName?: string;
  Gender?: string;
  IdentifierNO?: string;
  LastName?: string;
  NationalNO?: string;
  Phone?: string;
  IsBlocked?: boolean;
  IsDelete?: boolean;
  IsEnable?: boolean;
  Token?: string;
}

export class UserLogin extends User {
  jwt: string;
}
