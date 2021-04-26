import React from "react";
import { render } from "@testing-library/react";
import SampleApp  from "./sampleApp";

describe("Sample App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<SampleApp />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});