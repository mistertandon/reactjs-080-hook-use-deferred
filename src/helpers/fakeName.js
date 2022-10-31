import { faker } from "@faker-js/faker";
faker.seed(248);

export const FakeUsers = [];

export const getUserName = () => {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
  };
};

Array.from({ length: 10 }).forEach(() => FakeUsers.push(getUserName()));
