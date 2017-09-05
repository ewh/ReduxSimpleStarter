import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';

class PostCreate extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const errorContent = touched ? error : '';
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <span className="errorMsg text-help">
                    {errorContent}
                </span>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Content"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        );
    }
}

function validateFields(values, fieldNames) {
    const errors = {};
    return errors;
}

function validate(values) {
    const errors = {};

    function validateField(fieldName) {
        if (!values[fieldName]) {
            errors[fieldName] = `Missing field: ${fieldName}`;
        }
    }

    const fields = ['title', 'categories', 'content'];
    fields.forEach(fld => {
        validateField(fld);
    });

    return errors;
}

const mainForm = reduxForm({
    form: 'PostsCreateForm',
    validate
})(PostCreate);

export default connect(null, {createPost})(mainForm);
