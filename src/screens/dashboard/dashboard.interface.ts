export type Jobs = {
  title: string;
  description: string;
  job_category: 'Full-time' | 'Part-time';
  requirement: string;
  salary: string;
  benefits: string;
  language: 'id' | 'en';
  location: string;
  deadline: string | null;
  deadline_str: string;
  weight: number;
  company_name: string;
  company_description: string;
  company_size: string;
  company_logo: string;
  country: string;
  min_salary: string | null;
  max_salary: string | null;
  pay_rate: string | null;
  currency: string | null;
  industry: string | null;
  remote: boolean;
  entry_level: boolean;
  jid: string;
  cid: string | null;
  created: string;
  modified: string;
};
