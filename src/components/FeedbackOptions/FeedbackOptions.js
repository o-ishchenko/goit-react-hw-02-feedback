import React from "react";
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
          {options.map(option => (
              <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
          ))}
        </div>
    )
 }


export default FeedbackOptions 