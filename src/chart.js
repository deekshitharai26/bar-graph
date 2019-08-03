import React from "react";
import { Bar } from "react-chartjs-2";
import { barControls } from "./data/settings.js";
import {click} from "./utilities.js"



class BarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      display: ""
    };
  }
  
touch


  
  componentDidMount() {
    fetch("https://testapi.io/api/deekshitharai26/data")
      .then(res => res.json())
      .then(
        result => {
          //   result.datasets.map((value, i) => {
          //     value.backgroundColor = barControls.dataset[i].backgroundColor;
          //     console.log(value.backgroundColor);
          //   });

          result.datasets.forEach((itm, i) => {
            var t = Array(itm.data.length).fill(barControls.backgroundColor);
            // console.log("item ... " + JSON.stringify(itm));
            // console.log("t ... " + JSON.stringify(t));
            // //return (itm.backgroundColor = t);
            return Object.assign(itm, barControls.dataset[i]);
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
   
    };

   
  


  render() {

    // click()   
   

    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="chart">
          <Bar data={this.state.chartData} options={barControls.options} />
         
         
        </div>
        
      );
    }
  }
}

 export default BarChart