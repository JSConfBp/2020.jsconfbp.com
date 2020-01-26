import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Stage, Layer, Line } from 'react-konva';
import Origami from '../../lib/index'

import css from './triangles.module.scss';

export default ({
  text,
  className,
  width,
  height,
  edgeSize = 64,
  start = 'center center',
}) => {
  const [triangles, setTriangles] = useState([])
  const colors =  [
    '#ffffff',
    '#eeeeee',
    '#dddddd',
    '#cccccc',
    '#bbbbbb',
  ];

  const _width = width || window.innerWidth;
  const _height = height || window.innerHeight

  useEffect(() => {
    const canvas = {
      width: _width,
      height: _height
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
    <div className={ classnames(className, css.triangles) }>
      <Stage width={ _width } height={ _height }>
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


