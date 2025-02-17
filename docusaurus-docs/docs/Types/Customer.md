---
sidebar_position: 2
---

# Customer Object Type

`Customer` object type provide details of the current customer and is returned after creating a customer or logging in.

## Type

```ts
{
  token: string;
  emailAddress?: string;
  info: ICustomerInfo;
};
```

## Example

```js
{
"token": "F69PGKM1QXCN7Dj3ybEXCpU4",
"info": {
  "phone": "555-555-5555",
  "licensePlate": "Nothing",
  "carColor": "Silver",
  "carType": "Nothing",
  "name": "Abdelkhalek Zellat"
},
"emailAddress": null
};
```

## Used by

- [`createOrder`](../../Components/Orders#create-order)
- [`claimOrder`](../../Components/Orders#claim-order)
- [`createCustomer`](../../Components/Customers#create-customer)
- [`updateCustomer`](../../Components/Customers#update-customer)
