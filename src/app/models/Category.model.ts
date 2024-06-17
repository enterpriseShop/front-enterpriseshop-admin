import { Status } from "./Status.model";

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
    count: number;
    status: Status;
}