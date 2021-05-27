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

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [postcode, setPostcode] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log("Dit is ingevuld !!" ,name, email, postcode)
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



        <form onSubmit={handleSubmit}>

      <h1>Bestelformulier</h1>

            <label htmlFor="name">Naam </label>
            <input
                id="name"
                name="name"
                type="tekst"
                placeholder="Naam"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <p/>
            <label htmlFor="email">Email </label>
            <input
                id="email"
                name="email"
                type="tekst"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <p/>
            <label htmlFor="postcode">Postcode </label>
            <input
                id="postcode"
                name="postcode"
                type="tekst"
                placeholder="Postcode"
                name={postcode}
                onChange={(event) => setPostcode(event.target.value)}
            />
            <p/>
                <input type='submit'/>

        </form>

    </div>
  );
}

export default App;
