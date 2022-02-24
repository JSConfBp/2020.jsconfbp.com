import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as css from './updateslist.module.scss'

const UpdatesList = (props) => {
  const data = useStaticQuery(graphql`
    query IndexUpdates {
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
              title
              date
              lead
              path
              skip
            }
          }
        }
      }
    }
  `)

  return (
    <section className={css.updates}>
      <div className={css.inner}>
        <h2 id="Updates">Updates</h2>

        <ul className={classnames('unstyled', css.list)}>
              <li className={css.updates_list_item}>
                <h3>
                  <Link
                    to={`/covid`}
                  >
                    Latest updates on COVID-19
                  </Link>
                </h3>
                <small className={css.date}>2022-02-24</small>
                <p>We created a page for keeping track of the travel rules with regards to COVID-19</p>
                <Link
                  to={`/covid`}
                >
                  Read more
                </Link>
              </li>
          {data.allMdx.edges
            .filter(({ node }) => node.parent.sourceInstanceName === 'updates')
            .filter(({ node }) => !node.frontmatter.skip)
            .sort((prev, next) => {
              const prevDate = new Date(prev.node.frontmatter.date)
              const nextDate = new Date(next.node.frontmatter.date)

              if (prevDate > nextDate) return -1 //-1

              if (prevDate < nextDate) return 1 //1

              return 0
            })
            .slice(0, 2)
            .map(({ node }) => (
              <li key={node.id} className={css.updates_list_item}>
                <h3>
                  <Link
                    to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <small className={css.date}>{node.frontmatter.date}</small>
                <p>{node.frontmatter.lead}</p>
                <Link
                  to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
                >
                  Read more
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default UpdatesList
