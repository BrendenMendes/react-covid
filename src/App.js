import React, { Component } from 'react';
import axios from 'axios'
import RenderStateCharts from './RenderStateCharts';
import CountryChart from './CountryChart';

class App extends Component {

	state = {
		countryData : {},
		stateData : []
	}

	componentWillMount() {
        this.fetchData();
    }

	fetchData() {
		let obj = {}
		axios('https://api.rootnet.in/covid19-in/stats/testing/history').then(res=>{
			res.data.data.forEach(element => {
				if(element.day === "2020-03-31"){
					obj.totaltestsmarch = element.totalSamplesTested
				}
				else if(element.day === "2020-04-30"){
					obj.totaltestsapril = element.totalSamplesTested
				}
				else if(element.day === "2020-05-31"){
					obj.totaltestsmay = element.totalSamplesTested
				}
				else if(element.day === "2020-06-30"){
					obj.totaltestsjune = element.totalSamplesTested
				}
				else if(element.day === "2020-07-31"){
					obj.totaltestsjuly = element.totalSamplesTested
				}
				else if(element.day === "2020-08-26"){
					obj.totaltestsaugust = element.totalSamplesTested
				}
			});
			this.setState({ countryData : obj })
		})
		axios('https://api.rootnet.in/covid19-in/stats/history').then(res=>{
			res.data.data.forEach((element)=>{
				if(element.day === "2020-03-31"){
					obj.totalcasesmarch = element.summary.total
					obj.dischargedmarch = element.summary.discharged
					obj.deathsmarch = element.summary.deaths
				}
				else if(element.day === "2020-04-30"){
					obj.totalcasesapril = element.summary.total
					obj.dischargedapril = element.summary.discharged
					obj.deathsapril = element.summary.deaths
				}
				else if(element.day === "2020-05-31"){
					obj.totalcasesmay = element.summary.total
					obj.dischargedmay = element.summary.discharged
					obj.deathsmay = element.summary.deaths
				}
				else if(element.day === "2020-06-30"){
					obj.totalcasesjune = element.summary.total
					obj.dischargedjune = element.summary.discharged
					obj.deathsjune = element.summary.deaths
				}
				else if(element.day === "2020-07-31"){
					obj.totalcasesjuly = element.summary.total
					obj.dischargedjuly = element.summary.discharged
					obj.deathsjuly = element.summary.deaths
				}
				else if(element.day === "2020-08-30"){
					obj.totalcasesaugust = element.summary.total
					obj.dischargedaugust = element.summary.discharged
					obj.deathsaugust = element.summary.deaths
				}
			})
			this.setState({ countryData : obj })
		})
		axios('https://covid-india-cases.herokuapp.com/statetimeline/').then(res=>{
			let data = []
			res.data.forEach((element)=>{
				let obj = {
					state : element["State UT"],
					months : {
						march : element["2020-03-31"],
						april : element["2020-04-30"],
						may : element["2020-05-31"],
						june : element["2020-06-30"],
						july : element["2020-07-31"],
						august : element["2020-08-25"]
					}
				}
				data.push(obj)
			})
			this.setState({ stateData : data })
		})
	}

	render() {
		console.log(this.state.stateData)
		if (!this.state.countryData.totaltestsaugust || !this.state.countryData.deathsaugust || this.state.stateData.length < 35) {
            return <div />
        }
		return(
			<div>
				<div className="country">
					<CountryChart countryData={this.state.countryData} />
				</div>
				<div className="states" style={{ marginLeft: "12%" }}>
					<RenderStateCharts stateData={this.state.stateData} key={this.state.stateData.state} />
				</div>
			</div>
		)
	}
}
export default App;