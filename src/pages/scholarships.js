import React from 'react'
import Layout from '../components/Layout'
import { useHeadingDecorator } from '../hooks/useHeadingDecorator'
import Button from '../components/Button'

import * as css from './scholarship.module.scss'

const ApplyButton = () => (
  <Button
    block={true}
    fill={true}
    color={'purple'}
    href={
      'https://docs.google.com/forms/d/e/1FAIpQLSed7sdnVMha4vePnTk3pTrCui6Av98lk5j31kZH13U1xzdAlw/viewform'
    }
    className={css.button}
  >
    Apply for a Scholarship now!
  </Button>
)

const Scholarship = () => {
  const [, getClassName] = useHeadingDecorator()
  return (
    <Layout
      title="Scholarships"
      pathName="/scholarships"
      image="scholarship_page.jpg"
    >
      <h1 className={getClassName({ color: 'lightpurple', side: 'left' })}>
        Scholarships for JSConf Budapest 2022
      </h1>

      <p>
        2022 will be the 5th time when we're running our Scholarship Program! As
        every year so far, we'll provide several free, Scholarship tickets to
        help underrepresented groups in tech to attend the conference.
      </p>

      <p>
        Anyone from an underrepresented group in tech is invited to apply for a
        scholarship. This includes but isn't limited to: women, people of color,
        LGBTQIA+ people, disabled people, and people facing economic or social
        hardships. We want to give them a chance.
      </p>

      <p>
        This Scholarship is made for you if you wished to attend JSConf
        Budapest, but you could not afford it for some reason.
      </p>

      <h4>Travel Support</h4>

      <p>
        During the evaluation of applications, the jury will select some
        Scholarship awardees for travel support. This means we'll cover their
        travel and stay in Budapest. This is also funded by our Scholarship
        Budget, which is limited. If you can arrange your trip or stay in
        Budapest, let us know, and more people will have the opportunity to
        receive a Scholarship.
      </p>

      <p>The application period is closed on April 24th, Sunday midnight.</p>

      <ApplyButton />

      <h2>Where is the Scholarship Budget coming from?</h2>

      <p>
        The budget is filled by generous donors, both from the Attendees and our
        Sponsors.
      </p>

      <p>
        Attendees can sponsor the Program with buying Supported tickets. Both
        Early Bird and Regular tickets are available in a Scholarship Supporting
        variant. This means that the ticket price includes a percent of a
        supported ticket that will be given to someone in need.
      </p>

      <p>Let's see this ticket for example:</p>

      <p>
        <strong>Regular JS Ticket + 50% Scholarship Support = €466</strong>
        <br />
        235 EUR + 117 EUR + VAT + Fees
      </p>

      <p>
        This means, if you buy this ticket, you support the Scholarship Budget
        with an extra 50% of your ticket price.
      </p>

      <p>We've set several levels of sponsorship: 25%, 50%, and 75%.</p>

      <p>
        <strong>
          10% of every Sponsor package goes directly into the Scholarship
          Budget.{' '}
        </strong>
        So all of our sponsors become donors to the Program. If your company is
        interested in participating, check out our{' '}
        <a href="/sponsoration/">Sponsorship opportunities</a>.
      </p>

      <h2 className={getClassName({ color: 'orange', side: 'right' })}>
        Why is this good?
      </h2>

      <p>
        Scholarship Support is not money for a party, nor for fancy catering, or
        a nice booth.
      </p>

      <p>It is a chance for someone.</p>

      <p>
        We try to reach as many people as possible in the community around the
        region, and we are working hard, to make this event available for
        everyone who is interested. But we know many in the region would, but
        cannot attend such a conference, for various reasons. They can get a
        ticket to the event, through the Scholarship.
      </p>

      <p>
        This is a chance for them, to meet people they can learn from, see talks
        they can benefit from, a chance to step forward.
      </p>

      <p>
        A chance for you to help someone in an excellent way for a reasonable
        price.
      </p>

      <p>
        The past years, after we started this Program, we've
        <a href="https://medium.com/@_nec/how-can-a-conference-help-someone-5a4fff2623af#.gw1ni84hj">
          actually changed someone's life for good!
        </a>
        Imagine what is possible by helping with even more people!
      </p>

      <h2>How does the scholarship awarding works?</h2>

      <p>
        All applicants for the Scholarship Program has to go through an
        application procedure. Along with personal details for the tickets
        itself, we ask applicants a few questions about what they do in tech or
        what they wish to learn on the event. These answers are helpful for the
        jury, who will evaluate the applications and award the tickets.
      </p>

      <p>
        We, the organizers, do not take part in the jury process. In the past
        years, we asked Green Fox Academy in Budapest to help us evaluate the
        applications and select the awardees. To manage the scholarship budget,
        we turned to the Asimov Foundation in Budapest, who helped the people
        chosen with travel arrangements if necessary. This year, we plan to
        cooperate with these organizations again.
      </p>

      <h4>Green Fox Academy</h4>

      <p>
        Green Fox Academy is a school of technology in Budapest where students
        are provided with marketable knowledge. Their philosophy is reflected in
        the education principles they apply during the courses. They genuinely
        believe in mentoring based education and the integration of hard tech
        knowledge and soft skills development. For the Green Fox team, teaching
        is about inspiring people to focus on self-improvement and
        problem-solving. Education is their passion.
        <br />
        <br />
        More information:{' '}
        <a href="http://www.greenfoxacademy.com/">
          http://www.greenfoxacademy.com/
        </a>
      </p>

      <h4>The Asimov Foundation</h4>

      <p>
        The goals of Asimov Foundation in Budapest are to broaden the
        professional horizon in IT, to give inspiration and to connect the
        members of the community with each other. To facilitate genuine dialogue
        and sharing of information and knowledge among technologists through our
        events. To encourage innovative activities and effective professional
        cooperation among IT developer groups.
        <br />
        <br />
        More information:{' '}
        <a href="http://asimov-foundation.org/english/">
          http://asimov-foundation.org/english/
        </a>
      </p>
    </Layout>
  )
}

export default Scholarship
