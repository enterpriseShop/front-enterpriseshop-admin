export interface Customer {
  first_name: string;
  last_name: string;
  address: Address;
  id: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
