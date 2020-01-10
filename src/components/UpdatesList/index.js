import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './updateslist.module.scss'

const UpdatesList = props => {

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
          }
        }
      }
    }
  }
`)

  return (
    <ul className={classnames('unstyled', styles.updates_list)}>
      {data.allMdx.edges
        .filter(({ node }) => node.parent.sourceInstanceName === 'updates')
        .sort((prev, next) => {
          const prevDate = new Date(prev.node.frontmatter.date)
          const nextDate = new Date(next.node.frontmatter.date)

          if (prevDate > nextDate) return -1

          if (prevDate < nextDate) return 1

          return 0
        })
        .slice(0, 3)
        .map(({ node }) => (
          <li key={node.id} className={styles.updates_list_item}>
            {/* <span className={styles.date}>{node.frontmatter.date}</span> */}
            <Link
              className={styles.title}
              to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
            >
              {node.frontmatter.title}
            </Link>
            <p className={styles.lead}>
              {node.frontmatter.lead}
            </p>
            <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
              Read more
            </Link>
          </li>
        ))}
    </ul>)
}

export default UpdatesList
