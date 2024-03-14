import React from "react";
import { InputField, Button, CourseCard } from './'

const GenerateComponents = ({ componentType, data }) => {
  return data.map((item) => (
    React.createElement(componentType, {
      key: item.id, // Using the item's id as the key
      ...item,
    })
  ));
};

export default GenerateComponents
