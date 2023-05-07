import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
// import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function Nirvana() {
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
          <h1>Nirvana</h1>
          <p>Plane of judgement.</p>
        </header>

        <div id="page" >
          <section id="content" className="main">
            <h2 id="overview">Overview</h2>
                <p id="overview">
                    Nirvana, also known as the City of Judgement, is a large city-like plane that judges souls for their final destination 
                    and other creatures to be put in front for trial. All souls that await for their trial are placed in the Fugue Plane to
                    safe keep them or if a god comes to pick them up directly to bypass the trial. Creatures who put in court within this plane
                    are known to have done a deed that affected the balance of order within the different planes. Rarely a creature is put on
                    trial within this plane. The ruler overlooking Nirvana is Themis. The reapers that patrol Nirvana are known as the court 
                    reapers. The denizens that live within this plane are mostly the Judges as well as other denizens from the other Law planes
                    traveling through this plane.
                </p>
            <h2 id="fugue-plane">Fugue Plane</h2>
                <p>
                    An empty plane within Nirvana where souls awaiting for their judgement for their final destination wait. All souls within
                    this realm don't feel time move and mostly unaware of their surroundings. Gods can collect the souls that belong to them,
                    such as priests, champions, or apostles. Fiends sometimes roam this realm to try to persuade the souls to come with them
                    to bypass a judgement that the soul knows will not end in their favor with promises of rising in the fiend's ranks. The
                    inhabitants allows the fiends to roam the Fugue Plane as long the fiends do not take the souls by force.
                </p>
            <h2 id="inhabitants">Inhabitants</h2>
                <p>
                  These inhabitants are the locals of Nirvana to apply judgement to all beings and souls a fair trial and to make sure
                  the realms' laws are intact.
                </p>
              <h3 id="themis">Themis</h3>
                <p>
                  The ruler of Nirvana and a titan. She is the head judge within this plane and overlooks every trial to make sure they are
                  fair. Themis only personally takes cases under her care when the judged has done a crime that affects multiple realms and
                  affects the Plane of Law, which very rarely happens. She does not talk to others unless it is relevant to cases within this
                  plane and does not engage in idle chatter.
                </p>
              <h3 id="court-reapers">Court Reapers</h3>
                <p>
                  The court reapers make daily routes throughout the city-like plane to ensure order and provide judgement. With creatures actively
                  moving through this plane, the resident reapers are more vigilant and indifferent than the other reapers. Most of their duties
                  involve dealing with troublesome outsiders or apply judgement to those who has run away. The court reapers' weapons can count down 
                  those who are unworthy while leaving the just ones unscathed. Also, the weapons can seal any spell or ability from being usedf from 
                  within the plane. Court reapers have the ability to see how good the intentions a creature has and able to detect lies.
                </p>
              <h3 id="denizens">Denizens</h3>
                <p>
                  Judges are the main denizens that take part of the trials to privade the final verdict to the ones being judged. They also dealing
                  with all the paperwork that comes from the other realms and process it in Nirvana. When a creature travels to the Plane of Law, they
                  will most likely end up in this plane, so it's very common for creatures from other realms to roam this plane. Also, denizens from 
                  other planes within the Plane of Law and gods travel through Nirvana for requests or work related to the Plane of Law.
                </p>
          </section>
        </div>

        <TableOfContents />
    </>
  )
}
