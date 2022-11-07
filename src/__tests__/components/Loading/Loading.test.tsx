import React from "react";
import "jest";
import Loading from "@/components/Loading";
import { render } from "@testing-library/react";

describe("Loading", () => {
  it("shoud render success", () => {
    render(<Loading />);
  });
});
