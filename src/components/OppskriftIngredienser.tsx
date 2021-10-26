import { OppskriftProps } from "./OppskriftTypes";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';
import { Button } from "react-bootstrap";

export function OppskriftIngredienser({ oppskrift, toggleVisIngredienser }: { oppskrift: OppskriftProps, toggleVisIngredienser: () => void }){
    return (
        <>
            <h4>Ingredienser <small><Button variant="link" onClick={toggleVisIngredienser}><FontAwesomeIcon icon={faChevronUp} /></Button></small></h4>
            <p>200 g mel</p>

            <h4>Fremgansmåte</h4>
            <p>Bland det tørre</p>
        </>
    )
}