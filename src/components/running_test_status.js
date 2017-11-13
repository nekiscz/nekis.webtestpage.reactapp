import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatusMessage extends Component {
    render() {
        if (this.props.runningTest) {
            if (this.props.runningTest.statusCode !== 0) {
                return (
                    <div className='container'>
                        <div className='row'>
                            <div className='col s12'>
                                <p className='accent'>{this.props.runningTest.statusText}</p>
                                <h2>Test data</h2>
                                <code>Test ID: {this.props.runningTest.testId}</code>
                            </div>
                            <div className='col s12 m6'>
                                <code>Website: {this.props.runningTest.testInfo.url}</code>
                            </div>
                            <div className='col s12 m6'>
                                <code>Browser: {this.props.runningTest.testInfo.browser}</code>
                            </div>
                            <div className='col s12 m6'>
                                <code>Location: {this.props.runningTest.testInfo.location}</code>
                            </div>
                            <div className='col s12 m6'>
                                <code>Connectivity: {this.props.runningTest.testInfo.connectivity}</code>
                            </div>
                        </div>
                    </div>
                )
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