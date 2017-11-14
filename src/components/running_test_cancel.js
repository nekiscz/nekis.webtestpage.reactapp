import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cancelTest } from '../actions/action_test';

class CancelTest extends Component {
    onClick() {
        console.log('CLICKED CANCEL')
        this.props.cancelTest(this.props.runningTest.testId, () => {
            this.props.history.push('/tests/new')
        });
    }

    isInQueue() {
        if (this.props.runningTest.statusCode === 101) {
            return true;
        }
        return false;
    }

    render() {
        if (this.props.runningTest) {
            if (this.props.runningTest.statusCode !== 0) {
                return (
                    <div className='container'>
                        <div className='row'>
                            <div className='col s12 m8'>
                                <p>Are data displayed above wrong? You don't have enough time to wait for this test? Please cancel it so you can free place in queue for others.</p>
                            </div>
                            <div className='col s12 m4'>
                                <button
                                    onClick={this.onClick}
                                    className={this.isInQueue() ? 'btn-large waves-effect waves-light red accent-2' : 'btn-large disabled'}>
                                    Cancel test</button>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return ('')
    }
}

function mapStateToProps({ test }) {
    return {
        runningTest: test.runningTest
    }
}

export default connect(mapStateToProps, { cancelTest })(CancelTest);