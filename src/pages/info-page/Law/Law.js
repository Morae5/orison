import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
// import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function Law() {
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
            <h1>Law</h1>
            <p>Plane of law and order.</p>
        </header>

        <div id="page" style={{paddingLeft:0}}>
            <section id="content" className="main">
                {/* <h2 id="overview">Overview</h2> */}
                    <p id="overview">
                       The Law plane, also known as the realm of order, is one of the major planes that make up the universe. It allows logic and
                       order to exist in the material plane. The Law plane naturally split itself into five smaller planes to organize its different
                       influence:
                    </p>
                    <ul style={{marginLeft: "1.5em"}}>
                        <li><Link link="/law/afterlife" title ="Afterlife" />: Plane of souls rest.</li>
                        <li><Link link="/law/mechanus" title ="Mechanus" />: Plane of time.</li>
                        <li><Link link="/law/plane-of-dreams" title ="Plane of Dreams" />: Plane of dreams and where each person's memory is recorded.</li>
                        <li><Link link="/law/nirvana" title ="Nirvana" />: Plane of judgment.</li>
                        <li><Link link="/law/library-of-all-knowledge" title ="Library of All Knowledge" />: Plane of knowledge.</li>
                    </ul>
                    <p>
                        Each plane within the Law plane has inhabitants that overlook and act as caretakers to each respective realm. Each one has a 
                        ruler that manages the affairs, reapers that act as the vanguard and deals with any opposing force within their realm, and 
                        regular denizens that keep the operations afloat. It is known that the creatures within these planes can travel freely 
                        between the different realms only if they have permission or logical reason to do so.
                    </p>
            </section>
        </div>

        {/* <TableOfContents /> */}
    </>
  )
}
