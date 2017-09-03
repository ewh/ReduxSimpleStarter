import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default class DataChart extends Component {
    computeAverage(data) {
        const dataSum = data.reduce((accum, current) => accum + current);
        const dataAvg = dataSum/data.length;
        const cleanAvg = dataAvg.toFixed(1);
        return cleanAvg;
    }

    render() {
        const data = this.props.data;
        const cleanAvg = this.computeAverage(data);
        console.log(cleanAvg);

        return (
            <div>
                <Sparklines height={120} width={180} data={data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{cleanAvg} {this.props.units}</div>
            </div>
        );
    }
}
