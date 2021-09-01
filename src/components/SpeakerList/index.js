import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import { SpeakerListItem } from '../SpeakerListItem'
import * as css from './speakerlist.module.scss'
import { useHeadingDecorator } from '../../hooks/useHeadingDecorator'

export const SpeakerList = () => {
  const data = useStaticQuery(graphql`
    query IndexSpeakers {
      allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            frontmatter {
              name
              title
              picture {
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  const [, getClassName] = useHeadingDecorator()
  return (
    <section className={classnames(css.speakers)}>
      <div className={css.inner}>
        <h2 id="Speakers">Speakers</h2>

        <ul className={classnames('unstyled', css.list)}>
          {data.allMdx.edges
            .filter(({ node }) => node.parent.sourceInstanceName === 'speakers')
            .sort(({ node: nodeA }, { node: nodeB }) => {
              const indexA = parseInt(
                nodeA.parent.name.match(/^[0-9]{2}/)?.[0] ?? 0,
                10
              )
              const indexB = parseInt(
                nodeB.parent.name.match(/^[0-9]{2}/)?.[0] ?? 0,
                10
              )
              return indexA - indexB
            })
            .map(({ node }, i) => {
              const slug = node.parent.name.replace(/^(\d*_)/, '')
              const url = `/${node.parent.sourceInstanceName}/${slug}`

              const index = i + 1
              let classname = ''

              if (index === 1) {
                classname = getClassName({ side: 'left' })
              }

              if (index === 2) {
                classname = getClassName({ side: 'right' })
              }

              if (index === 14) {
                classname = getClassName({ side: 'right' })
              }

              if (index === 15) {
                classname = getClassName({ side: 'left' })
              }

              if (index === 24) {
                classname = ''
              }

              return (
                <li key={node.id} className={classname}>
                  <SpeakerListItem
                    index={i + 1}
                    name={node.frontmatter.name}
                    title={node.frontmatter.title}
                    url={url}
                    picture={node.frontmatter?.picture?.relativePath}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
