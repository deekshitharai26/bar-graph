
import {click} from "../utilities.js";
export const barControls = {
  type: "Bar",
  // bgColor: "#ffa500",

  dataset: [
    {
      label: "TeamA Score",

      backgroundColor: [
        "#3cb371"

        //   // "#ffa500",
        //   // "#0000ff",
        //   // "#009999",
        //   // "#3c3c3c"
      ],

      borderColor: ["#111", "#111", "#111", "#111", "#111", "#111"],

      hoverBackgroundColor: "#6a5acd",
      hoverBorderWidth: 10,
      borderWidth: 2
    },

    {
      label: "Team B Score",

      backgroundColor: [
        " #FF123"
        // "#3cb371",
        // "#ffa500",
        // "#0000ff",
        // "#009999",
        // "#3c3c3c"
      ],
      borderColor: ["#111", "#111", "#111", "#111", "#111", "#111"],

      hoverBackgroundColor: "#6a5acd",
      hoverBorderWidth: 10,
      borderWidth: 2
    }
  ],

  options: {
    legend: {
     display:true,
    onClick :click,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    },

    hover: {
      mode: "nearest",
      intersect: true
    },

    tooltips: {
      mode: "nearest"
    },
    responsive: true,
    responsiveAnimationDuration: 12,

    title: {
      display: true,
      text: "Bar Graph",
      fontFamily: "Helvetica",
      fontSize: 30,
      position: "top"
    },
    scales: {
      responsive: true,
      maintainAspectRatio: false,
      xAxes: [
        {
          barPercentage: 0.5,
          barThickness: 60,
          maxBarThickness: 80,
          minBarLength: 2,
          gridLines: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          yAxisID: "y-data",
          gridLines: {
            display: true
          }
        }
      ]
    }
  }
};

// Line data
export const lineControls = {
  type: "line",

  lineDatasets: [
    {
      label: "Girls",
      borderColor: "#FF5733",
      pointBorderColor: "#80b6f3",
      pointBackgroundColor: "#80b6f4",
      pointHoverBackgroundColor: "#80b6f4",
      pointHoverBorderColor: "#80b6f4",
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      fill: false,
      // borderDash: [5, 15],
      borderWidth: 4,
      pointStyle: "circle"
    },
    {
      label: "Boys",
      borderColor: "#CD5C5C",
      pointBorderColor: "#80b6f3",
      pointBackgroundColor: "#80b6f4",
      pointHoverBackgroundColor: "#80b6f4",
      pointHoverBorderColor: "#80b6f4",
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      fill: false,
      // borderDash: [5, 15],
      borderWidth: 4,
      pointStyle: "triangle",
      steppedLine: true
    }
  ],

  lineoptions: {
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "index",
      intersect: false
    },

    legend: {
      display: true,
      position: "bottom"
    },

    scales: {
      maintainAspectRatio: false,
      xAxes: [
        {
          xAxisID: "X-data",
          gridLines: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          yAxisID: "y-data",
          gridLines: {
            display: true
          }
        }
      ]
    }
  }
};
