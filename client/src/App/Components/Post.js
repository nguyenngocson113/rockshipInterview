import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { deletePost } from './../../actions/ActionCreator';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './Post.scss';
import Header from './Header';

class Post extends Component {
    deletePost(id) {
        this.props.deletePost(id);
    }

    render() {
        const {
            location: {
                state: {
                    post: {
                        title = '',
                        description = '',
                        author = '',
                        id
                    } = {},
                    post
                } = {}
            } = {}
        } = this.props;
        return (
            <div>
                <Header />
                <div className="row post">
                    <div className="col-md-6">
                        <Link to={{pathname: `/`}}>
                            <button className="btn btn-primary">Board List</button>
                        </Link>
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <b>Description:</b>
                            <div dangerouslySetInnerHTML={ { __html: description } }></div>
                            <b>Author:</b>
                            <div>{author}</div>
                        </div>
                        <Link className="item" to={{
                            pathname: `/edit/${id}`,
                            state: { post }
                            }} >
                            <button className="btn btn-success">Edit</button>
                        </Link>
                        <Link className="item" to={{
                            pathname: '/'
                            }} >
                            <button className="btn btn-danger" onClick={() => {this.deletePost(id)}}>Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {deletePost},
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);