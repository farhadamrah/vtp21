import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DepartmentChart extends Component {
  render() {
    var dataPoint;
    var total;
    const options = {
      animationEnabled: true,
      theme: 'light1', //"light1", "dark1", "dark2"
      title: {
        text: 'Department',
      },
      legend: {
        horizontalAlign: 'right',
        verticalAlign: 'center',
        reversed: true,
      },
      data: [
        {
          type: 'pyramid',
          showInLegend: true,
          legendText: '{label}',
          indexLabel: '{label} - {y} people',
          dataPoints: [
            { label: 'Accounting', y: 17 },
            { label: 'HR', y: 13 },
            { label: 'Logistics', y: 7 },
            { label: 'IT', y: 14 },
          ],
        },
      ],
    };
    dataPoint = options.data[0].dataPoints;
    total = dataPoint[0].y;
    for (var i = 0; i < dataPoint.length; i++) {
      if (i == 0) {
        options.data[0].dataPoints[i].percentage = 100;
      } else {
        options.data[0].dataPoints[i].percentage = (
          (dataPoint[i].y / total) *
          100
        ).toFixed(2);
      }
    }
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default DepartmentChart;
