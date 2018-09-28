import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.buildTextField = this.buildTextField.bind(this);
    //     // this.renderTitleField = this.renderTitleField.bind(this);
    //     // this.renderTagsField = this.renderTagsField.bind(this);
    // }

    renderTextField = field => {
        return (
            <div className="form-group">
                <label>{field.labelValue}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
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
})(PostsNew);
