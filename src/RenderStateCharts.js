import React, { Component } from 'react';
import StateCharts from './StateCharts';

class RenderStateCharts extends Component  {
    render(){
        console.log(this.props)
        return this.props.stateData.map((item)=>(
            <StateCharts stateData={item} />
        ))
    }
}

export default RenderStateCharts;