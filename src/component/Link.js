import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Link(props) {
    const navigate = useNavigate();

    function handleClick (event, link) {
        event.preventDefault();
        navigate(link);
    }

    return (
        <a style={{color:'blue', textDecoration:'underline'}} href={props.link} onClick={(e) => handleClick(e, props.link)}>{props.title}</a>
    )
}