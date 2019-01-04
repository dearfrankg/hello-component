import React from "react";
import HelloComponent from "../src";

describe("Hello Component", () => {
  it("should render", () => {
    const wrapper = shallow(<HelloComponent />);
    const actual = wrapper.exists();
    expect(actual).toMatchSnapshot();
  });
});
