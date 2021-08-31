import React from 'react'
import classnames from 'classnames'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import useHeadingDecorator from '../hooks/useHeadingDecorator'
import Layout from '../components/Layout'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage/index'

import * as css from './speakers.module.scss'

function SpeakerContentTemplate({ data: { mdx } }) {
  const [, getClassName] = useHeadingDecorator()

  const {
    name,
    title,
    picture: { relativePath: picture },
    twitter,
    github,
    web,
    company,
    location,
    socialCard,
  } = mdx.frontmatter

  const variantHash =
    name.split('').reduce((i, letter) => i + letter.charCodeAt(0), 0) % 2
  const variant = variantHash > 0 ? 'purple' : 'orange'

  return (
    <Layout title={title} pathName={`/updates${mdx.fields.slug}`}>
      <SocialMeta
        title={title}
        description={name}
        image={socialCard || 'social-card.png'}
        href={`/updates${mdx.fields.slug}`}
      />

      <article className={css.speaker_page}>
        <h2>{name}</h2>
        <h1
          className={getClassName({ color: `light${variant}`, side: 'right' })}
        >
          {title}
        </h1>

        <section className={css.abstract_bio}>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
        <div className={css.details}>
          <SpeakerImage src={picture} color={variant} turn={'up'} />

          <ul className={classnames(css.metadata, 'unstyled')}>
            {location && (
              <li>
                <LocationIcon />
                {location}
              </li>
            )}
            {twitter && (
              <li>
                <a href={`https://twitter.com/${twitter}`}>
                  <TwitterIcon />@{twitter}
                </a>
              </li>
            )}
            {github && (
              <li>
                <a href={`https://github.com/${github}`}>
                  <GithubIcon />
                  {github}
                </a>
              </li>
            )}
            {web && (
              <li>
                <a href={web}>
                  <HomeIcon />
                  Website
                </a>
              </li>
            )}
            {company && (
              <li>
                <CompanyIcon />
                {company}
              </li>
            )}
          </ul>
        </div>
      </article>
    </Layout>
  )
}

const TwitterIcon = () => (
  <svg
    className={css.icon}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38 0H10C4.478 0 0 4.478 0 10V38C0 43.522 4.478 48 10 48H38C43.524 48 48 43.522 48 38V10C48 4.478 43.524 0 38 0ZM37.722 18.474C38.14 27.708 31.254 38.004 19.062 38.004C15.354 38.004 11.904 36.918 8.998 35.054C12.482 35.464 15.958 34.498 18.718 32.336C15.844 32.282 13.42 30.384 12.586 27.776C13.616 27.972 14.628 27.914 15.55 27.664C12.392 27.03 10.214 24.186 10.284 21.144C11.168 21.636 12.182 21.932 13.256 21.966C10.334 20.012 9.506 16.152 11.224 13.2C14.462 17.172 19.3 19.786 24.756 20.06C23.798 15.954 26.916 12 31.154 12C33.04 12 34.748 12.796 35.944 14.074C37.44 13.78 38.846 13.234 40.116 12.482C39.624 14.016 38.584 15.302 37.23 16.114C38.558 15.954 39.824 15.602 41 15.08C40.122 16.392 39.008 17.548 37.722 18.474Z"
      fill="#663399"
    />
  </svg>
)

const LocationIcon = () => (
  <svg
    className={css.icon}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 0H10C4.478 0 0 4.478 0 10V38C0 43.522 4.478 48 10 48H38C43.524 48 48 43.522 48 38V10C48 4.478 43.524 0 38 0ZM32.5 20C29.8519 27.0617 23.5 42 23.5 42C23.5 42 16.6667 26.5 14.5 20C12.3333 13.5 17 7 23.5 7C30 7 35.1481 12.9383 32.5 20Z"
      fill="#663399"
    />
    <path
      d="M23.5 12.5C23.5 12.5 27.5 12.5 27.5 16.5C27.5 20.5 23.5 20.5 23.5 20.5C23.5 20.5 19.5 20.5 19.5 16.5C19.5 12.5 23.5 12.5 23.5 12.5Z"
      fill="#663399"
    />
  </svg>
)

