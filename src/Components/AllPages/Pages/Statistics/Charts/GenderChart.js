import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GenderChart extends Component {
  render() {
    const options = {
      theme: 'light1',
      animationEnabled: true,
      exportFileName: 'Gender',
      exportEnabled: true,
      title: {
        text: 'Gender',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label} people',
          toolTipContent: '{label}: <strong>{y}%</strong>',
          indexLabel: '{y}%',
          indexLabelPlacement: 'inside',
          dataPoints: [
            { y: 49, label: 'Male: 25' },
            { y: 51, label: 'Female: 26' },
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

export default GenderChart;
