import {MdMessage} from "react-icons/md";
import React from "react";
import styles from "./Button.module.css";

const Button = (props) =>{
    console.log(props);
    return (
        <button className={props.isOutline ? styles.outlinebtn : styles.primarybtn}>
       {props.icon}
       {props.text}
       </button>
    );
}

export default Button;