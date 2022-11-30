import { useState } from "react";
import Bound from "@/components/ListTable/Bound";
import Order from "@/components/ListTable/Order";
import { NextPage } from "next";

const OutBound: NextPage = () => {
  const [order, setOrder] = useState(undefined);

  return order ? (
    <Order type={"outbound"} order={order} setOrder={setOrder} />
  ) : (
    <Bound type={"outbound"} setOrder={setOrder} />
  );
};

export default OutBound;
