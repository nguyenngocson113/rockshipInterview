import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import List from './List';
import { Link } from "react-router-dom";
import './Home.scss';
import Header from './Header';

class Home extends Component {
    static propTypes = {
        list : PropTypes.arrayOf(
            PropTypes.shape({
                id : PropTypes.string,
                title : PropTypes.string,
                description : PropTypes.string,
                author : PropTypes.string
            })
        )
    };

    static defaultProps = {
        list: []
    };  

    state = {
        post: {}
    };

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
        const {list = []} = this.props;
        return (
            <div>
                <Header />
                <div className="row content">
                    <div className="col-md-6">
                        <h1>Board List</h1>
                        <Link to={{pathname: `/create`, state: {post: {}}}} >
                            <button className="btn btn-primary">Add Board</button>
                        </Link>
                        <List list={list}/>
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
