import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
import Link from '../../../component/Link'

export default function Generic() {
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
            <h1>Creation</h1>
            <p>A brief description of the creation of reality.</p>
        </header>

        <div id="page">
            <section id="content" className="main">
                <h2 id="beginning">The Beginning</h2>
                <p>
                    In the beginning, there was the <Link link="/creation#iris" title ="Iris" />, Plane of Chaos, and the Plane of Law, and the beings to come into existance first were the 
                    gods and the creatures of the inner and outer planes. When the planes of law and chaos collided. Planes and their respective 
                    residents formed interteining energies. Around the same time, gods came out from the Iris. The gods and the planar creatures all
                    knew what their purpose was as if being lead from an outside force.
                    <br />
                    <br />
                    The next to come were the dragons and the plants and animals. It is believed they are the byproduct from the creation of gods and
                    the collision of the Law and Chaos planes. However, the weave and power difference between the dragons and natural creatures has 
                    confused many scholars on how their actual creation happened. By this time, the gods and the elemental plane has created planets
                    where these new creations to live on.
                    <br />
                    <br />
                    The last creations to come from the birth of this universe are the mortals such as humans and elves. Some believe the gods have 
                    created them while some others believe that they are debris leftover from the collision. In the end, the creation of mortals is a 
                    mystery on they came to be especially with their unique composition of having necrose within them.
                </p>

                <h2 id="weave">Weave</h2>
                <p>
                    Every creature, object, and some even time in this universe is made of the weave. The name came from the thread-like appearance
                    it takes which many have nicknamed it as the golden thread of life. The origns of these threads come from a giant white sun known 
                    as the Iris where instead of giving off light, the weave sprouts from it and travels to the coners of the universe. No one knows 
                    how it came to be and how it contiously dispenses the weave from within. With the weave so intricated into the fabric of reality, 
                    many can even predict the future by seeing the direction of where it is going.
                </p>

                <h2 id="necrose">Necrose</h2>
                <p>
                    With every light, there is darkness. A substance called the necrose eats away the weave by infecting a host and consuming the 
                    host's weave. When the necrose gets strong enough, it can move on its own to get weave from another source. Some would call it 
                    a creature with how it shows sentience while others see it as a disease. However, mortals are not affected affected by the necrose 
                    since they already have some form of dormant necrose within them, making them have resistance. Even though the races scattered
                    across the material plane are resistant to being infected by the necrose, it does not mean they are immune to being engulfed and
                    drained of their weave. Every corner of the universe fights to survive against the necrose as they try to live their lives under the 
                    guidance of the weave.
                </p>

                <h2 id="iris">Iris</h2>
                <p>
                    Of all entities within the universe, the Iris is the least known about. It is known that is a dense star made up of pure weave which 
                    gives off a gentle white and gold light. However, none is sure if the Iris existed before or after the existance of the Planes of Law 
                    and Chaos. Any who get to close to interact with the Iris would have be dissapted into pure weave and sucked into the Iris, making it 
                    very hard to know anything about the star. Some scholars speculated that the Iris supplies all weave to the universe, so if it ever 
                    goes out the universe might end to exist.
                </p>
            </section>
        </div>

        <TableOfContents />
    </>
  )
}
