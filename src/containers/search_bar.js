import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {cityNameSearchTerm: ''};
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.fetchWeather(this.state.cityNameSearchTerm);
        this.setState({cityNameSearchTerm: ''});
    }

    onInputChange = event => {
        this.setState({cityNameSearchTerm: event.target.value});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    placeholder="Get city forecast"
                    value={this.state.cityNameSearchTerm}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
