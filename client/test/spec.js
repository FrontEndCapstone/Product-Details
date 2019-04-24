/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../src/components/App";

describe("App component", () => {
  it("should render correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
  it("state should contain product property", () => {
    const wrapper = mount(<App />);
    const state = wrapper.state().product;
    expect(state).toBe(null);
  });
});
