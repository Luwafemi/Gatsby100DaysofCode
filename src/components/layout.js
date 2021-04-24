import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Header from "../components/header";
import Seo from "./seo"

const layout = ({ children }) => (
  <>
    <Seo/>
    <Header />
    {children}
  </>
);
layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;

//What happens here??
//  This is the main Layout used to wrap other components. '{children}' indicates where any other component wrapped with 'Layout' tags would be inserted.
//  For example, index.js in our pages folder uses this layout as its parent.
//  Gatsby takes care of inserting components wrapped with 'Layout' tags into '{children}'
//  Note that our component name is 'layout' hence 'Layout' tags. We could use whatever variable name we want.
