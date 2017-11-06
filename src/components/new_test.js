import React, { Component } from 'react';
import { connect } from 'react-redux';
import { runTest } from '../actions';

class NewTest extends Component {
    render() {
        return (
            <div>
                This is NEW TEST page.
            </div>
        );
    }
}

export default connect(null, { runTest })(NewTest);