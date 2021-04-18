import React from "react"
import "./facts.css"
import PropTypes from "prop-types"

function Facts({ numberOfCodes }) {
  return (
    <div className="content">
      {numberOfCodes > 0
        ? `You have generated ${numberOfCodes} random passcodes`
        : ""}
    </div>
  )
}

Facts.propTypes = {
  numberOfCodes: PropTypes.number,
}

export default Facts
