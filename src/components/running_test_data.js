import React, { Component } from 'react';
import DataTile from './detail_data_tile';

export default (data) => {
    var { runningTest } = data;
    return (
        <div className='test-status container'>
            <div className='row'>
                <div className='col s12'>
                    <p className='accent'>{runningTest.statusText}</p>
                    <h2>Test data</h2>
                </div>
                <DataTile className='col s12' name='Test ID' value={runningTest.testId} />
                <DataTile className='col s12 m6' name='Website' value={runningTest.testInfo.url} />
                <DataTile className='col s12 m6' name='Browser' value={runningTest.testInfo.browser} />
                <DataTile className='col s12 m6' name='Location' value={runningTest.testInfo.location} />
                <DataTile className='col s12 m6' name='Connectivity' value={runningTest.testInfo.connectivity} />
            </div>
        </div>
    )
}
