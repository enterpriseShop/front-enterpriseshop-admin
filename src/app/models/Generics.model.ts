export interface ProdForm {
    isCreate: boolean;
    product_id: number;
};
export interface BreadcrumbItems {
    icon?: string;
    route?: string;
    label?: string;
};

export interface MenuList {
    label: string;
    router: string;
    icon: string;
}