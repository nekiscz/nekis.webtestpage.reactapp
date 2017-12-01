import React, { Component } from 'react';
import { connect } from 'react-redux';

import RunningTestData from './running_test_data';

class StatusMessage extends Component {
    render() {
        if (this.props.runningTest) {
            if (this.props.runningTest.statusCode !== 0) {
                return <RunningTestData runningTest={this.props.runningTest} />
            }
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <p>Your test is submitted and is preparing to queue.</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ test }) {
    return {
        runningTest: test.runningTest
    };
}

export default connect(mapStateToProps, null)(StatusMessage);