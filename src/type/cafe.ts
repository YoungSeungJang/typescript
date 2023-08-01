// let data = {
//   name: 'my cafe',
//   category: 'western',
//   address: {
//     city: 'seoul',
//     detail: 'somewhere',
//     zipcode: 12341234,
//   },
//   menu: [
//     { name: 'coffee', price: 3000 },
//     { name: 'latte', price: 3500 },
//   ],
// };

export type cafe = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipcode: Number;
};

export type Menu = {
  name: string;
  price: number;
};
