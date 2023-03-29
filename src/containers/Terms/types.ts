export interface TermItem {
  id: string;
  name: string;
  status: boolean;
  firstName: string;
  lastName: string;
  created_at: string;
  updated_at: string;
}
export interface TermsProps {
  data: Array<TermItem>;
}
