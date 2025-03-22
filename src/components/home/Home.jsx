
import './Home.css'
import React, { useState, useEffect } from 'react';
import a2 from '../pics/a2.jpg'
import a3 from '../pics/a3.jpg'
import a4 from '../pics/a4.jpg'
import a5 from '../pics/a5.jpg'
import a6 from '../pics/a6.jpg'
import a7 from '../pics/a7.jpg'
import a8 from '../pics/a8.jpg'
import a9 from '../pics/a9.jpg'
import m1 from  "../music/m1.mp3"

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Function to show random romantic pop-ups
  useEffect(() => {
    const popupMessages = [
      "omalicha m 💖",
      "ayo mhi 🌟",
      "udala m🥰",
      "my berry 🌈",
      "I love you to the moon and back 🌙",
      "ur smiles simply drive me crazy 🌙",
      "I miss u more than u can imagine 🌙",
      "asa m 🌙",
      "achalugo m 🌙"
    ];

    const interval = setInterval(() => {
      const randomMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)];
      alert(randomMessage); // Simple pop-up for now
    }, 30000); // Pop-up every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
     
    <div className="container hero py-4">

    </div>
       <div className="container py-3">
       <audio src={m1} autoPlay controls></audio>
       </div>
       <div className="container">
        <span>happy birthday achalaugo m, i love u so much, so much that words cant tell, u re the light of my world, my strenght wen i need motivation, my distraction wen i need something else and my peace (but na wen u want oooo, u no dey give peace anyhow)</span>
       </div>
    <div className="howWeMet">
        <div className="container py-3">
            <span><p><b>him: </b> lets stop at Mr.biggs to get something</p></span>
            <span><p><b>her: Aftr arguing nonchalantly agrees</b> ok</p></span>
            <span><p><b>him: </b> so what would u like to eat?</p></span>
            <span><p><b>her: </b> im fine thank you</p></span>
            <span><p><b>him: after begging her to plase take something </b> ahhh its not nice na, we re just meeting, at least take something</p></span>
            <span><p><b>her: </b> ok, id take ofada rice so my big mummy will eat along</p></span>
            <span><p><b>him: who come be big mummy? </b> ok oo no wahala shah take something</p></span>
            <span><p><b>him: looking at the wheather and seeing that rain is about dropping was very happy</b> ahhhh rain don dey fall o, make we just sit down talk</p></span>
            <span><p><b>after sitting down </b> </p></span>
            <span><p><b>him: </b> hello</p></span>
            <span><p><b>her: </b> hi</p></span>
            <span><p><b>him: </b> Emeka said u were a beautiful girl and i think he was wrong</p></span>
            <span><p><b>her: already thinking "is this guy here to insult me?</b> What?</p></span>
            <span><p><b>him: </b> yes i think he was wrong</p></span>
            <span><p><b>her: already feeling embarrased</b> keeping quiet and rolling eyes</p></span>
            <span><p><b>him: </b> yes i think u looked more prettier than i was told, ur beauty is simply charming </p></span>
            <span><p><b>her: with a heavy sigh of relief and that smile that drives me crazy</b> thank u</p></span>
            <span><p><b>him: </b> so my angel, where re u from</p></span>
            <span><p><b>her: </b> from enugu my mum from Abia</p></span>
            <span><p><b>him: </b> thats beautiful, im from anambra state</p></span>
            <span><p><b>her: </b> this wont work, i dont like anambra boys, they re ritualist</p></span>
            <span><p><b>him: knowing fully well that things re not going as planned, needed a plan B</b> hmmm dont worry my dear time shah tell</p></span>
            <span><p><b>her: </b> ok oo</p></span>
            <span><p><b>him: see this girl oo, for ur mind na say i go leave u abi?? just dey play</b> </p></span>
        </div>
    </div>
    <div className="homepage d-flex flex-column justify-content-center align-items-center py-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#0d6efd" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,58.7C672,85,768,139,864,154.7C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="text-center">
        <h1 className="display-4">Happy Birthday, My Love! 🎉</h1>
        <p className="lead">You are the most amazing person in my life, and today is all about you!</p>
        <button className="btn btn-primary btn-lg mt-3" onClick={() => alert("Let's celebrate your special day! 🎂")}>
          Explore Your Day
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#0d6efd" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,58.7C672,85,768,139,864,154.7C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>


      {/* Pop-up container (optional for more advanced pop-ups) */}
      {showPopup && (
        <div className="popup">
          <p>You are my everything! 💕</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
    </>
  );
}

export default Home;