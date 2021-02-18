import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FacultyChart extends Component {
  render() {
    const options = {
      theme: 'light1',
      animationEnabled: true,
      exportFileName: 'Faculty',
      exportEnabled: true,
      title: {
        text: 'Faculty',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label}',
          toolTipContent: '{label}: <strong>{y}%</strong>',
          indexLabel: '{y}%',
          indexLabelPlacement: 'inside',
          dataPoints: [
            { y: 16, label: 'IT' },
            { y: 63, label: 'Economic' },
            { y: 12, label: 'Engineer' },
            { y: 10, label: 'Other' },
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

export default FacultyChart;
