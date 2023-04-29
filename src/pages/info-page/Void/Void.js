import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TableOfContents from '../../../component/TableOfContents'
import '../../../css/Generic.css'
import Link from '../../../component/Link'

//<Link link="/creation#iris" title ="Iris" />
//style={{paddingLeft:0}}
export default function Void() {
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
            <h1>Void</h1>
            <p>A realm devoid of the weave.</p>
        </header>

        <div id="page">
            <section id="content" className="main">
                <h2 id="overview">Overview</h2>
                    <p id="overview">
                        The void is the largest and smallest realm. Between every single thread of weave is the void. Therefore, it exists between the weave gaps on an 
                        atomic level, and at the same time it is everywhere. The inbitants are commly known as void creatures. See below to know more about them. No 
                        concept of light nor darkness exist, so you can see objects infinitely away if they want to be seen or can't see what's beside you if they 
                        want to be hidden. However, any person can breathe normally, but the creature will need to have a way to move through the empty expanse with 
                        no gravity. If a person are lucky, they will find a void creature known as <Link link="/void#mudor" title ="Mudor" /> which takes a form 
                        similarly to a planet. Any creature who has mastered traveling in, through, and out the void can easily use it for teleportation. Since it is 
                        between the void and the concept of distance is vague, someone can use the void to teleport great distances steathly if they can tell where 
                        in the other realms they align with from within the void.
                    </p>
                <h2 id="creatures">Void Creatures</h2>
                    <p id="creatures">
                        THe void creatures vary in size, shape, and abilties. Many scholars that took their time to study the vast expanse devoid of magic have categorized
                        them into 3 categroies: <Link link="/void#voidlings" title ="Voidlings" />, <Link link="/void#voidwalkers" title ="Voidwalkers" />, and <Link link="/void#horrors" title ="Horrors" />. 
                        Some others would call these creatures as eldritch named after a famous scholar that contributed most of the research that is used today. 
                        <br />
                        <br />
                        A common trait between them is that a void creature can consume or absorb another void creature. That void creature will then gain the powers of
                        the consumed void creature and even get larger based how large the consumed void creature is. There are times in the void where many void creatures
                        cross paths at once would turn into a multi-century battle between the inhabitants as they fight until one is left.
                    </p>
                    <h3 id="voidlings">Voidlings</h3>
                        <p id="voidlings">
                            Voidlings are the a category of void creatures that are smaller in size comparitively to other void creatures. They are more vicious and move 
                            frequently throughout the void. All void creatures start as voidlings but no one knows how they come into existance. If a voidlings becomes 
                            strong enough by consuming other void creatures, it will "awaken" and become a horror. There is a slim chance when a voidling consumes a soul, 
                            they will be tranformed into a voidwalker.
                            <br />
                            <br />
                            The appearance of voidlings vary greater. They can be a spherical tentacle mass with many eyes to an eyeless brute with only muscles. Their sizes 
                            range to the palm of your hand to a large house. 
                        </p>
                    <h3 id="voidwalkers">Voidwalkers</h3>
                        <p id="voidwalkers">
                            Voidwalkers are voidlings that have consumed a soul and the soul has merged with the void creature to make it sentient and act like a person. The
                            voidwalker can have memories of their past, but their personality would be altered to where they prefer being in the void and become indiffernt to
                            anything outide their realm. They can continue consuming other void creatures to mae themselves stronger and can have different reactions to outside
                            forces on their personality.
                            <br />
                            <br />
                            The appearance of voidwalkers are reatively humanoid with some features of void creatures mixed into the appearence. They can turn into the form of a
                            void creature they have consumed but seem more confrotable in their humanoid form.
                        </p>
                    <h3 id="horrors">Horrors</h3>
                        <p id="horrors">
                            Horrors are the awakened form of voidlings that have lived far more than most creatures in teh universe. Their powers is thorugh to bend reality to their
                            whim, and their thoughts are beyond and creatures comprehension. One in a while, they would be drawn to the forces outside of their realm and sometimes
                            with mortals for their personal goals.
                            <br />
                            <br />
                            The appearance of a horror is based on the horrors preference. They can take an appearance that will cause anyone to fall under madness when anyone looks
                            at them or have no form and be in a gaseous state.
                            <br />
                            <br />
                            Some horors include: 
                            <ul>
                                <li>Cthulu</li>
                                <li>Mudor</li>
                            </ul>
                        </p>
                <h2 id="mudor">Mudor</h2>
                    <p id="mudor">
                        Commonly known as the planet in the void or the living planet. Mudor is a horror that takes an appearence that is spherical in shape and the size of a medium-sized
                        planet. It is the only source in the void that has gravity so creatures can walk upon Mudor's surface normally. Mudor is also a horror that is very indifferent to
                        his surrounding so creatures that a capable of complex thoughts can manipulate the surface of Mudor to their prefrence, such as a house or changing the ground to 
                        sand. MAny voidwalkers has taken Mudor as their place for rest whiel outsiders will find themselves eventually on Mudor as a recluse from other void creatures.
                    </p>
            </section>
        </div>

        <TableOfContents />
    </>
  )
}
