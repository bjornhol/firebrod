export interface OppskriftPicture{
    path: string,
    caption?: string,
}

export interface OppskriftStep{
    heading: string,
    paragraph: string,
    pictures?: OppskriftPicture[],
}

export interface OppskriftScore{
    lettvint: number,
    tidsbruk: number,
    oppvask: number,
    holdbarhet: number,
    barnevennlig: number,
}

export interface OppskriftProps {
    title: string,
    subTitle: string,
    summary: string,
    credit: string,
    scores: OppskriftScore,
    steps: OppskriftStep[],
}
