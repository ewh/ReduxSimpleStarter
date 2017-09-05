import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostDetail extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick = () => {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;
        const backLink = <Link to="/">Back to Index</Link>;
        let result;
        if (post) {
            result = (
                <div>
                    {backLink}
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick}
                    >
                        Delete Post
                    </button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <h6>Post Detail: {post.id}</h6>
                    <p>Content: {post.content}</p>
                </div>
            );
        } else {
            result = (
                <div>
                    {backLink}
                    <div>Loading...</div>
                </div>
            );
        }
        return result;
    }
}

function mapStateToProps({posts}, ownProps) {
    const {id} = ownProps.match.params;
    const post = posts[id];
    return {post, id};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDetail);
