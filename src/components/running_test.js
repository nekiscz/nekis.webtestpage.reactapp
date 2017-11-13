import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkTest } from '../actions/action_test';

class RunningTest extends Component {
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkForResult(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkForResult() {
        if (this.props.runningTest) {  
            this.props.checkTest(this.props.runningTest.id);
            if (this.props.runningTest.statusCode === 200) {
                this.props.history.push(`/tests/detail/${this.props.runningTest.id}`);
            }
        }
    }

    getStatusText() {
        if (this.props.runningTest) {  
            if (this.props.runningTest.statusCode !== 0) {
                return (
                        <div>
                            <div className='col s12'>
                                <p>{this.props.runningTest.statusText}</p>
                            </div>
                        </div>
                )
            }
        }

        return (
            <div className='col s12'>
                <p>Your test is submitted and is preparing to queue.</p>
            </div>         
        )
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
                    {this.getStatusText()}
                </div>
            </div>

        );
    }
}

function mapStateToProps({ test }) {
    console.log(test.runningTest);
    
    return {
        runningTest: test.runningTest
    };
}

export default connect(mapStateToProps, { checkTest })(RunningTest);