import { OppskriftProps } from "../components/OppskriftTypes";

const havrefletteProps: OppskriftProps = {
  title: "Havreflette",
  subTitle: "Veldig godt børd",
  summary: "Passer perfekt til matpakka",
  credit: "ISBN 1213123",
  scores: {
    lettvint: 4,
    oppvask: 3,
    tidsbruk: 3,
    holdbarhet: 2, 
    barnevennlig: 5,
  },
  steps: [
    {
      heading: "Bland sammen",
      paragraph: "Husk blah blah",
      pictures: [
        {
          path: "",
          caption: "Bruk en bolle og rør alt sammen"
        }
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

export default havrefletteProps;
