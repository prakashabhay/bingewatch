/* global it:true expect:true jest:true*/
/* eslint no-unused-vars: ["error", {"varsIgnorePattern": "React|Searchbar"}]*/
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import Enzyme, { shallow,mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import SearchBox from "../components/searchContainer/SearchBox";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBox />, div);
});





