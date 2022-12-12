export interface MenuLinkProps {
    id?: string | number;
    path?: string;
    title: string;
    type: string;
    action?: () => void;
}