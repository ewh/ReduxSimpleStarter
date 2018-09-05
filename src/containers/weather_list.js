import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

class Chart extends Component {
    average(data) {
        return _.round(_.sum(data) / data.length);
    }

    render() {
        return (
            <div>
                <Sparklines data={this.props.data} height={120} width={180}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{this.average(this.props.data)} {this.props.units}</div>
            </div>
        );
    }
}

class WeatherList extends Component {
    buildDataList(data, fieldName) {
        return data.list.map(dataPoint => dataPoint.main[fieldName]);
    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const tempData = this.buildDataList(cityData, 'temp');
        const pressureData = this.buildDataList(cityData, 'pressure');
        const humidityData = this.buildDataList(cityData, 'humidity');

        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><Chart data={tempData} color="orange" units="K" /></td>
                <td><Chart data={pressureData} color="green" units="hPa" /></td>
                <td><Chart data={humidityData} color="black" units="%" /></td>
            </tr>
        );
    }

    buildWeatherList() {
        const listData = this.props.weather.map(cityData => {
            return this.renderWeather(cityData);
        });
        return listData;
    }

    render() {
        const listData = this.buildWeatherList();

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {listData}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
