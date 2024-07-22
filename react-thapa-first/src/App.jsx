
// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// cd
import { EventPropagation } from "./components/EventPropagation";

import "./components/EV.css";
import { State } from "./components/hooks/State";


export const App = () => {
  return (
    <section className="container">
      <State />
      {/* <EventPropagation /> */}
      {/* <EventProps/> */}
      {/* <EventHandling /> */}
      {/* <h1 className="card-heading">List Of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <Profile/> */}
    </section>
  )
};

