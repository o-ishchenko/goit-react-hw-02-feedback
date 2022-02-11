import React from "react";
import s from './Section.module.css'

const Section = ({ title, children }) => 
    <div className={s.container}>
        <h1>{title }</h1>
            {children}
        </div>

export default Section 