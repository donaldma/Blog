import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost } from '../actions';


class PostsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      redirect: false
    });
  }

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize = () => {
    const data = {
      "title": this.props.post.title,
      "categories": this.props.post.category,
      "content": this.props.post.content
    };

    this.props.initialize(data);
  }
  
  renderField = (field) => {
    // ES6 destructing 
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderFieldLarge = (field) => {
    // ES6 destructing 
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderFieldSelect = (field) => {
    // ES6 destructing 
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control category-select" type="text" {...field.input} >
          <option>Beauty</option>
          <option>Fashion</option>
          <option>Travel</option>
          <option>Fitness</option>
        </select>
        <div className="text-danger">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit = (values) => {
    const id = this.props.post.id
    this.props.editPost(id, values, () => {
      this.setState({ redirect: true })      
    });
  }

  render() {
    const { handleSubmit } = this.props;

    if(this.state.redirect) {
      return(
        <Redirect to='/' />
      );
    }

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title For Post"
          name="title"
          defaultValue={this.props.post.title}
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderFieldSelect}
        />
        <Field
          label="Post Content"
          name="content"
          defaultValue={this.props.post.content}
          component={this.renderFieldLarge}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values' 
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes for is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
  onSubmitSuccess: () => {
  }
})(
  connect(null, { editPost })(PostsEdit)
);