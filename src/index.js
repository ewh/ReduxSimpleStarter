import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';
// const API_KEY = 'AIzaSyB92eQZIgomG-S5ceeR4LUmd6gZjv5OGnk';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch = this.videoSearch.bind(this);
        this.debouncedVideoSearch = _.debounce(term => this.videoSearch(term), 300);
    }

    render() {
        const firstVideo = this.state.videos.length > 0 ? this.state.videos[0] : null;
        // const debouncedVideoSearch = _.debounce((term) => this.videoSearch(term), 300);

        return (
            <div>
                <SearchBar onSearchTermChange={this.debouncedVideoSearch} searchTerm={'surfboards'} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos} />
            </div>
        )
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    onVideoSelect(selectedVideo) {
        console.log('onVideoSelect', selectedVideo);
        this.setState({selectedVideo});
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
