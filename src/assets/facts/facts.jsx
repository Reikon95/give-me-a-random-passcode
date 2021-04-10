import React from "react"
import "./facts.css"
export default function Facts({ numberOfCodes }) {
  return (
    <div className="content">
      You have generated {numberOfCodes} random passcodes
    </div>
  )
}
