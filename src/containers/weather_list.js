import React, {Component} from 'react';
import {connect} from 'react-redux';
import DataChart from '../components/dataChart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        console.log('WeatherList', this.props);
    }

    kelvinToFahrenheit(tempK) {
        return (tempK - 273.15) * 1.8000 + 32.00;
    }

    renderWeather = (cityData) => {
        const {lat, lon} = cityData.city.coord;

        const tempData = cityData.list.map(weather => weather.main.temp);

        const tempDataFahrenheit = tempData.map(this.kelvinToFahrenheit);

        const pressureData = cityData.list.map(weather => weather.main.pressure);
        const humidityData = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={cityData.city.id}>
                {/* <td>{cityData.city.name}</td> */}
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><DataChart data={tempDataFahrenheit} color="orange" units="F" /></td>
                <td><DataChart data={pressureData} color="green" units="hPa" /></td>
                <td><DataChart data={humidityData} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        console.log('WeatherList render', this.props);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
