type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  // Можна додати логіку для злиття initialValues з поточним станом користувача
}

// Приклад використання
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};
