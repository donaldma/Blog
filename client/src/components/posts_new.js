import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchUser } from '../actions';

class PostsNew extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  // Redux-Form convention
  renderField(field) {
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

  renderFieldLarge(field) {
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

  renderFieldSelect(field) {
    // ES6 destructing 
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control category-select" type="text" {...field.input}>
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

  renderFieldPhoto(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="url"
          {...field.input}
        />
        <div className="text-danger">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    if(!this.props.user[0]) {
      return(
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <h1>Sorry</h1>
          <h3>Must be an admin to access this page</h3>
          <Link to='/user/login' className="main-button"> Go to Login </Link>
        </div>
      );
    }
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderFieldSelect}
        />
        <Field
          label="Photo"
          name="photo"
          component={this.renderFieldPhoto}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderFieldLarge}
        />
        <button type="submit" className="submit-button">Submit</button>
        <Link to="/" className="cancel-button">Cancel</Link>
      </form>
    );
  }
}

// Redux-Form convention
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values' 
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Select a category!";
  }
  if (!values.photo) {
    errors.photo = "Upload a photo!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes for is invalid
  return errors;
}

function mapStateToProps(state) {
  return { 
    user: state.user
  };
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, { createPost, fetchUser })(PostsNew)
);