import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkTest } from '../actions/action_test';
import StatusMessage from './running_test_status';
import CancelTest from './running_test_cancel';

class RunningTest extends Component {
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkForResult(),
            4000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkForResult() {
        if (this.props.runningTest) {
            this.props.checkTest(this.props.runningTest.id);
            if (this.props.runningTest.statusCode === 200) {
                this.props.history.push(`/tests/running/${this.props.runningTest.id}`);
            }
        }
    }

    render() {
        return (
            <div className='runningTest'>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                <StatusMessage />
                <CancelTest />
            </div>

        );
    }
}

function mapStateToProps({ test }) {
    return {
        runningTest: test.runningTest
    };
}

export default connect(mapStateToProps, { checkTest })(RunningTest);