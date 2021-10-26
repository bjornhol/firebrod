import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Stars.css';
import { OppskriftScore } from './OppskriftTypes';

type StarProps = {
    label?: string,
    score: number,
}

const Star = (props: StarProps) => {
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
                <FontAwesomeIcon icon={faBreadSlice} className={props.score === 5 ? 'picked' : ''} />
            </div>            
        </div>
    )
}

const Stars = (scores: OppskriftScore ) => {
    return (
        <>
            <Star score={scores.lettvint} label="Lettvint" />
            <Star score={scores.tidsbruk} label="Lite tidsbruk" />
            <Star score={scores.oppvask} label="Lite oppvask" />
            <Star score={scores.holdbarhet} label="Holdbarhet" />
            <Star score={scores.barnevennlig} label="Barnevennlig" />
        </>
    )
}

export default Stars;