import { Category } from "./Category.model";
import { Status } from "./Status.model";

export interface Product {
    id?: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    stock: number;
    category: Category;
    status: Status;
}