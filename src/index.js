import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAJTv1qW5wwitE8DOhGy6EeuFcort3YUnE';
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
    }

    render() {
        const firstVideo = this.state.videos.length > 0 ? this.state.videos[0] : null;
        return (
            <div>
                <SearchBar onSearchTermChange={this.videoSearch} searchTerm={'surfboards'} />
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
