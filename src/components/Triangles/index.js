import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { Stage, Layer, Line } from 'react-konva';
import Origami from '../../lib/index'

import css from './triangles.module.scss';

export default ({
  text,
  className,
  edgeSize = 64,
  colors = [
    '#ffffff',
    '#eeeeee',
    '#dddddd',
    '#cccccc',
    '#bbbbbb',
  ],
  start// = 'center center',
}) => {
  const [triangles, setTriangles] = useState([])
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    const dim = refContainer.current.getBoundingClientRect()
    setDimensions(dim)

    const canvas = {
      width: dim.width + 400,
      height: dim.height + 400
    }

    if (text.length > 0) {
      Origami({
        //debug: true,
        colors,
        canvas,
        fromText: text,
        start,
        grid: {
          edgeDistance: edgeSize,
        },
      }).then(result => {
        setTriangles(result)
      })
      .catch((e) => {
        console.error(e);
      })
    } else {
      setTriangles([])
    }
  }, [text])


  return (
    <div className={ classnames(className, css.triangles) } ref={ refContainer }>
      <Stage width={ dimensions.width + 400 || 0 } height={ dimensions.height + 400 || 0 }>
        <Layer>
          { triangles.map((triangle, i) => (
            <Line
              key={ `triangle-${i}` }
              points={ triangle.points.reduce((arr, points) => arr.concat(points.x, points.y), []) }
              fill={ 'transparent' }
              stroke={ triangle.color }
              strokeWidth={ 1 }
              closed={ true }
            />))
          }
        </Layer>
      </Stage>
    </div>
  );
}


