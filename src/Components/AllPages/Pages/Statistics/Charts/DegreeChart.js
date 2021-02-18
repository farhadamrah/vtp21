import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DegreeChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: 'light1', //"light1", "dark1", "dark2"
      title: {
        text: 'Degree',
      },

      data: [
        {
          type: 'doughnut',
          showInLegend: true,
          indexLabel: '{name}: {y}',
          yValueFormatString: "#,###' people'",
          dataPoints: [
            { name: 'Bachelor', y: 26 },
            { name: 'Master', y: 19 },
            { name: 'Graduate', y: 6 },
            { name: 'Doctorate', y: 0 },
            { name: 'Phd', y: 0 },
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

export default DegreeChart;
