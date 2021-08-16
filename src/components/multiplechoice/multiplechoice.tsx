import React, { useState } from "react";
import "./multiplechoice.css";

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
  validations?: {
    required: boolean;
  };
  properties: {
    randomize?: boolean;
    allow_multiple_selection?: boolean;
    allow_other_choice?: boolean;
    vertical_alignment?: boolean;
    choices: Choices[];
  };
};

export const MultipleChoice = ({ title, properties }: MultipleChoiceProps) => {
  const [option, setOption] = useState<string | null>(null);

  const handleButtonSelect = (selected: string) => {
    setOption(selected);
    console.log("option: ", selected);
  };

  return (
    <div>
      <h3>{title}</h3>
      <h4>Choices: </h4>
      {properties.choices.map((choice, i) => {
        return (
          <button
            disabled={!!option}
            className="choices"
            key={i}
            onClick={() => handleButtonSelect(choice.label)}
          >
            {choice.label}
          </button>
        );
      })}
    </div>
  );
};
