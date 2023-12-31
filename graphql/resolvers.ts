// resolvers.ts
import { connectDatabase } from '../DB/db';

enum TenantType {
  STATE = 'STATE',
  CLUB = 'CLUB',
  ALL = 'ALL',
}

interface Tenant {
  id: number;
  tenant_type: TenantType; // Use the TenantType enum
  state: string,
  tenant_name: string,
  primary_email: string,
  alternate_email: string,
  contact_person: string,
  primary_contact: string,
  alternate_contact: string,
  address1: string,
  address2: string,
  address3: string,
  city: string,
  pincode: string,
  contract_status: boolean,
    contract_startdate: string,
    contract_enddate: string,
    contract_details: string,
    documents: string,
 
}

const resolvers = {
  Query: {
    getTenant: async (_: any, { id }: { id: number }): Promise<Tenant> => {
      const db = await connectDatabase();
      const [user]: any[] = await db.query('SELECT * FROM tenants WHERE id = ?', [id]);
      return user[0];
    },

    getTenantByType: async (_: any, { tenant_type }: { tenant_type: TenantType }): Promise<Tenant> => {
        const db = await connectDatabase();
        const [user]: any[] = await db.query('SELECT * FROM tenants WHERE tenant_type = ?', [tenant_type]);
        return user;
      },
    

      getAllTenants: async (): Promise<Tenant[]> => {
      const db = await connectDatabase();
      const [users]: any[] = await db.query('SELECT * FROM tenants');
      return users;
    },
  },

  
  Mutation: {
    createTenant: async (_: any, {
      tenant_type,
      state,
      tenant_name,
      primary_email,
      alternate_email,
      contact_person,
      primary_contact,
      alternate_contact,
      address1,
      address2,
      address3,
      city,
      pincode,
      contract_status,
      contract_startdate,
      contract_enddate,
      contract_details,
      documents,
    
    }: {
      tenant_type: TenantType,
      state: string,
  tenant_name: string,
  primary_email: string,
  alternate_email: string,
  contact_person: string,
  primary_contact: string,
  alternate_contact: string,
  address1: string,
  address2: string,
  address3: string,
  city: string,
  pincode: string,
  contract_status: boolean,
    contract_startdate: string,
    contract_enddate: string,
    contract_details: string,
    documents: string,
     
    }): Promise<Tenant> => {
      const db = await connectDatabase();
      const [result]: any[] = await db.query('INSERT INTO tenants (tenant_type, state, tenant_name, primary_email, alternate_email, contact_person, primary_contact, alternate_contact, address1, address2, address3, city, pincode, contract_status, contract_startdate, contract_enddate, contract_details, documents) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [tenant_type, state, tenant_name, primary_email, alternate_email, contact_person, primary_contact, alternate_contact, address1, address2, address3, city, pincode, contract_status, contract_startdate, contract_enddate, contract_details, documents]);
      return {
        id: result.insertId,
        tenant_type,
        state,
        tenant_name,
        primary_email,
        alternate_email,
        contact_person,
        primary_contact,
        alternate_contact,
        address1,
      address2,
      address3,
        city,
        pincode,
        contract_status,
        contract_startdate,
        contract_enddate,
        contract_details,
        documents,
    
      };
    },


    updateTenant: async (_: any, { 
      id, 
      tenant_type,
      state,
      tenant_name,
      primary_email,
      alternate_email,
      contact_person,
      primary_contact,
      alternate_contact,
      address1,
      address2,
      address3,
      city,
      pincode,
      contract_status,
      contract_startdate,
      contract_enddate,
      contract_details,
      documents, }: Tenant): Promise<Tenant> => {
      const db = await connectDatabase();
      await db.query('UPDATE tenants SET tenant_type=?, state=?, tenant_name=?, primary_email=?, alternate_email=?, contact_person=?, primary_contact=?, alternate_contact=?, address1=?, address2=?, address3=?, city=?, pincode=?, contract_status=?, contract_startdate=?, contract_enddate=?, contract_details=?, documents=?  WHERE id = ?', [
        tenant_type,
        state,
        tenant_name,
        primary_email,
        alternate_email,
        contact_person,
        primary_contact,
        alternate_contact,
        address1,
      address2,
      address3,
        city,
        pincode,
        contract_status,
        contract_startdate,
        contract_enddate,
        contract_details,
        documents, 
        id]);
      return { 
        id, 
        tenant_type,
        state,
        tenant_name,
        primary_email,
        alternate_email,
        contact_person,
        primary_contact,
        alternate_contact,
        address1,
      address2,
      address3,
        city,
        pincode,
        contract_status,
        contract_startdate,
        contract_enddate,
        contract_details,
        documents, };
    },
    deleteTenant: async (_: any, { id }: { id: number }): Promise<Tenant> => {
      const db = await connectDatabase();
      const [user]: any[] = await db.query('DELETE FROM tenants WHERE id = ?', [id]);
      return user[0];
    },
  },
};

export default resolvers;