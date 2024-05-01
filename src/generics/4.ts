type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
}

const newUser: User = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
