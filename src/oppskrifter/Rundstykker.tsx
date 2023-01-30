import { OppskriftProps } from "../components/OppskriftTypes";

const rundstykkerProps: OppskriftProps = {
  title: "Rundstykker",
  subTitle: "Veldig godt børd",
  summary: "Passer perfekt til matpakka",
  credit: "ISBN 1213123",
  scores: {
    lettvint: 3,
    oppvask: 3,
    tidsbruk: 3,
    holdbarhet: 5, 
    barnevennlig: 4,
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

export default rundstykkerProps;
