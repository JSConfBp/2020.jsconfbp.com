import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import fetch from 'isomorphic-unfetch'
import { useHeadingDecorator } from '../hooks/useHeadingDecorator'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import classNames from 'classnames'
import Button from '../components/Button'

// import styles from '../pages/simpletext.module.scss'
import * as css from './workshops.module.scss'

const SEAT_API = 'https://workshop-registration.herokuapp.com/api/seats'
//const SEAT_API = 'http://0.0.0.0:8001/api/seats'

const Link = (props) => {
  const { url, text } = props

  return (
    <a href={url} rel="noopener">
      {text}
    </a>
  )
}

const RegisterButton = ({ id, disabled }) => (
  <Button
    block={true}
    fill={!disabled}
    color={'orange'}
    disabled={disabled}
    className={css.register_button}
    href={`https://workshop-registration.herokuapp.com/${id}`}
  >
    {disabled ? 'Opens Soon' : 'Register Now'}
  </Button>
)

function SpeakersContentTemplate({ data: { mdx } }) {
  const [seats, setSeats] = useState({})

  useEffect(() => {
    if (Object.keys(seats).length > 0) return

    fetch(SEAT_API)
      .then((resp) => resp.json())
      .then((data) => setSeats(data))
      .catch((e) => console.error(e))
  })

  const countSeats = (id) => {
    return seats[id] ? seats[id].seats - seats[id].taken : 'N/A'
  }

  const [getClassName] = useHeadingDecorator()
  const H2 = ({ children }) => {
    return <h2 className={getClassName()}>{children}</h2>
  }
  const shortcodes = {
    h2: H2,
  }

  const {
    workshop_id,
    title,
    short_description,
    socialCard = 'social-card.png',
    location = 'TBA',
    start,
    end,
    company,
    company_url,
    disabled,
    mentors,
  } = mdx.frontmatter

  return (
    <Layout title={title} pathName={`/workshops/${mdx.fields.slug}`}>
      <SocialMeta
        title={title}
        description={short_description}
        image={socialCard}
      />
      <div className={css.workshop_page}>
        <h2 className={css.workshop_title}>{title}</h2>

        <div className={css.main_content}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <hr />
        </div>

        <div className={css.workshop_meta}>
          <h4 className={css.subtitle}>
            Workshop{' '}
            {company && (
              <>
                by <Link url={company_url} text={company} />
              </>
            )}
          </h4>
          <ul className={classNames('unstyled', css.links)}>
            <li>Available seats: {countSeats(workshop_id)}</li>
            <li className={css.register}>
              <RegisterButton id={workshop_id} disabled={disabled} />
            </li>
            <li>
              Mentors:
              <ul className={css.mentor_list}>
                {mentors.map((mentor) => (
                  <li>
                    {mentor.twitter ? (
                      <Link
                        url={`https://twitter.com/${mentor.twitter}`}
                        text={mentor.name}
                      />
                    ) : (
                      mentor.name
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              June 1st, 2022 <br />
              {start} - {end}
            </li>
            <li>
              Location: <br />
              <strong>{location}</strong>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default SpeakersContentTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          relativePath
        }
      }
      id
      fields {
        slug
      }
      body
      frontmatter {
        name
        title
        image
        twitter
        github
        company
        company_url
        socialCard
        workshop_id
        location
        start
        end
        mentors {
          name
          twitter
        }
        disabled
      }
    }
  }
`
