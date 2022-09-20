import React from "react";
import "jest";
import Index from "../../../pages/index";
import { render } from '@testing-library/react';

describe("Index Page", () => {
  it("should render success", () => {
    render(<Index />);
  });
});
