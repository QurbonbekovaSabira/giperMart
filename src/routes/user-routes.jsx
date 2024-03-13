import React from "react";
import { User } from "../page/user";
import { Basket } from "../page/basket";

export const user_routes = [
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/basket",
    element: <Basket />,
  },
];
