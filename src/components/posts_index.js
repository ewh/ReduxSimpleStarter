import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // console.log('posts', this.props.posts);

        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}

function mapStateToProps({posts}) {
    return {
        posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
