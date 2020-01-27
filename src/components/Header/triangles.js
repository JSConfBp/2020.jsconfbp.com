import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import css from './header.module.scss'
import Triangles from './../Triangles'

const TIMER = 120

const marquee = (source, current, direction) => {
  if (direction > 0) {
    return current + source.charAt(current.length)
  } else {
    return current.slice(0,-1)
  }
}

const sets = [
  {
    text: 'JSConf Budapest 2020 - 24-25 September 2020 - Early Bird Tickets are available from 205 EUR & our CFP is open until the end of February',
    position: 'right bottom',
    className: 'bottomRight'
  },
  {
    text: 'JSConf Budapest is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion.',
    position: 'left top',
    className: 'topLeft'
  },
  {
    text: 'The JSConf Budapest is a JSConf family member 2-day non-profit for-the-community by-the-community conference about JavaScript in Budapest, Hungary.',
    position: 'right top',
    className: 'topRight'
  },
  {
    text: 'We aim to be the JSConf of the region around Eastern-Middle Europe, an area so diverse in culture, people and views. A strictly nonprofit, open-sourced and community driven conference for the community of JavaScript, with the purpose to build and educate about new technologies, ideas and culture.',
    position: 'left bottom',
    className: 'bottomLeft'
  }
]

const getNextSetIndex = (currentSetIndex) => {
  if (sets[currentSetIndex + 1]) {
    return currentSetIndex + 1
  } else {
    return 0
  }
}

export default () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [triangleText, setTriangleText] = useState('')
  const [marqueeDirection, setMarqueeDirection] = useState(1)


  useEffect(() => {
    const data = sets[currentSetIndex]
    let interval;

    const writer = () => {
      let direction = marqueeDirection
      if (marqueeDirection < 0 && triangleText.length === 0) {
        setCurrentSetIndex(getNextSetIndex(currentSetIndex))
        direction = 1
        setMarqueeDirection(1)
      }
      if (marqueeDirection > 0 && triangleText.length == data.text.length) {
        direction = -1
        setMarqueeDirection(-1)
      }
      const newtext = marquee(data.text, triangleText, direction);
      setTriangleText(newtext);
    }

    interval = setTimeout(writer, TIMER);

    return () => {
      clearTimeout(interval);
    }
  }, [triangleText]);

  return (<Triangles
    text={ triangleText }
    className={ classnames(css.background, css[sets[currentSetIndex].className]) }
    edgeSize={ 80 }
    start={ sets[currentSetIndex].position }
    colors={
      [
        '#F0B199',
        '#FAACA0',
        '#E49EA1',
        '#FAA0D1',
        '#ED99F0',
      ]
    }
  />)
}
