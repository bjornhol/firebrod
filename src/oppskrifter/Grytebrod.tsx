import { OppskriftProps } from "../components/OppskriftTypes";

const grytebrodProps: OppskriftProps = {
  title: "Grytebrød",
  subTitle: "Veldig godt børd",
  summary: "Passer perfekt til matpakka",
  credit: "https://detgladekjokken.no/oppskrift/grytebrod-av-speltmel-og-havre/",
  scores: {
    lettvint: 1,
    oppvask: 2,
    tidsbruk: 3,
    holdbarhet: 4, 
    barnevennlig: 5,
  },
  steps: [
    {
      heading: "Bland sammen ingrediensene",
      paragraph: "Husk blah blah",
      pictures: [
        {
          path: "/brod/grytebrod/IMG_0189.jpg",
          caption: "Finn frem ingrediensene"
        },
        {
          path: "/brod/grytebrod/IMG_0191.jpg",
          caption: "Ha i en romslig bolle"
        },
        {
          path: "/brod/grytebrod/IMG_0193.jpg",
          caption: "Rør sammen"
        },
      ]
    },
    {
      heading: "Sett unna med plast over",
      paragraph: "Husk blah blah",
      pictures:[
        {
          path:"",
        }
      ]
    }
  ]
}

export default grytebrodProps;
