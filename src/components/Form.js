import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/AddPostAction';

class Form extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      title: '',
	      body: ''
    	}
    };

	onChange = (e) => {
    	this.setState({ [e.target.name]: e.target.value });
  	};
	
	onSubmit = (e) => {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};

		this.props.createPost(post);
  	};


	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input name="title" type="text" value={this.state.title} onChange={this.onChange} placeholder="Enter Title Here"/>
					<br/>
					<br/>
					<textarea name="body" type="text" value={this.state.body} onChange={this.onChange} placeholder="Enter Post Body Here"/>
					<br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { createPost })(Form);