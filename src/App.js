import React from "react";
import "./App.css";

import Header from "./components/Header";
import Message from "./components/Message";
import CoupleContact from "./components/CoupleContact";
import Gallery from "./components/Gallery";
import Calendar from "./components/Calendar";
import RSVP from "./components/RSVP";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <CoupleContact />
      <Gallery />
      <Calendar />
      <RSVP />
      <Location />
    </div>
  );
}

export default App;