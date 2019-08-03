import React from "react";
import { Line } from "react-chartjs-2";
import { barControls, lineControls } from "./data/settings.js";

class LineChart extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://testapi.io/api/deekshitharai26/data")
      .then(res => res.json())
      .then(
        result => {
          result.datasets.forEach((itm, i) => {
            console.log(itm,i)
        
          return Object.assign(itm, lineControls.lineDatasets[i])
          
          
        });
     
         






          this.setState({
            isLoaded: true,
            items: result,
            chartData: {
              labels: result.labels,
              datasets: result.datasets
            }
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  
   
    



    }


  render() {
    const { error, isLoaded } = this.state;
    // console.log(controls.options);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="chart">
          <Line
            data={this.state.chartData}
            options={lineControls.lineoptions}
          />
        </div>
      );
    }
  }
}

export default LineChart;
