type User = {
  name: string;
  surname: string;
  age: string;
  id: string;
};

export class UserEntity {
  constructor(private readonly user: User) {}
}
