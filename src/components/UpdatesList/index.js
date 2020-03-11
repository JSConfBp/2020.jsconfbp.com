import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql, Link } from "gatsby"
import css from './updateslist.module.scss'

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
            skip
          }
        }
      }
    }
  }
`)

  return (
  <section className={ css.updates }>
    <div className={ css.inner }>

      <h2 id="Updates">Updates</h2>

      <ul className={classnames('unstyled', css.list)}>
        <li key={'1'} className={css.updates_list_item}>
        <h3><Link
          className={css.title}
          to={`/scholarships`}
        >
          Scholarships
        </Link></h3>
        <small className={css.date}>2020-03-12</small>
        <p className={css.lead}>
          2020 will be the 5th time when we're running our Scholarship Program! As every year so far, we'll provide several free,
          Scholarship tickets to help underrepresented groups in tech to attend the conference.
        </p>
        <Link to={`/scholarships`}>
          Apply for a Scholarship!
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
          .slice(0, 3)
          .map(({ node }) => (
            <li key={node.id} className={css.updates_list_item}>
              <h3><Link
                className={css.title}
                to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
                >
                {node.frontmatter.title}
              </Link></h3>
              <small className={css.date}>{node.frontmatter.date}</small>
              <p className={css.lead}>
                {node.frontmatter.lead}
              </p>
              <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
                Read more
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </section>)
}

export default UpdatesList
