import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
// import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function Mechanus() {
  const location = useLocation();
  const hash = location.hash.slice(1);

  useEffect(() => {
    const scrollToHash = () => {
      if(hash) {
        const target = document.getElementById(hash);
        if(target) {
          target.scrollIntoView()
        }
      } else {
        window.scroll(0, 0);
      };
    }

    scrollToHash();
  }, [hash]);

  return (
    <>
        <header id="header">
          <h1>Mechanus</h1>
          <p>Plane of time.</p>
        </header>

        <div id="page" >
          <section id="content" className="main">
            <h2 id="overview">Overview</h2>
              <p id="overview">
                Mechanus is where time is managed for all planes. It is a plane composed entirely of clocks where everything moves
                in rhythm accodring to a constant ticking that sounds throughout the realm. It is said that past, present, and future 
                can be seen from within this realm, but the future is prohibited to be seen by all beings. The ruler overlooking the 
                Mechanus is Primus. The reapers that patrol the plane of time are known as the time reapers. The denizens that live 
                within this plane are mostly the Clocksmiths and modrons.
              </p>
            <h2 id="inhabitants">Inhabitants</h2>
              <p>
                  These inhabitants are the locals of the Mechanus to make sure time runs normally and make sure no on is messing with
                  the timeline.
              </p>
              <h3 id="primus">Primus</h3>
                <p>
                  The ruler of the Mechanus and ascended from the modrons. He is a being that sees all throughout the timeline and is
                  said that he gets rid of any alternate timelines that sprout from the intended timeline. He also controls all modrons
                  to make sure they work in perfect order and see through each modron's senses. Primus does not care for any conflict
                  unless it messes with the main timeline or creates chaos within its plane.
                </p>
              <h3 id="time-reapers">Time Reapers</h3>
                <p>
                  The time reapers make daily routes throughout the timeline to make sure no one is tampering with it. Sometimes, there is
                  a creature that will travel through the timeline, but a reaper will only interfere when the individual will try to tamper
                  with it whether it was intentional or not. As long the timeline continues on its intended course, the time reapers will not
                  interfere. The time reapers' weapons are known the instantly age the target to the reaper's desire. Sometimes, the reaper can
                  use their weapon to turn the target into a time wraith, which is a creature who travels along the timeline attacking any who 
                  comes across it. Turning into a time wraith are reserved to those for the ultimate punishment. Time reapers have the ability
                  to travel to any time along the timeline.
                </p>
              <h3 id="denizens">Denizens</h3>
                <p>
                  Clocksmiths are denizens that make sure the clocks within the realm are working in perfect order. They also record and dealings
                  that happen within the realm. Modrons vary on abilities based on their rank. If Primus ever dies, the next highest ranking modron
                  will turn into the next Primus and the order of the plane will continue.
                </p>
          </section>
        </div>

        <TableOfContents />
    </>
  )
}
