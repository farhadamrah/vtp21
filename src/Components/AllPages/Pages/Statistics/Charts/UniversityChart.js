import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class UniversityChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'University',
      },
      axisX: {
        // title: '',
        reversed: true,
      },
      axisY: {
        // title: 'Count',
        includeZero: true,
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: 'bar',
          dataPoints: [
            { y: 1, label: 'Xəzər' },
            { y: 4, label: 'UFAZ' },
            { y: 1, label: 'İstanbul Universiteti' },
            { y: 1, label: 'Çukurova Universiteti' },
            { y: 1, label: 'China University of Petroleum' },
            { y: 1, label: 'Budapeşt Texnologiya və İqtisad Universiteti' },
            { y: 6, label: 'BMU' },
            { y: 5, label: 'BDU' },
            { y: 1, label: 'ATU' },
            { y: 2, label: 'APDİA' },
            { y: 6, label: 'ADNSU' },
            { y: 21, label: 'ADİU' },
            { y: 1, label: 'ADA' },
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
  addSymbols(e) {
    var suffixes = ['', 'K', 'M', 'B'];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
}

export default UniversityChart;
