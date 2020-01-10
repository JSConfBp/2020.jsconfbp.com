import React from 'react'

import { PieChart } from 'react-chartkick'
import 'chart.js'

export default () => {

  return <PieChart
    legend={ 'bottom' }
    donut={true}
    suffix="%"
    data={[
    ["Food & drinks", 50],
    ["Venue", 13],
    ["Speaker Travel", 9],
    ["Speaker Hotel", 8],
    ["Tech Setup", 8],
    ["Print", 5],
    ["Scholarship", 2],
    ["Finances", 2],
    ["Misc", 3],
  ]} />
}
