import { useState } from "react";
import Bound from "@/components/ListTable/Bound";
import Order from "@/components/ListTable/Order";
import { NextPage } from "next";

const InBound: NextPage = () => {
  const [order, setOrder] = useState(undefined);

  return order ? (
    <Order type={"inbound"} order={order} setOrder={setOrder} />
  ) : (
    <Bound type={"inbound"} setOrder={setOrder} />
  );
};

export default InBound;
