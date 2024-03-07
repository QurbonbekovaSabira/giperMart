import React from "react";
import { User } from "../page/user";
import { Basket } from "../page/basket";
import { Checkout } from "../page/checkout";

export const user_routes = [
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/checkout",
    element: <Checkout />,
  },
  {
    path: "/user/basket",
    element: <Basket />,
  },
];
