import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component  {
    render(){
        console.log(this.props)
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            height: "400",
            width: "600",
            title:{
                text: this.props.stateData.state
            },
            axisY: {
                title: "Recorded cases"
            },
            axisX: {
                interval: 1,
                intervalType: "month",
                valueFormatString: "MMM"
            },
            data: [{
                type: "line",
                xValueFormatString: "MMMM",
                dataPoints: [
                    { x: new Date(2020, 3), y: this.props.stateData.months.march },
                    { x: new Date(2020, 4), y: this.props.stateData.months.april },
                    { x: new Date(2020, 5), y: this.props.stateData.months.may },
                    { x: new Date(2020, 6), y: this.props.stateData.months.june },
                    { x: new Date(2020, 7), y: this.props.stateData.months.july },
                    { x: new Date(2020, 8), y: this.props.stateData.months.august }
                ]
            }]
        }
        return (
            <div style = {{float: "left", width: "40%", padding: "2%"}}>
                <CanvasJSChart options = {options}/>
            </div>
        );
    }
}

export default Charts;