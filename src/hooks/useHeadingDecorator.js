import React, { useContext } from 'react'
import classnames from 'classnames'

const colors = ['purple', 'orange', 'lightpurple', 'lightorange']

const pickColor = (count) => {
  return colors[count % colors.length]
}

const pickSide = (count) => {
  return count % 2 > 0 ? 'left' : 'right'
}

export default () => {
  const headings = React.createContext({ h2: 0, count: 0 });



  return [
      () => {
        let className = ''
        const h = useContext(headings)

        if (h.h2 % 2 === 0) {
          className = classnames(
            `decorated`,
            `decorated-${pickSide(h.count)}`,
            `decorated-${pickColor(h.count)}`
          )
          h.count += 1
        }

        h.h2 += 1

        return className
    },
    () => {
      let className = ''
      const h = useContext(headings)
      className = classnames(
        `decorated`,
        `decorated-${pickSide(h.count)}`,
        `decorated-${pickColor(h.count)}`
      )
      h.count += 1
      return className
    }
  ]
}
