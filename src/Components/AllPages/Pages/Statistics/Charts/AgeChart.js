import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AgeChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light1', //"light1", "dark1", "dark2"
      title: {
        text: 'AGE',
      },
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: 'column',
          indexLabel: '{y} people',
          indexLabelFontColor: '#5A5757',
          indexLabelPlacement: 'outside',
          dataPoints: [
            { x: 18, y: 3 },
            { x: 19, y: 12 },
            { x: 20, y: 11 },
            { x: 21, y: 10 },
            { x: 22, y: 6 },
            { x: 23, y: 4 },
            { x: 24, y: 3 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default AgeChart;
