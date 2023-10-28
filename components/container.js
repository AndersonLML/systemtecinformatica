import React from "react";
import { Analytics } from '@vercel/analytics/react';


const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
      <Analytics />
    </div>
  );
}

export default Container;