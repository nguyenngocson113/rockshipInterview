import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectPost } from './../../actions/ActionCreator';
import { bindActionCreators } from "redux";

class List extends Component {
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


	_renderList(list) {
		return (
			<div>
				<ul className="row title">
					<li className="col-md-3">Title</li>
					<li className="col-md-6">Description</li>
					<li className="col-md-3">Author</li>
				</ul>
				<div className="table">
					<ul>
						{
							list.map((item, index) => {
								const isEven = (index % 2) === 0 ? true : false;
								const className = classNames({
									row: true,
									'row-even': isEven
								});
								const { title, author, description, id } = item;
								return (
									<li key={index} className={className} onClick={() => this.props.selectPost(item)}>
										<Link className="item" to={{
											pathname: `/post/${id}`,
											state: {
												post: {
													title,
													author,
													description,
													id
												}
											}
										}} >
											<span className="col-md-3 row-name">{title}</span>
											<span className="col-md-6 row-description"><div dangerouslySetInnerHTML={{ __html: description }}></div></span>
											<span className="col-md-3 row-author">{author}</span>
										</Link>

									</li>
								);
							})
						}
					</ul>

				</div>
			</div>
		)
	}

	render() {
		const { list } = this.props;
		return (
			<div className="List">
				{list.length ? this._renderList(list) : (
					<div>
						<p>Click plus button to create content</p>
					</div>
				)
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectPost: state.selectPost
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ selectPost },
		dispatch
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
