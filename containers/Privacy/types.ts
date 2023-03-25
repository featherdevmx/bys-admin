export interface PrivacyItem {
  id: string;
  name: string;
  status: boolean;
  firstName: string;
  lastName: string;
  created_at: string;
  updated_at: string;
}
export interface PrivacyProps {
  data: Array<PrivacyItem>;
}

export interface PrivacyUserItem {
  info: {
    id: string;
    name: string;
    content: string;
    status: number | string;
    firstName: string;
    lastName: string;
    created_at: string;
    updated_at: string;
  };
}
