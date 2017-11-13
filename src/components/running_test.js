import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkTest } from '../actions/action_test';

class RunningTest extends Component {
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkForResult(),
            1500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkForResult() {
        if (this.props.runningTest) {           
            this.props.checkTest(this.props.runningTest.id);
            if (this.props.runningTest.status === 200) {
                this.props.history.push(`/tests/detail/${this.props.runningTest.id}`);
            }
        }
    }

    render() {
        return (
            <div className='runningTest'>
                <div className='col s12'>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
                <div className='container'>
                    <div className='col s12'>
                        <p>Your test is running. Test detail will be displayed afeter test run.</p>
                    </div>
                </div>
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