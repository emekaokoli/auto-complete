export type Data = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export interface ResponseData {
  data: Data[];
  
}