import React from "react"
import "./facts.css"
export default function Facts({ numberOfCodes }) {
  return (
    <div className="content">
      {numberOfCodes > 0
        ? `You have generated ${numberOfCodes} random passcodes`
        : ""}
      {/* You have generated {numberOfCodes} random passcodes */}
    </div>
  )
}
