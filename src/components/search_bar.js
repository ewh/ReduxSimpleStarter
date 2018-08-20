import React, {Component} from 'react';

// const SearchBar = () => {
//     return <input />;
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: this.props.searchTerm};
        this.onInputChange = this.onInputChange.bind(this);
        // this.onSearchTermChange = props.onSearchTermChange;
    }

    render() {
        return (
            <div className="search-bar">
                <input className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        )
    }

    onInputChange(event) {
        const newSearchTerm = event.target.value;
        this.setState({term: newSearchTerm});
        this.props.onSearchTermChange(newSearchTerm);
    }
}

export default SearchBar;
