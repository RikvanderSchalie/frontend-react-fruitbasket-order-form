import React from 'react';
import './App.css';
import Fruitbutton from "./Fruitbutton"


/*Randvoorwaarden fruit-counters
Je maakt gebruik van de useState hook van React om de hoeveelheden bij te houden
Klanten hebben de vrijheid om te kiezen tussen vier typen fruit:
Bananen  : 🍌
Aarbeien : 🍓
Appels   : 🍏
Kiwi's   : 🥝
[] Elk type fruit heeft twee buttons: één die de hoeveelheid verhoogd (+) en één die de hoeveelheid verlaagd (-).
[] De hoeveelheid geselecteerde fruittypes wordt bij iedere update getoond aan de gebruiker
[] Er is ook een reset button, die alle counters weer op 0 zet.
[] check react-hook npmsite mbt functie formulier */


function App() {
  return (
    <div className>
      <h1>Fruitmand bezorgservice</h1>

        <Fruitbutton name="BANAAN"/>
        <Fruitbutton name="AARDBEI"/>
        <Fruitbutton name="APPEL"/>
        <Fruitbutton name="SKIWI"/>

    </div>
  );
}

export default App;