const GithubIcon = () => (
  <svg
    className={css.icon}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0H38C43.524 0 48 4.478 48 10V38C48 43.522 43.524 48 38 48H10C4.478 48 0 43.522 0 38V10C0 4.478 4.478 0 10 0ZM9 23.7663C9 15.4825 15.7175 8.76625 24 8.76625C32.2837 8.76625 39 15.4825 39 23.7663C39 30.3913 34.7075 36.0125 28.7512 37.9987C27.99 38.1462 27.75 37.6775 27.75 37.2787V33.1625C27.75 31.7625 27.2588 30.85 26.7213 30.385C30.0613 30.0138 33.57 28.745 33.57 22.9837C33.57 21.3462 32.9888 20.0075 32.0262 18.9575C32.1812 18.58 32.695 17.0538 31.8787 14.9875C31.8787 14.9875 30.6213 14.585 27.7575 16.525C26.5588 16.1925 25.275 16.0263 24 16.02C22.725 16.0263 21.4425 16.1925 20.2463 16.525C17.38 14.585 16.12 14.9875 16.12 14.9875C15.305 17.0525 15.8188 18.5788 15.9738 18.9575C15.015 20.0075 14.4288 21.345 14.4288 22.9837C14.4288 28.73 17.9313 30.0163 21.2625 30.3975C20.8325 30.7713 20.4438 31.4338 20.31 32.4025C19.4538 32.7863 17.2825 33.4488 15.945 31.1563C15.945 31.1563 15.1525 29.715 13.6462 29.61C13.6462 29.61 12.1812 29.59 13.5425 30.5212C13.5425 30.5212 14.5262 30.9825 15.2087 32.7163C15.2087 32.7163 16.0775 35.3938 20.25 34.4863V37.2787C20.25 37.6737 20.0075 38.1387 19.2588 38C13.2975 36.0163 9 30.3938 9 23.7663Z"
      fill="#663399"
    />
  </svg>
)

const CompanyIcon = () => (
  <svg
    className={css.icon}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0H38C43.524 0 48 4.478 48 10V38C48 43.522 43.524 48 38 48H10C4.478 48 0 43.522 0 38V10C0 4.478 4.478 0 10 0ZM12.5455 37.4167H10V40H38V37.4167H35.4545V9H12.5455V37.4167ZM18.9091 33.5417V38.7083H22.7273V33.5417H18.9091ZM25.2727 33.5417V38.7083H29.0909V33.5417H25.2727ZM17.6364 27.0833H15.0909V29.6667H17.6364V27.0833ZM27.8182 27.0833H25.2727V29.6667H27.8182V27.0833ZM22.7273 27.0833H20.1818V29.6667H22.7273V27.0833ZM32.9091 27.0833H30.3636V29.6667H32.9091V27.0833ZM17.6364 21.9167H15.0909V24.5H17.6364V21.9167ZM27.8182 21.9167H25.2727V24.5H27.8182V21.9167ZM22.7273 21.9167H20.1818V24.5H22.7273V21.9167ZM32.9091 21.9167H30.3636V24.5H32.9091V21.9167ZM17.6364 16.75H15.0909V19.3333H17.6364V16.75ZM27.8182 16.75H25.2727V19.3333H27.8182V16.75ZM22.7273 16.75H20.1818V19.3333H22.7273V16.75ZM32.9091 16.75H30.3636V19.3333H32.9091V16.75ZM17.6364 11.5833H15.0909V14.1667H17.6364V11.5833ZM27.8182 11.5833H25.2727V14.1667H27.8182V11.5833ZM22.7273 11.5833H20.1818V14.1667H22.7273V11.5833ZM32.9091 11.5833H30.3636V14.1667H32.9091V11.5833Z"
      fill="#663399"
    />
  </svg>
)

const HomeIcon = () => (
  <svg
    className={css.icon}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 0H10C4.478 0 0 4.478 0 10V38C0 43.522 4.478 48 10 48H38C43.524 48 48 43.522 48 38V10C48 4.478 43.524 0 38 0ZM23.5 8L7 24.9091H11.125V39H35.875V24.9091H40L23.5 8ZM19.375 27.6892C19.375 29.1485 20.833 30.6368 22.6724 32.5143C22.9412 32.7887 23.2182 33.0715 23.5 33.3636C23.7797 33.0738 24.0546 32.7933 24.3215 32.5209C26.1638 30.6411 27.625 29.1501 27.625 27.6892C27.625 25.267 24.2893 24.6343 23.5 27.0227C22.7121 24.6371 19.375 25.2642 19.375 27.6892ZM30.375 12.3583L34.5 16.5856V9.40909H30.375V12.3583Z"
      fill="#663399"
    />
  </svg>
)

export default SpeakerContentTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          relativePath
        }
      }
      fields {
        slug
      }
      frontmatter {
        name
        title
        picture {
          relativePath
        }
        twitter
        github
        web
        company
        location
        socialCard
      }
      body
    }
  }
`
