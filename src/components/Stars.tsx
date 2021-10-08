import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Stars.css';

type StarProps = {
    label?: string,
    score: number,
}

export function Stars(props: StarProps) {
    return (
        <div className="Stars">
            <div className="Stars-label">
                {props.label}
            </div>
            <div className="Stars-stars">
                <FontAwesomeIcon icon={faBreadSlice} className={props.score > 0 ? 'picked' : ''} />
                <FontAwesomeIcon icon={faBreadSlice} className={props.score > 1 ? 'picked' : ''} />
                <FontAwesomeIcon icon={faBreadSlice} className={props.score > 2 ? 'picked' : ''} />
                <FontAwesomeIcon icon={faBreadSlice} className={props.score > 3 ? 'picked' : ''} />
                <FontAwesomeIcon icon={faBreadSlice} className={props.score == 5 ? 'picked' : ''} />
            </div>            
        </div>
    )
}