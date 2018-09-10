import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log('gmap did mount', this.props);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        console.log('gmap render', this.props);
        return <div ref="map" />
    }
}

export default GoogleMap;
