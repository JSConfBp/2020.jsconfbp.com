import React from 'react'
import Layout from '../components/Layout'

const Covid = () => (
  <Layout
    title="Hungarian COVID-19 travel guidelines and crossing the border"
    pathName="/covid"
    image="covid-guidelines.png"
    >
    <h1>Hungarian COVID-19 travel guidelines and crossing the border</h1>
    <p>
      Last updated at: <strong>February 26, 2022.</strong>
    </p>
    <p>
      <em>Please note that these guidelines are subject to constant change. We do our best to
      update this page as quickly as possible as new measures take effect.</em>
    </p>
    <h2 id="important-information-before-you-proceed">
      Important information before you proceed
    </h2>
    <p>
      Please take note that from May 1 on, according to Hungarian law,{' '}
      <strong>
        you need to have a vaccination card to be able to enter the premises of
        JSConf Budapest 2022.
      </strong>{' '}
      In other words, a fresh PCR test or having recovered from COVID in the
      past six months will not be enough, even though you can enter the country
      with only one of those. For further details, please read below.
    </p>
    <p>
      Our government is constantly monitoring the COVID-19 pandemic situation
      and legislation around travel is constantly changing.{' '}
      <strong>We will keep this page up-to-date</strong> as best we can do to
      keep you informed on travel rules. This way you can always make sure you
      have everything you need to know before you decide to buy your ticket for{' '}
      <strong>JSConf Budapest 2022.</strong>
    </p>

    <ul className="small" aria-label="Table of contents">
      <li>
        <a href="#travel-rules">Travel rules</a>
        <ul>
          <li>
            <a href="#traveling-from-eu-countries">
              Traveling from EU countries
            </a>
          </li>
          <li>
            <a href="#traveling-from-non-eu-countries">
              Traveling from non-EU countries
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#traveling-for-kids">Traveling for kids</a>
      </li>
      <li>
        <a href="#covid-19-restrictions-while-youre-in-hungary">
          COVID-19 restrictions while you&rsquo;re in Hungary
        </a>
        <ul>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#further-reading-official-sources">
          Further reading, official sources
        </a>
      </li>
    </ul>

    <h2 id="travel-rules">Travel rules</h2>
    <h3 id="traveling-from-eu-countries">Traveling from EU countries</h3>
    <p>
      EU citizens and people coming via EU countries are pass Hungarian borders
      without restriction, given they have{' '}
      <strong>an official EU COVID certificate pass.</strong> The pass could
      either be a physical paper or a <strong>mobile app</strong> since what you
      get is a QR code. If you are an EU citizen or you&rsquo;re legally staying
      in an EU country, you can get an EU certificate.
    </p>
    <p>You are eligible for an EU certificate if either</p>
    <ul>
      <li>
        you&rsquo;ve been <strong>vaccinated</strong> (with your latest shot
        being no more than 9 months old) or{' '}
      </li>
      <li>
        you&rsquo;ve received a{' '}
        <strong>negative PCR test result in the past 72 hours</strong> (an
        antibody rapid test will not suffice) or
      </li>
      <li>
        <strong>recovered</strong> from COVID-19 in the past 6 months. A valid,
        printed, signed proof of recovery should be presented at the border
        control.
      </li>
    </ul>
    <p>
      Please take note that while you and your family members can enter the
      country with a negative PCR test or having recovered from COVID,{' '}
      <strong>
        you must be vaccinated to enter the JSConf Budapest 2022 event.
      </strong>
    </p>
    <p>
      <strong>
        <a href="https://www.google.com/url?q=https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en&amp;sa=D&amp;source=editors&amp;ust=1645655227959743&amp;usg=AOvVaw2T4k8FzhMnhcsRWoG0YpsG">
          For more information on obtaining an EU COVID-19 certificate, look
          here
        </a>
        .
      </strong>
    </p>
    <p>
      Note that there are 33 other countries that have joined the EU certificate
      system, meaning that COVID certificates issued in those countries are also
      accepted.
    </p>
    <p>
      <strong>If you do not possess a valid EU COVID certificate,</strong>{' '}
      you&rsquo;ll need a negative COVID-19 PCR test that is no older than 72
      hours before entering the country and is issued in English or Hungarian.
    </p>
    <h3 id="traveling-from-non-eu-countries">
      Traveling from non-EU countries
    </h3>
    <p>
      Under the current EU approach, non-EU travelers who are fully vaccinated
      with an EMA-authorised vaccine should be able to travel to the EU for any
      purpose. 33 other countries have joined the EU certificate system, meaning
      that COVID certificates issued in those countries are also accepted.
    </p>
    <p>
      If you are traveling from any of the following 33 countries and have a{' '}
      <strong>locally issued COVID certificate,</strong> your certificate should
      be valid in the EU as well, as long as your vaccine is accepted by the
      EMA:
    </p>
    <ul className="small columns">
      <li>Albania</li>
      <li>Andorra</li>
      <li>Armenia</li>
      <li>Cabo Verde</li>
      <li>El Salvador</li>
      <li>Faroe Islands</li>
      <li>Georgia</li>
      <li>Israel</li>
      <li>Iceland</li>
      <li>Lebanon</li>
      <li>Liechtenstein</li>
      <li>Moldova</li>
      <li>Monaco</li>
      <li>Montenegro</li>
      <li>Morocco</li>
      <li>New Zealand</li>
      <li>North Macedonia</li>
      <li>Norway</li>
      <li>Panama</li>
      <li>San Marino</li>
      <li>Serbia</li>
      <li>Singapore</li>
      <li>Switzerland</li>
      <li>Taiwan</li>
      <li>Thailand</li>
      <li>Tunisia</li>
      <li>Togo</li>
      <li>Turkey</li>
      <li>Ukraine</li>
      <li>United Arab Emirates</li>
      <li>United Kingdom and the Crown Dependencies (Jersey</li>
      <li>Guernsey and the Isle of Man)</li>
      <li>Uruguay</li>
      <li>The Vatican.</li>
    </ul>
    <p>
      In addition to the 33 countries mentioned above,{' '}
      <strong>
        Hungary has a travel agreement with the following countries.
      </strong>{' '}
      If you have a COVID certificate from any of these countries, you&rsquo;re
      safe to travel:
    </p>
    <ul className="small columns">
      <li>Albania</li>
      <li>Andorra</li>
      <li>Bahrain</li>
      <li>Cape Verde</li>
      <li>Croatia</li>
      <li>Cyprus</li>
      <li>Czechia</li>
      <li>Egypt</li>
      <li>Faroe Islands</li>
      <li>Georgia</li>
      <li>India</li>
      <li>Iran</li>
      <li>Israel</li>
      <li>Kazakhstan</li>
      <li>Kyrgyzstan</li>
      <li>Maldives</li>
      <li>Marocco</li>
      <li>Moldova</li>
      <li>Monaco</li>
      <li>Mongolia</li>
      <li>Montenegro</li>
      <li>North Macedonia</li>
      <li>Panama</li>
      <li>Romania</li>
      <li>Russia</li>
      <li>San Marino</li>
      <li>Serbia</li>
      <li>Seychelles</li>
      <li>Slovakia</li>
      <li>Slovenia</li>
      <li>Switzerland</li>
      <li>The Vatican</li>
      <li>Tunisia</li>
      <li>Turkey</li>
      <li>Ukraine</li>
      <li>Uzbekistan. </li>
    </ul>
    <p>
      <strong>
        Note that some of these countries appear on the EU list as well (and
        some are EU members even).
      </strong>{' '}
      The reason for that is some of these countries issue vaccines that are not
      authorized by the EMA but are accepted by the Hungarian government. If
      that&rsquo;s the case with you,
      <a href="https://www.google.com/url?q=https://kormany.hu/kulgazdasagi-es-kulugyminiszterium/vedettsegi-igazolasok&amp;sa=D&amp;source=editors&amp;ust=1645655227967798&amp;usg=AOvVaw1V3Syz8i9xcEymvySoy62i">
        please download a certificate from this website
      </a>{' '}
      (hu/en), or contact your local authorities.
    </p>
    <p>
      As of the writing of this article on February 9, 2022, people arriving
      from the following countries are required to stay in 10-day quarantine:
      Botswana, South Africa, Eswatini (Swaziland), Lesotho, Mozambique,
      Namibia, Zimbabwe.{' '}
      <strong>If you spent even a single day in any of these countries</strong>{' '}
      two weeks prior to travel to Hungary, you need to stay in{' '}
      <strong>quarantine for ten days,</strong> whether or not they have a
      certificate or a PCR test.
    </p>
    <p>
      <strong>If you do not possess an accepted COVID certificate,</strong>{' '}
      you&rsquo;ll need a negative COVID-19 PCR test that is not older than 72
      hours before entering the country and is issued in English or Hungarian.
    </p>
    <h2 id="traveling-for-kids">Traveling for kids</h2>
    <p>
      If a person under 12 travels with you, they can safely enter the country
      as long as you (the caretaker of the kid) are eligible for entering the
      country. For kids between 12-18, EU rules apply just like for adults.
      However, it should be noted that Hungarian rules state that any kids under
      18 can freely travel as long as they are accompanied by a caretaker who is
      eligible for entering the country.
    </p>
    <h2 id="covid-19-restrictions-while-youre-in-hungary">
      COVID-19 restrictions while you&rsquo;re in Hungary
    </h2>
    <p>
      If you have an EU certificate, you enjoy the same benefits as Hungarian
      people do with a vaccine card.
    </p>
    <p>
      From May 1 on, <strong>COVID-19 card turn into vaccine cards.</strong>{' '}
      This means that they are only valid if you&rsquo;ve received your{' '}
      <strong>second dose in the past six months</strong> (first dose for
      single-dose vaccines), or you&rsquo;ve gotten{' '}
      <strong>infected after your second dose</strong> in the past six months,
      or you&rsquo;ve already received your{' '}
      <strong>booster shot any time in the past.</strong> For people under 18, a
      third dose is not needed.
    </p>
    <p>
      In other words, a PCR test or proof of having recovered from COVID-19
      (without being vaccinated) is not going to be enough to enter JSConf
      Budapest 2022.
    </p>
    <p>
      <strong>Make sure you take your vaccine card with you:</strong>
    </p>
    <ul>
      <li>To JSConf Budapest 2022</li>
      <li>To baths, spas</li>
      <li>Concerts and other indoor events</li>
      <li>Open-air concerts or outdoor events with more than 500 attendees</li>
    </ul>
    <p>
      <strong>
        With or without a vaccine card, you still need to follow the rules
        below:
      </strong>
    </p>
    <ul>
      <li>
        You have to wear a mask in indoor venues (e.g. shops, cinemas, theaters,
        museums, official buildings).{' '}
      </li>
      <li>
        For services, you only need to wear a mask if more than five people are
        usually on the premises (e.g. you can take off your mask in a massage
        salon or a small barbershop, but it&rsquo;s always safe to ask).
      </li>
      <li>You have to wear a mask on public transportation.</li>
    </ul>
    <h3 id="faq">FAQ</h3>
    <p></p>
    <ul>
      <li>
        <strong>Can I go to a concert in Budapest?</strong> If the place is
        enclosed, or more than 500 people can enter, you&rsquo;ll need your
        vaccination card. People under 18 either need an adult to accompany them
        or they need their own vaccination card.
      </li>
      <li>
        <strong>Can I go to a restaurant in Budapest?</strong> You can enter a
        restaurant without a vaccination card, but you may only take your mask
        off while your eating or drinking while you&rsquo;re inside the
        building. For outside seating, the rules are more permissive about
        mask-wearing.
      </li>
      <li>
        <strong>Can I go to a bar in Budapest?</strong> We&rsquo;d recommend
        going to an open bar but yes, as long as you wear your mask while
        you&rsquo;re inside the building while you&rsquo;re not drinking or
        eating.
      </li>
      <li>
        <strong>
          Can I enter JSConf Budapest 2022 with a negative PCR test?
        </strong>{' '}
        No, you can&rsquo;t. According to Hungarian law that&rsquo;s going to be
        in effect at the time of the conference, only people with a valid
        vaccination card can enter such events.
      </li>
      <li>
        <strong>
          I recovered from COVID-19 in the past six months. Can I enter JSConf
          Budapest 2022?
        </strong>{' '}
        No, unless you were fully vaccinated before you got the infection. The
        safest way to enter the conference is being fully vaccinated AND having
        a booster shot.
      </li>
    </ul>
    <h2 id="further-reading-official-sources">
      Further reading, official sources
    </h2>
    <p>
      <a href="https://www.google.com/url?q=http://www.police.hu/en/content/information-on-general-rules-of-border-crossing&amp;sa=D&amp;source=editors&amp;ust=1645655227974010&amp;usg=AOvVaw0nBMn2Q5EuEENNqPtJe_9z">
        For further information on border crossing, which vaccines are accepted,
        and who are eligible to enter the country without restrictions, please
        read the police.hu statement
      </a>
      .
    </p>
    <p>
      <a href="https://www.google.com/url?q=https://www.consilium.europa.eu/en/policies/coronavirus/covid-19-travel-in-the-eu/&amp;sa=D&amp;source=editors&amp;ust=1645655227974702&amp;usg=AOvVaw24mSjxS4Nq0lCLHQgXgLGq">
        For more information on travel within the EU, look for the European
        Commission guide
      </a>
      .
    </p>
    <p>
      <a href="https://www.google.com/url?q=https://ec.europa.eu/info/live-work-travel-eu/coronavirus-response/safe-covid-19-vaccines-europeans/eu-digital-covid-certificate_en%23what-is-the-eu-digital-covid-certificate&amp;sa=D&amp;source=editors&amp;ust=1645655227975268&amp;usg=AOvVaw2x4v9yz0FnAxpeO138VWig">
        For further information on the EU digital vaccine certificate, please
        read the European Commission website
      </a>
      .
    </p>
    <p>
      <a href="https://www.google.com/url?q=https://www.consilium.europa.eu/en/policies/coronavirus/eu-digital-covid-certificate/&amp;sa=D&amp;source=editors&amp;ust=1645655227975676&amp;usg=AOvVaw3DPRq06UU7AUK2DXkfgbFd">
        For more information on how the EU digital certificate works, which
        tests are accepted, check the European Council tips
      </a>
      .
    </p>
  </Layout>
)


export default Covid