import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
// import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function PlaneOfDreams() {
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
          <h1>Plane of Dreams</h1>
          <p>Plane of dreams and memories.</p>
        </header>

        <div id="page" >
          <section id="content" className="main">
            <h2 id="overview">Overview</h2>
              <p id="overview">
                The plane of dreams is where the memories of all souls are recorded and stored. Everytime a person sleeps, their
                memories are recorded into this plane and the final recordings are done when the person dies. Each memory is inside
                a dreamscape. Sometime in the past where no one knows the event that made it so, the Plane of Chaos has seeped into
                plane of dreams and made two demiplanes that the inhabitants were able to contain: Demiplane of Nightmares and
                Demiplane of Joy. When a person dreams, there is a chance their dreamscape is infected by these demiplanes and make
                the dreamer have visions when they sleep. This plane is also the easiest way for gods or other higher beings to 
                interact with a mortal, so it is common for mortals to receive messages or obtain prophecies from their dreams. The 
                ruler overlooking the plane of dreams is Mnemosyne. The reapers that patrol the plane of dreams are known are the 
                dream reapers. The denizens that live within this plane are mostly Caretakers with the exception of some gods that
                made this plane as their realm.
              </p>
            <h2 id="nightmares">Demiplane of Nightmares</h2>
                <p>
                    A horrific and unsettling plane full of ghoulish monsters that are unfathomable to the mind of any mortal being.
                    A tiny glimpse from a dreamer into this plane will cause terrible nightmares for the dreamer. Any creature that 
                    willfully ventured into theis realm have known to never come out while others that simply peer into this realm
                    have horrific visions for many years and even causing death from fear.
                </p>
            <h2 id="joy">Demiplane of Joy</h2>
                <p>
                    A bright and bountiful plane full of visions that the looker wants to see that brings them happiness. A tiny 
                    glimpse into this plane will bring a smile to any dreamer. Any who venture in this realm are to be forced out of 
                    the realm since they will not want to leave and any onlooker will want to venture into the realm.
                </p>
            <h2 id="dreamscape">Dreamscape</h2>
                <p>
                    A mini realm for each dreamer that records all their memories of what they experienced in life. As long the creature
                    is able to sleep, their memories will be recorded. If the mortal is unable to sleep, their dreamscape will record
                    their memories when they die. A dreamscape lasts for eternity, but they are incredible hard to find. The inhabitants
                    make it that the dreamscapes are stored away from prying eyes and make it even harder to take the memories.
                </p>
            <h2 id="inhabitants">Inhabitants</h2>
              <p>
                  These inhabitants are the locals of the Plane of Dreams make sure the dreamscapes are in order and the demiplanes
                  within the plane do not go beyond their boundries and the protect the dreamscapes.
              </p>
              <h3 id="mnemosyne">Mnemosyne</h3>
                <p>
                  The ruler of the Plane of Dreams and a titan. She is a quiet ruler that calmly looks over every dreamscape to make sure
                  they are safe and in order. She is not known to interfere unless the demiplanes start breaking out of their bonds and 
                  threaten to take over the plane of dreams as they have done in the past. Mnemosyne is also known to be very polite and 
                  kind when greeting outsiders who come visit her and allow them to freely explore the plane.
                </p>
              <h3 id="dream-reapers">Dream Reapers</h3>
                <p>
                  The dream reapers make daily routes to ensure the demiplanes and the dreamscapes are in check. They make sure no outsiders
                  mess with the dreamscapes since the memories are unique and should not be altered. They take action when the dreamscapes
                  are tampered with or someone is threatning to alter the plane of dreams. Their weapons are known to cut off an individual
                  from the plane of dreams and induce them into a coma or be unable to fall asleep. They can travel between each dreamscape
                  with ease.
                </p>
              <h3 id="denizens">Denizens</h3>
                <p>
                  Some gods have taken root in the Plane of Dreams to overlook the mortals of their world. The most common denizen are the Caretakers
                  who overlook the recording process of each dreamscape and make sure they are put in order.
                </p>
          </section>
        </div>

        <TableOfContents />
    </>
  )
}
