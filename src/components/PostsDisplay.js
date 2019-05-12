import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/AddPostAction';

class PostsDisplay extends Component {
	componentWillMount() {
	    this.props.fetchPosts();
	 }

	componentWillReceiveProps(nextProps) {
	    if (nextProps.newPost) {
	      this.props.posts.unshift(nextProps.newPost);
	    }
	}
	

	render() {
		const postItems = this.props.posts.map( post => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>	
				</div>
			)
		);
		return (
			<div>
				{postItems}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  posts: state.posts.listItems,
  newPost: state.posts.listItem
});

export default connect(mapStateToProps, { fetchPosts })(PostsDisplay);