import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import '../../css/Footer.css'
import Link from '../../component/Link' 

export default function Home() {
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
    <div id ="wrapper">
		<div id="header" className="alt">
			<h1>Morae's Orison</h1>
		</div>
		<nav id="nav2">
			<ul>
				<li><a href="#intro" className="active">Intro</a></li>
				{/* <li><a href="#beginning">The Beginning</a></li> */}
				<li><a href="#articles">Articles</a></li>
				{/* <li><a href="#cta">Get Started</a></li> */}
			</ul>
		</nav>
		<div id="main">
			<section id="intro" className="main special">
				<div className="content">
					<header className="major">
						<h2>Intro</h2>
					</header>
					<p>
						Hello. This is a roughly put together website that I made for my hombrew campaign in DND 5e. This campaign includes different worlds 
						with their own gods affliated with them. I also changed around how the different realms work, such as the FeyWild and Elemental Planes.
						<br/>
						<br/>
						My plans for this website is be a place for my players use as a reference for looking up lore and maybe inspiration for their next
						character. I even plan to make a different website for each of the "main" planets.
						<br/>
						<br/>
						I never did well in English class so please be easy when it comes to grammer or spelling mistakes :)
					</p>
					{/* <p>
						Every creature, object, and some even time in this universe is made of the weave. The name came from the thread-like appearance
						it takes which many have nicknamed it as the golden thread of life. The origns of these threads come from a giant white sun known 
						as the Iris where instead of giving off light, the weave sprouts from it and travels to the coners of the universe. No one knows 
						how it came to be and how it contiously dispenses the weave from within. With the weave so intricated into the fabric of reality, 
						many can even predict the future by seeing the direction of where it is going.
						<br/>
						<br/>
						With every light, there is darkness. A substance called the necrose eats away the weave by infecting a host and consuming the 
						host's weave. When the necrose gets strong enough, it can move on its own to get weave from another source. Some would call it 
						a creature with how it shows sentience while others see it as a disease. However, mortals are not affected affected by the necrose 
						since they already have some form of dormant necrose within them, making them have resistance. Even though the races scattered
						across the material plane are resistant to being infected by the necrose, it does not mean they are immune to being engulfed and
						drained of their weave. Every corner of the universe fights to survive against the necrose as they try to live their lives under the 
						guidance of the weave.
					</p> */}
				</div>
			</section>
			{/* <section id="beginning" className="main special">
				<div className="content">
					<header className="major">
						<h2>The Beginning</h2>
					</header>
					<p>
						In the beginning, there was the Iris, Plane of Chaos, and the Plane of Law, and the beings to come into existance first were the 
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
				</div>
			</section> */}
			<section id="articles" className="main special">
				<header className="major">
					<h2>Articles</h2>
				</header>
				<p>
					Need to update this list.
				</p>
				<div style={{justifyContent: 'center', width: '100%'}}>
					<div style={{display: 'table', width: '100%'}}>
						<div style={{width:'33.3%', float:'left'}}>
							<h3 >Plane of Chaos</h3>
							<h4 >Fey Wild</h4>
							<h4 >Underdark</h4>
							<h4 >Elemental Planes</h4>
						</div>
						<div style={{width:'33.3%', float:'left'}}>
							<h3 ><Link link="/law" title ="Plane of Law"/></h3>
							<h4 ><Link link="/law/afterlife" title ="Afterlife" /></h4>
							<h4 ><Link link="/law/mechanus" title ="Mechanus" /></h4>
							<h4 ><Link link="/law/plane-of-dreams" title ="Plane of Dreams" /></h4>
							<h4 ><Link link="/law/nirvana" title ="Nirvana" /></h4>
							<h4 ><Link link="/law/library-of-all-knowledge" title ="Library of All Knowledge" /></h4>
						</div>
						<div style={{width:'33.3%', float:'left'}}>
							<h3 >Material Plane</h3>
							<h4 >Races</h4>
							<h5>Human</h5>
							<h4 >Classes</h4>
							<h5>Fighter</h5>
						</div>
					</div>
					<div style={{display: 'table', width: '100%', marginTop: '1.1em'}}>
						<div style={{width:'49%', float:'left'}}>
							<h3 >Void</h3>
						</div>
						<div style={{width:'49%', float:'left'}}>
							<h3 >Universes</h3>
						</div>
					</div>
				</div>
			</section>
				{/* <section id="intro" className="main">
					<div className="spotlight">
						<div className="content">
							<header className="major">
								<h2>Ipsum sed adipiscing</h2>
							</header>
							<p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
							adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
							Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
							<ul className="actions">
								<li><a href="google.com" className="button">Learn More</a></li>
							</ul>
						</div>
						<span className="image"><img src="images/pic01.jpg" alt="" /></span>
					</div>
				</section>  */}
				{/* <section id="first" className="main special">
					<header className="major">
						<h2>Magna veroeros</h2>
					</header>
					<ul className="features">
						<li>
							<span className="icon solid major style1 fa-code"></span>
							<h3>Ipsum consequat</h3>
							<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
						</li>
						<li>
							<span className="icon major style3 fa-copy"></span>
							<h3>Amed sed feugiat</h3>
							<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
						</li>
						<li>
							<span className="icon major style5 fa-gem"></span>
							<h3>Dolor nullam</h3>
							<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
						</li>
					</ul>
					<footer className="major">
						<ul className="actions special">
							<li><a href="generic.html" className="button">Learn More</a></li>
						</ul>
					</footer>
				</section>
				<section id="second" className="main special">
					<header className="major">
						<h2>Ipsum consequat</h2>
						<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
						posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
					</header>
					<ul className="statistics">
						<li className="style1">
							<span className="icon solid fa-code-branch"></span>
							<strong>5,120</strong> Etiam
						</li>
						<li className="style2">
							<span className="icon fa-folder-open"></span>
							<strong>8,192</strong> Magna
						</li>
						<li className="style3">
							<span className="icon solid fa-signal"></span>
							<strong>2,048</strong> Tempus
						</li>
						<li className="style4">
							<span className="icon solid fa-laptop"></span>
							<strong>4,096</strong> Aliquam
						</li>
						<li className="style5">
							<span className="icon fa-gem"></span>
							<strong>1,024</strong> Nullam
						</li>
					</ul>
					<p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
					<footer className="major">
						<ul className="actions special">
							<li><a href="generic.html" className="button">Learn More</a></li>
						</ul>
					</footer>
				</section>
				<section id="cta" className="main special">
					<header className="major">
						<h2>Congue imperdiet</h2>
						<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
						posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
					</header>
					<footer className="major">
						<ul className="actions special">
							<li><a href="/generic" className="button primary">Get Started</a></li>
							<li><a href="generic.html" className="button">Learn More</a></li>
						</ul>
					</footer>
				</section> */}
		</div>
    </div>
  )
}
