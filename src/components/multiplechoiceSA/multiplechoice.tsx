import React from "react";

type Choices = {
  ref: string;
  id: string;
  label: string;
};

type MultipleChoiceProps = {
  id?: string;
  ref?: string;
  title: string;
  type?: string;
  properties: Choices[];
};

export const MultipleChoice = ({ title, properties }: MultipleChoiceProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>Choices: </h4>
      {properties.map((choice, i) => {
        return <button key={i}>{choice.label}</button>;
      })}
    </div>
  );
};
