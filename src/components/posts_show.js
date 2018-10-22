import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const {postId} = this.props.match.params;
            this.props.fetchPost(postId);
        }
    }

    onDeleteClick = () => {
        const {postId} = this.props.match.params;
        this.props.deletePost(postId, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;
        if (post) {
            return (
                <div>
                    <Link to="/">Home</Link>
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick}
                    >
                        Delete Post
                    </button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

function mapStateToProps(state, ownProps) {
    // console.log('mapStateToProps', {post: posts[ownProps.match.params.postId]});
    // console.log('ownProps', ownProps.match.params);
    // console.log('state', state);
    return {post: state.posts[ownProps.match.params.postId]};
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps', fetchPost);
    return bindActionCreators({fetchPost}, dispatch);
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
