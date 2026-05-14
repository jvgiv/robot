import React from 'react'
import Image from 'next/image'

const sponsorImages = [
    {
        src: '/sponsors/pfiz.png',
        alt: 'Pfizer',
        url: 'https://www.pfizer.com/'
    },
    {
        src: '/sponsors/herrera.png',
        alt: 'Herrera Contractors',
        url: 'https://www.herrera-contractors.com/'
    },
    {
        src: '/sponsors/picerne.jpg',
        alt: 'Picerne Real Estate Group',
        url: 'https://www.picerne.com/'
    },
    {
        src: '/sponsors/patriot.jpg',
        alt: 'Patriot Thermal Controls',
        url: 'https://patriotthermal.com/'
    },
    {
        src: '/sponsors/daves.png',
        alt: "Dave's Fresh Marketplace",
        url: 'https://www.davesmarketplace.com/'
    },
    {
        src: '/sponsors/fidelity.png',
        alt: 'Fidelity Investments',
        url: 'https://www.fidelity.com/'
    },
    {
        src: '/sponsors/cousins.png',
        alt: 'Cousins Landscaping',
        url: 'http://www.landscape.com/Providence-ri/COUSINS-LANDSCAPING-LLC-233508.html'
    },
    {
        src: '/sponsors/frank tree.png',
        alt: 'Frank Tree Services',
        url: 'https://www.yelp.com/biz/frank-tree-services-and-landscaping-scituate'
    },
    {
        src: '/sponsors/quetzal.png',
        alt: 'Quetzal Electric Services',
        url: 'https://www.instagram.com/quetzalelectric/'
    },
    {
        src: '/sponsors/warwickpublic.png',
        alt: 'Warwick Public Schools',
        url: 'https://www.warwickpublicschools.org/'
    },
    {
        src: '/sponsors/herrick.png',
        alt: 'Herrick & White Architechtural Woodworkers',
        url: 'https://www.herrick-white.com/'
    },
    {
        src: '/sponsors/hbd.png',
        alt: 'HB Designs',
        url: 'https://www.google.com/search?q=HB+Designs+Reviews'
    },
    {
        src: '/sponsors/chelos.png',
        alt: "Chelo's Hometown Bar & Grille",
        url: 'https://chelos.com/'
    },
    {
        src: '/sponsors/goldfish.jpg',
        alt: 'Goldfish Swim School',
        url: 'https://goldfishswimschool.com/warwick/'
    },
    {
        src: '/sponsors/riog.png',
        alt: 'RI Orthodontic Group',
        url: 'https://www.riorthodontic.com/'
    },
    {
        src: '/sponsors/runway41.png',
        alt: 'Runway 41 Sports Bar & Grill',
        url: 'https://runway41bar.com/'
    },
    {
        src: '/sponsors/advocacy.png',
        alt: 'Advocacy Solutions',
        url: 'https://advocacysolutionsllc.com/'
    },
    {
        src: '/sponsors/smokinjoes.png',
        alt: "Smok'n Joe's BBQ",
        url: ''
    },
    {
        src: '/helm.png',
        alt: 'Toll Gate Robo Titans',
        url: 'https://robotitans.org'
    },
    {
        src: '/sponsors/ashleylynn.jpg',
        alt: 'Ashley Lynn Events',
        url: 'https://www.ashleylynnevents.com/'
    },
]

export default function Sponsors() {
  return (
    <div id="sponsors" className="section">
      <div className="reveal">
        <div className="section-tag">Our Sponsors</div>
        <h2>
          Thank you to our
          <br />
          incredible sponsors.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.75rem',
            marginTop: '2rem',
          }}
        >
          {sponsorImages.map((sponsor, i) => {
            const card = (
              <div
                style={{
                  position: 'relative',
                  height: '90px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(200,205,214,0.1)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  fill
                  sizes="150px"
                  style={{ objectFit: 'contain', padding: '0.75rem' }}
                />
              </div>
            )

            return sponsor.url ? (
              <a
                key={i}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
                className="sponsor-card"
              >
                {card}
              </a>
            ) : (
              <div key={i} className="sponsor-card">{card}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
