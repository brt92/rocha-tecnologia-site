
/* 
SUPABASE SCHEMA (Paste this into SQL Editor):

-- Leads table
create table leads (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  company text,
  whatsapp text,
  email text,
  num_machines integer,
  pain_point text,
  source text default 'website',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Quiz Results
create table quiz_results (
  id uuid default uuid_generate_v4() primary key,
  lead_id uuid references leads(id),
  score integer,
  recommendation text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
*/

// Mock client for environment where process.env is handled externally
export const supabaseMock = {
    async insertLead(data: any) {
        console.log('Sending lead to Supabase:', data);
        return { error: null, data: { id: 'mock-id' } };
    }
};
