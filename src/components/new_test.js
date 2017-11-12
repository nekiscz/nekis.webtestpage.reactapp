import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { runTest } from '../actions/action_test';
import textField from './text_field';

class NewTest extends Component {
    onSubmit(values) {
        this.props.runTest(values);
    }
    
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className='newtest'>
                <div className='container'>
                    <div className='col s12'>
                        <h1>New test</h1>
                        <p>Here you can create new test for your website. Just fill URL and select location and browser to get going.</p>
                    </div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='col s12'>
                        <div className='row'>
                                <Field 
                                    name='url' 
                                    component={textField}
                                    placeholder="wwww.example.com" 
                                    label='Website URL'
                                    wrapperClass='col s12 m9' />
                            <div className='col s12 m3'>
                                <button type='submit' className='btn'>Run test</button>
                            </div>
                        </div>
                    </form>
                    <p>Some text</p>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.url) {
        errors.url = "Enter a url to be tested"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewTestForm'
})(connect(null, { runTest })(NewTest));