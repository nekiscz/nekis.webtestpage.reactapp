import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import RunningTestData from '../components/running_test_data';

describe('<RunningTest />', () => {
    const wrapper = mount(<RunningTestData runningTest={mockTestObject()} />);
    
    it('main class is displayed', () => {
        expect(wrapper.hasClass('test-status')).to.be.true;
    })
});

function mockTestObject() {
    return {
        statusText: "some text",
        testId: "asd51asd564",
        testInfo: {
            url: "http://example.com",
            browser: "IE 8",
            location: "Old York",
            connectivity: "Slow as hell"
        }
    };
}