import React from "react";
import "./facts.css";
import { TFactsProps } from "./facts.types";

function Facts({ numberOfCodes }: TFactsProps) {
  return (
    <div className="content">
      {numberOfCodes > 0
        ? `You have generated ${numberOfCodes} random passcodes`
        : ""}
    </div>
  );
}

export default Facts;
