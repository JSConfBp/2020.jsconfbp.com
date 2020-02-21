import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout'
import Youtube from '../components/Youtube'
import useHeadingDecorator from '../hooks/useHeadingDecorator'

import css from './about.module.scss'

const [, getClassName] = useHeadingDecorator()

const About = () => (
  <Layout title="About us" pathName="/about">
    <h1 className={ getClassName({ color: 'purple', side: 'left'}) }>
      SZIA! ПРИВІТ! CZEŚĆ! SALUT! ЋАО! AHOJ! DOBRÝ DEN! ΓΕΙΆ ΣΟΥ! HOI! BUNĂ!
      ЗДРАВЕЙТЕ! ПРИВЕТ! HELLO!
    </h1>

    <p>
      We aim to be the JSConf of the region around Eastern-Middle Europe, an
      area so diverse in culture, people and views. A strictly nonprofit,
      open-sourced and community driven conference for the community of
      JavaScript, with the purpose to build and educate about new
      technologies, ideas and culture.
    </p>

    <Youtube
      src="oWmPuKDiRV4"
      title="JSConf Budapest 2019 Mood video"
    />

    <Youtube
      src="mJoS_pLbiWc"
      title="JSConf Budapest 2016 Mood video"
    />

    <h2 className={ getClassName({ color: 'orange', side: 'right'}) }>JSConf Budapest so far</h2>

    <p>Check out our earlier events!</p>

    <h3>2019</h3>

    <p>
      <a href="https://2019.jsconfbp.com">Site & Speakers</a>,<br />
      <a href="https://www.youtube.com/watch?v=OkovPZ1mVBI&list=PL37ZVnwpeshEMCvdYDdZ09Sy-toTftWu0">
        Videos of 2019
      </a>
    </p>


    <h3>2017</h3>

    <p>
      <a href="http://2017.jsconfbp.com">Site & Speakers</a>,<br />
      <a href="https://www.youtube.com/watch?v=aHVdJ0QT5rM&list=PL37ZVnwpeshH9ztZfHqvQhF1_Zm4VcCTD">
        Videos of 2017
      </a>
    </p>

    <h3>2016</h3>

    <p>
      <a href="http://2016.jsconfbp.com">Site & Speakers</a>,<br />
      <a href="https://www.youtube.com/watch?v=CL8_nlqTcw0&list=PL37ZVnwpeshE6PbF5GB4hvtU3A4HqMfxf">
        Videos of 2016
      </a>
    </p>

    <h3>2015</h3>

    <p>
      <a href="http://2015.jsconfbp.com">Site & Speakers</a>,<br />
      <a href="https://www.youtube.com/watch?v=1zj7M1LnJV4&list=PLFZ5NyC0xHDaaTy6tY9p0C0jd_rRRl5Zm">
        Videos of 2015
      </a>
    </p>

    <h2 className={ getClassName({ color: 'lightorange', side: 'left'}) }>The Team</h2>

    <ul className={ classnames('unstyled', css.team ) }>
      <li>
        <a href="https://twitter.com/_nec">
          <span>
            <img alt="Szabolcs" src="https://nec.is/nec.png" />
          </span>
          <span className={ css.name }>Szabolcs
          <br /> Szabolcsi-Tóth</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/hubudibu">
          <span>
            <img
              alt="Aniko"
              src="https://pbs.twimg.com/profile_images/663056435790614530/2-DbMaxT_400x400.png"
            />
          </span>
          <span className={ css.name }>Aniko Fejes</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BenedekGagyi">
          <span>
            <img
              alt="Bence"
              src="https://pbs.twimg.com/profile_images/1039213863923855360/3skKEfX0_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Benedek Gagyi</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/daniliptak">
          <span>
            <img
              alt="Dani"
              src="https://pbs.twimg.com/profile_images/867028857441931265/HJdtCgrz_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Daniel Liptak</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/_puffancs">
          <span>
            <img
              alt="Gergő"
              src="https://pbs.twimg.com/profile_images/477984724741148672/4aHVf43A_400x400.png"
            />
          </span>
          <span className={ css.name }>Gergő Nagy</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/cat_a_flame">
          <span>
            <img alt="Stefanie" src="http://schatten.hu/temp/meh.png" />
          </span>
          <span className={ css.name }>Stefania Peter</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/freevo">
          <span>
            <img
              alt="Peter"
              src="https://pbs.twimg.com/profile_images/897112677037867008/V2NmMOl-_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Peter Frivalszky</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/pentzzsolt">
          <span>
            <img
              alt="Zsolt"
              src="https://pbs.twimg.com/profile_images/705173503784390656/RXyWsHLA_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Zsolt Pentz</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/blepati">
          <span>
            <img
              alt="Pati"
              src="https://avatars0.githubusercontent.com/u/15064767?s=460&v=4"
            />
          </span>
          <span className={ css.name }>Patricia Blesa</span>
        </a>
      </li>

      <li>
        <a href="https://twitter.com/matenadasdi">
          <span>
            <img
              alt="Mate"
              src="https://pbs.twimg.com/profile_images/958732112982675457/i8lskEp7_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Máté Nádasdi</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/TPuski">
          <span>
            <img
              alt="Tamas"
              src="https://pbs.twimg.com/profile_images/775696303980474370/cncvvwch_400x400.jpg"
            />
          </span>
          <span className={ css.name }>Tamas Puski</span>
        </a>
      </li>

    </ul>

  </Layout>
)

export default About
