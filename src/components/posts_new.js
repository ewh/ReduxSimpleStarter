import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.onSubmit = this.onSubmit.bind(this);
    //     // this.buildTextField = this.buildTextField.bind(this);
    //     // this.renderTitleField = this.renderTitleField.bind(this);
    //     // this.renderTagsField = this.renderTagsField.bind(this);
    // }

    renderTextField = field => {
        const {touched, error} = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.labelValue}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = values => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    labelValue="Title"
                    name="title"
                    component={this.renderTextField}
                />
                <Field
                    labelValue="Categories"
                    name="categories"
                    component={this.renderTextField}
                />
                <Field
                    labelValue="Post Content"
                    name="content"
                    component={this.renderTextField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    const validateField = fieldName => {
        if (!values[fieldName]) {
            errors[fieldName] = `Missing Field: '${fieldName}'`;
        }
    }

    ['title', 'categories', 'content'].forEach(f => validateField(f));

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);
