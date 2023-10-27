

import { connectDatabase } from './db';

interface User {
  id: number;
  username: string;
  email: string;
}

const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: number }): Promise<User> => {
      const db = await connectDatabase();
      const [user]: any[] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      return user[0];
    },
    getAllUsers: async (): Promise<User[]> => {
      const db = await connectDatabase();
      const [users]: any[] = await db.query('SELECT * FROM users');
      return users;
    },
  },
  Mutation: {
    createUser: async (_: any, { username, email }: { username: string; email: string }): Promise<User> => {
      const db = await connectDatabase();
      const [result]: any[] = await db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
      return { id: result.insertId, username, email };
    },
    updateUser: async (_: any, { id, username, email }: User): Promise<User> => {
      const db = await connectDatabase();
      await db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
      return { id, username, email };
    },
    deleteUser: async (_: any, { id }: { id: number }): Promise<User> => {
      const db = await connectDatabase();
      const [user]: any[] = await db.query('DELETE FROM users WHERE id = ?', [id]);
      return user[0];
    },
  },
};

export default resolvers;
