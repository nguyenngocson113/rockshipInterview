import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";
import _ from 'lodash';
import './Editor.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost as fnCreatePost, editPost } from './../../actions/ActionCreator';
import Header from './Header';

class Editor extends Component {
    state = {
        post: _.cloneDeep(this.props.location.state.post) || {}
    };

    savePost() {
        const {post = {}} = this.state;
        this.props.fnCreatePost(post);
    }

    submit() {
        const {post = {}} = this.state;
        this.props.editPost(post);
    }

    onEditorChange( evt ) {
        const {post = {}} = this.state;
        post['description'] = evt.editor.getData();
        this.setState({ post });
    }

    handleChange(e) {
        const {post = {}} = this.state;
        post[e.target.name] = e.target.value;
        this.setState({ post });
    }

    render() {
        const {
            match: {
                path = ''
            } = {},
            location: {
                state: {
                    post: {
                        title: propsTitle = '',
                        description: propsDescription = '',
                        author: propsAuthor = '',
                    } = {},
                } = {}
            } = {}
        } = this.props;
        const {
            post: {
                description = propsTitle,
                title = propsDescription,
                author = propsAuthor
            } = {},
        } = this.state;
        return (
            <div>
            <Header />
                <div className="row editor">
                    <div className="col-md-6">
                        <h1>EDITOR</h1>
                        <Link to={{pathname: `/`}}>
                            <button className="btn btn-primary">Board List</button>
                        </Link>
                        <MDBInput label="Title" group type="text" name="title" value={title} onInput={e => this.handleChange(e)} />
                        <CKEditor
                            data={description}
                            onChange={(e) => this.onEditorChange(e)}
                        />
                        <MDBInput label="Author" group type="text" name="author" value={author} onInput={e => this.handleChange(e)} />
                        <Link to={{pathname: `/`}}>
                            {path === '/create' ? <button className="btn btn-success" onClick={() => this.savePost()}>Save</button> : <button className="btn btn-success" onClick={() => this.submit()}>Save</button>}
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
        {fnCreatePost, editPost},
        dispatch,
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Editor);