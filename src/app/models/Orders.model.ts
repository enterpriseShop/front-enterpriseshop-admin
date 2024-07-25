import { Customer } from './Customer.model';

export interface Order {
  id: number;
  date_order: string;
  value_total: string;
  status: string;
  receiptNumber: string;
  customer: Customer;
}
