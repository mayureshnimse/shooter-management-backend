import { connectDatabase } from '../DB/db';

interface User {
  id: number;
  name: string,
    email: string,
    contact: string,
    state: string,
    address: string,
    contract_startdate: string,
    contract_enddate: string,
    contract_duration: string,
    bill_generation: string,
    createdAt: string,
    updatedAt: string
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
      const [users]: any[] = await db.query('SELECT * FROM tenants');
      return users;
    },
  },

  
  Mutation: {
    createUser: async (_: any, {
      name,
      email,
      contact,
      state,
      address,
      contract_startdate,
      contract_enddate,
      contract_duration,
      bill_generation,
      createdAt,
      updatedAt
    }: {
      name: string,
      email: string,
      contact: string,
      state: string,
      address: string,
      contract_startdate: string,
      contract_enddate: string,
      contract_duration: string,
      bill_generation: string,
      createdAt: string,
      updatedAt: string
    }): Promise<User> => {
      const db = await connectDatabase();
      const [result]: any[] = await db.query('INSERT INTO tenants (name, email, contact, state, address, contract_startdate, contract_enddate, contract_duration, bill_generation, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, email, contact, state, address, contract_startdate, contract_enddate, contract_duration, bill_generation, createdAt, updatedAt]);
      return {
        id: result.insertId,
        name,
        email,
        contact,
        state,
        address,
        contract_startdate,
        contract_enddate,
        contract_duration,
        bill_generation,
        createdAt,
        updatedAt
      };
    },


    updateUser: async (_: any, { id, name, email, contact, state, address, contract_startdate, contract_enddate, contract_duration, bill_generation, createdAt, updatedAt }: User): Promise<User> => {
      const db = await connectDatabase();
      await db.query('UPDATE tenants SET name=?, email=?, contact=?, state=?, address=?, contract_startdate=?, contract_enddate=?, contract_duration=?, bill_generation=?, createdAt=?, updatedAt=? WHERE id = ?', [name, email, contact, state, address, contract_startdate, contract_enddate, contract_duration, bill_generation, createdAt, updatedAt, id]);
      return { id, name, email, contact, state, address, contract_startdate, contract_enddate, contract_duration, bill_generation, createdAt, updatedAt};
    },
    deleteUser: async (_: any, { id }: { id: number }): Promise<User> => {
      const db = await connectDatabase();
      const [user]: any[] = await db.query('DELETE FROM tenants WHERE id = ?', [id]);
      return user[0];
    },
  },
};

export default resolvers;

