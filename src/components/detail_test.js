import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataTile from './detail_data_tile';
import { fetchTest } from '../actions/action_test';

class TestDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id)
        this.props.fetchTest(id)
    }

    getTimeFromTicks(ticks) {
        var seconds = ticks / 10000000;
        if (seconds > 300) {
            var minutes = Math.floor((seconds % 3600) / 60)
            return minutes + 'min';
        }

        return Math.floor(seconds) + 's';
    }

    render() {
        const { test } = this.props;

        if (!test) {
            return <div>Loading...</div>
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <h1>Test detail <code className='normify'>(ID: {this.props.test.id})</code></h1>
                    </div>
                </div>
                <div className='row'>
                    <h2 className='col s12'>Test data</h2>
                    <DataTile className='col s12 m6' name='URL' value={this.props.test.testUrl} />
                    <DataTile className='col s12 m6' name='Location' value={this.props.test.location} />
                    <DataTile className='col s12 m6' name='Conection' value={this.props.test.connectivity} />
                    <DataTile className='col s12 m6' name='Test runtime' value={this.getTimeFromTicks(this.props.test.completed)} />
                    <DataTile className='col s12 m6' name='Number of successful first views' value={this.props.test.successfulFVRuns} />
                    <DataTile className='col s12 m6' name='Number of successful repeat views' value={this.props.test.successfulRVRuns} />
                    </div>
                <div className='row'>
                    <h2 className='col s12'>Tester data</h2>
                    <DataTile className='col s12 m6' name='Tester' value={this.props.test.tester} />
                    <DataTile className='col s12 m6' name='Tester DNS' value={this.props.test.testerDNS} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ test }) {
    console.log(test)
    return {
        test: test.runningTest
    }
}

export default connect(mapStateToProps, { fetchTest })(TestDetail);