import React from "react";
import "./index.css";
import {useRef} from 'react';

export default function MatchRow(props) {

    const rowRef = useRef();

    let {score, candidate, office, body, level, name, username} = props.match;

    if (score === 0 ) {
        score = "?";
    }

    function handleClick(event) {
        event.preventDefault();
        let username = rowRef.current.getAttribute("username");
        props.setMatchName(username);
    }

    return (
        <div className="match-row" ref={rowRef} username={username} onClick={(event)=>{handleClick(event)}}>
            <div className="match-info-row">
                <div className="match-name">{name}</div>
                <div className="match-score">Score: {score}</div>
            </div>
            {candidate ? (
                <div className="match-info-row flex-between">
                    <p>{office}</p>
                    <p>{body}</p>
                    </div>
            ): (
                <></>
            )}
        </div>
    )

}

