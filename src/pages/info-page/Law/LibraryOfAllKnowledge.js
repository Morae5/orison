import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
// import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function LibraryOfAllKnowledge() {
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
          <h1>Library of All Knowledge</h1>
          <p>Plane of knowledge.</p>
        </header>

        <div id="page" >
          <section id="content" className="main">
            <h2 id="overview">Overview</h2>
                <p id="overview">
                    The Library of All Knowledge is a library-like plane that houses all knowldge in the form of books and scrolls. It is said 
                    that every event that has happened within the realms are recorded and is contiounously being updated; however, it will not
                    record the future since the event have not been transpired. Furthermore, every story told or any forms or work written down
                    are stored in this library. Many come to this library to learn knowledge that has long been forgotten to time. The ruler 
                    overlooking the Library of All Knowledge is Coeus. The reapers that patrol the Library of All Knowledge are known as the lore 
                    reapers. The denizens that live within this plane are mostly the Judges as well as other denizens from the other Law planes
                    traveling through this plane.
                </p>
            <h2 id="inhabitants">Inhabitants</h2>
                <p>
                  These inhabitants are the locals of the Library of All Knowledge to assure the works within the library are protected and make
                  sure none leave the library.
                </p>
              <h3 id="coeus">Coeus</h3>
                <p>
                  The ruler of the Library of All Knowledge and a titan. He oversees the entire library and makes sure no harm comes to the library.
                  If something would affect the library as the whole, he would take action and is known to be very protective of each book. He is
                  also very cooperative when you bring a work that is not yet in the library.
                </p>
              <h3 id="lore-reapers">Lore Reapers</h3>
                <p>
                  The lore reapers make daily routes throughout the library-like plane to no one is stealing or tampering the books. They are known
                  to act when someone steals or damages a book. They somtimes wander the other realms fdor works that are not in the library. The lore
                  reapers' weapons can reduce the creature to have no intelligence and be induced into a vegetable-like state. Lore reapers have the
                  ability to cast any spell and use any item.
                </p>
              <h3 id="denizens">Denizens</h3>
                <p>
                  Librarians are the main denizens that take care of the library and the books. They know where each book is and can recall any text from
                  the books, but they prefer to reference visitors to the text for the visitor to read themselves. They are known to be very passive and
                  not engage in any discourse with visitors coming to the library. However, they would risk their lives to save any works that are in danger.
                </p>
          </section>
        </div>

        <TableOfContents />
    </>
  )
}
