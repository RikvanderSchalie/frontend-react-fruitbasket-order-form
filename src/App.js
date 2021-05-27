import React, {useState} from 'react';
import { useForm } from "react-hook-form";
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

const {register, handleSubmit} = useForm()

    function logOutput(data) {
    console.log("DATA UIT FORMULIER", data)

    }

  return (


    <div className = "form-style-6">
      <h1>Fruitmand bezorgservice</h1>



        <Fruitbutton name="🍌 BANAAN"/>
        <p/>
        <Fruitbutton name=" 🍓 AARDBEI"/>
        <p/>
        <Fruitbutton name=" 🍏 APPEL"/>
        <p/>
        <Fruitbutton name=" 🥝 SKIWI"/>
        <h2>
            <p></p>
        </h2>
        <p/>
        <p/>



        <form onSubmit={handleSubmit(logOutput)}>

      <h1>Bestelformulier</h1>

            <label htmlFor="name">Naam </label>
            <input
                id="name"
                name="name"
                type="tekst"
                placeholder="Naam"
                {...register("name")}

            />
            <p/>
            <label htmlFor="email">Email </label>
            <input
                id="email"
                name="email"
                type="tekst"
                placeholder="Email"
                {...register("email")}

            />
            <p/>
            <label htmlFor="postcode">Postcode </label>
            <input
                id="postcode"
                name="postcode"
                type="tekst"
                placeholder="Postcode"
                {...register("postcode")}
            />
            <p/>
                <input type='submit'/>

        </form>

    </div>
  )
}

export default App;
