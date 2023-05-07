import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
// import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function Afterlife() {
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
          <h1>Afterlife</h1>
          <p>Plane of death.</p>
        </header>

        <div id="page" >
          <section id="content" className="main">
            <h2 id="overview">Overview</h2>
              <p id="overview">
                The plane of death is where all the different final destinations of the soul go. Each destination is governed
                by a god that collects their souls in after the souls are judge in Nirvana. If a soul is not chosen or selected
                for a destination in the Afterlife, it is put into the ethereal plane. The ruler overlooking the Afterlife is
                Cronus. The reapers that patrol the Afterlife are known are the grim reapers. The denizens that live within
                this plane vary depeneing the needs of the gods that rule over their domain.
              </p>
            <h2 id="ethereal-plane">Ethereal Plane</h2>
              <p>
                In the void between the realms where no souls are judged to a specific god or realm to claim them, the ethreal 
                plane is a realm that makes souls slowly drift around until the fade. The souls get no perception of time and
                feel no emotions. This realm is the closest to the material plane within the Afterlife, so it's common for souls
                to go the material plane as a ghost or creatures to visit or use the ethereal plane at their leisure.
              </p>
            <h2 id="realms">Relms</h2>
              <p>
                With the Afterlife being infinite in space, any god can take a part of the plane and create their own demiplane to
                their liking. In their self-made realm, they can house souls that has been judged to allow them to have or the soul
                is willing to go into the realm. To the god's decision, the soul can be promoted to a denizen to their realm.
              </p>
              <h3 id="underworld">Underworld</h3>
                <p>
                  A realm, also known as the House of Hades, where all souls chosen from specific gods from <span style={{color: "red"}}>-----</span> to be in their 
                  care. The god that rules over this realm is Hades and has made sub realms within the realm to further divide the
                  souls.
                </p>
              <h3 id="realm-of-hel">The Realm of Hel</h3>
                <p>
                  A realm ruled by the goddess Hel from <span style={{color: "red"}}>-----</span>. The goddess chooses any souls that
                  is not picked from Odin and Freyja. The souls do not experience tormet or bliss but instead pass their days as if
                  alive. If any living being visits Hel, they would find it quiet and cold in an underground environment with the 
                  occasionally whispers of a soul.
                </p>
              <h3 id="valhalla">Valhalla</h3>
                <p>
                  A realm ruled by the god Odin from <span style={{color: "red"}}>-----</span>. The god chooses souls that died from
                  battle and shares the souls that died with Fólkvangr. Valhalla is known to be a big hall that houses every soul and
                  allows them to be merry by drinking and telling tales.
                </p>
              <h3 id="duat">Duat</h3>
                <p>
                  A realm ruled by the god Osiris from <span style={{color: "red"}}>-----</span>. Any soul that is chosen or Osiris has
                  chosen will be sent to his realm to be judged on his terms. First, the soul will have to go through trials to reach
                  Osiris. Then another god Anubis will judge the soul to either be eaten by the goddess Ammit and be in agony for 
                  eternity or the soul will be allowed to go to a sub realm called the Field of Reeds, or Aaru, where the soul would
                  live a perfect version of their life from when they were alive.
                </p>
              <h3 id="fólkvangr">Fólkvangr</h3>
                <p>
                  A realm ruled by the goddess Freyja from <span style={{color: "red"}}>-----</span>. The goddess chooses souls that 
                  died from battle and shares the souls that died with Valhalla. Fólkvangr is known to have vast fields and meadows to
                  feed and have the souls be merry in Freyja's realm.

                </p>
              <h3 id="to-be-continued">To Be Continued</h3>
                <p>
                  Will be adding more later.
                </p>
            <h2 id="inhabitants">Inhabitants</h2>
              <p>
                  These inhabitants are the locals of the Afterlife where they make sure the realm runs smoothly. They work closely from
                  the gods from the material plane to ensure the souls are distributed justifully and make sure no soul goes unaccounted
                  for.
              </p>
              <h3 id="cronus">Cronus</h3>
                <p>
                  The ruler of the Afterlife and a titan. It is believed that he is the most powerful god since he is more powerful than
                  all the gods combined. He makes sure everything is in order and deals with each god personally to make sure their realms
                  are in order. However, he is known to be neutral and passive when it comes to the interworkings of the plane. Cronus
                  believes what happens in the realms are in the gods' right to deal with it on their terms. He will only act when it
                  affects his plane.
                </p>
              <h3 id="grim-reapers">Grim Reapers</h3>
                <p>
                  The grim reapers make daily routes between the realms to make sure the nothing is causing chaos to the plane. They are known
                  to go invisible and observe and only show and take action when a soul or outside force starts causing chaos outside of the
                  realms. On rare occasions, they will be sent to the material plane on missions to either collect a soul that escaped, collect
                  a soul that has long past its prime, or track down an interlooper that plans to disrupt the Afterlife as a whole. These reapers
                  have weapons that can sever the connection of a soul from its body with one clean swipe, and they can travel between the ethereal
                  plane and other planes at will.
                </p>
              <h3 id="denizens">Denizens</h3>
                <p>
                  There are many denizens of the Afterlife that works of the lifeline on how this plane works. The most popular known are the fiends
                  and celestials. Another denizen are the Wardens that do and collect the paperwork between the realms.
                </p>
          </section>
        </div>

        <TableOfContents />
    </>
  )
}
