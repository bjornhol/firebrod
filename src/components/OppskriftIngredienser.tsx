import { OppskriftProps } from "./OppskriftTypes";

export function OppskriftIngredienser({ oppskrift }: { oppskrift: OppskriftProps }){
    return (
        <>
            <h2>Ingredienster</h2>
            <p>200 g mel</p>

            <h2>Fremgansmåte</h2>
            <p>Bland det tørre</p>
        </>
    )
}