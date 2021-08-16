import React from "react";
import { MultipleChoice } from "./multiplechoiceSA";
import data from "../data/data";

const InteractiveComponents = () => {
  return (
    <div>
      <MultipleChoice title={data.title} properties={data.properties.choices} />
    </div>
  );
};

export default InteractiveComponents;
