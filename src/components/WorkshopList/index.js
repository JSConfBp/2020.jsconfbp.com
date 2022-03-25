import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import classNames from 'classnames'
import fetch from 'isomorphic-unfetch'
import Button from '../Button'
import * as css from './workshoplist.module.scss'

const SEAT_API = 'https://workshop-registration.herokuapp.com/api/seats'
//const SEAT_API = 'http://0.0.0.0:8001/api/seats'

const filterWorkshops = ({ node }) =>
  node.parent.sourceInstanceName === 'workshops'

const sortWorkshops = (prev, next) => {
  const prevOrder = +prev.node.frontmatter.order
  const nextOrder = +next.node.frontmatter.order
  if (prevOrder < nextOrder) return -1
  if (prevOrder > nextOrder) return 1
  return 0
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

const WorkshopList = () => {
  const data = useStaticQuery(graphql`
    query WorkshopsPage {
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
              company
              short_description
              path
              workshop_id
              start
              end
              order
              disabled
            }
          }
        }
      }
    }
  `)

  const [seats, setSeats] = useState({})

  useEffect(() => {
    if (Object.keys(seats).length > 0) return

    fetch(SEAT_API)
      .then((resp) => resp.json())
      .then((data) => setSeats(data))
      .catch((e) => console.error(e))
  })

  const countSeats = (id) => {
    return seats[id] ? seats[id].seats - seats[id].taken : 'TBA'
  }

  return (
    <ul className={classNames('unstyled', css.workshop_list)}>
      {data.allMdx.edges
        .filter(filterWorkshops)
        .sort(sortWorkshops)
        .map(({ node }) => (
          <li key={node.id} className={css.workshop_list_item}>
            <h3 className={css.workshop_title}>
              <Link
                to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
              >
                {node.frontmatter.title} by {node.frontmatter.company}
              </Link>
            </h3>

            <span className={css.workshop_date}>
              <span className={css.workshop_date_label}>Workshop date:</span>
              <span className={css.workshop_date_month}>June</span>
              <span className={css.workshop_date_day}>
                1<sup>st</sup>
              </span>
            </span>
            <span className={css.seats}>
              Available Seats:
              <span className={css.seats_count}>
                {countSeats(node.frontmatter.workshop_id)}
              </span>
            </span>

            <p className={css.workshop_lead}>
              {node.frontmatter.short_description}{' '}
            </p>

            <Link
              className={css.workshop_link}
              to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
            >
              Read more
            </Link>
            <div className={css.workshop_register}>
              <RegisterButton
                id={node.frontmatter.workshop_id}
                disabled={node.frontmatter.disabled}
              />
            </div>
          </li>
        ))}
    </ul>
  )
}

export default WorkshopList
