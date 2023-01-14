type User = {
  username: string;
  age: string;
  id: string;
};

export class UserEntity {
  constructor(private readonly user: User) {}
}
