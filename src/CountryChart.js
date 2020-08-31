import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CountryChart extends Component  {
    render(){
        console.log(this.props)
        const options = {
            animationEnabled: true,
            title:{
                text: "Indian Covid Status"
            },
            axisY :{
                includeZero: false
            },
            axisX: {
                interval: 1,
                intervalType: "month",
                valueFormatString: "MMM"
            },
            toolTip: {
                shared: true
            },
            legend: {
                fontSize: 13
            },
            height: "500",
            width: "1600",
            data: [{
                type: "splineArea",
                showInLegend: true,
                name: "Total tests conducted",
                yValueFormatString: "##,##,##0",
                xValueFormatString: "MMM",
                dataPoints: [
                    { x: new Date(2020, 3), y: this.props.countryData.totaltestsmarch },
                    { x: new Date(2020, 4), y: this.props.countryData.totaltestsapril },
                    { x: new Date(2020, 5), y: this.props.countryData.totaltestsmay },
                    { x: new Date(2020, 6), y: this.props.countryData.totaltestsjune },
                    { x: new Date(2020, 7), y: this.props.countryData.totaltestsjuly },
                    { x: new Date(2020, 8), y: this.props.countryData.totaltestsaugust }
                ]
            },
            {
                type: "splineArea", 
                showInLegend: true,
                name: "Cured",
                yValueFormatString: "##,##,##0",
                xValueFormatString: "MMM",
                dataPoints: [
                    { x: new Date(2020, 3), y: this.props.countryData.dischargedmarch },
                    { x: new Date(2020, 4), y: this.props.countryData.dischargedapril },
                    { x: new Date(2020, 5), y: this.props.countryData.dischargedmay },
                    { x: new Date(2020, 6), y: this.props.countryData.dischargedjune },
                    { x: new Date(2020, 7), y: this.props.countryData.dischargedjuly },
                    { x: new Date(2020, 8), y: this.props.countryData.dischargedaugust }
                ]
            },
            {
                type: "splineArea", 
                showInLegend: true,
                name: "Active",
                yValueFormatString: "##,##,##0",
                xValueFormatString: "MMM",     
                dataPoints: [
                    { x: new Date(2020, 3), y: 100 },
                    { x: new Date(2020, 4), y: 100000 },
                    { x: new Date(2020, 5), y: 200000 },
                    { x: new Date(2020, 6), y: 400000 },
                    { x: new Date(2020, 7), y: 625000 },
                    { x: new Date(2020, 8), y: 850000 }
                ]
            },
            {
                type: "splineArea", 
                showInLegend: true,
                name: "Deaths",
                yValueFormatString: "##,##,##0",
                xValueFormatString: "MMM",      
                dataPoints: [
                    { x: new Date(2020, 3), y: this.props.countryData.deathsmarch },
                    { x: new Date(2020, 4), y: this.props.countryData.deathsapril },
                    { x: new Date(2020, 5), y: this.props.countryData.deathsmay },
                    { x: new Date(2020, 6), y: this.props.countryData.deathsjune },
                    { x: new Date(2020, 7), y: this.props.countryData.deathsjuly },
                    { x: new Date(2020, 8), y: this.props.countryData.deathsaugust }
                ]
            }]
        }
        return (
            <div style = {{float: "left", width: "90%", padding: "2%", marginLeft: "5%" }}>
                <CanvasJSChart options = {options}/>
            </div>
        );
    }
}

export default CountryChart;