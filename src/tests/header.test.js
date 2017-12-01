import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from '../components/header';

describe('<Header />', () => {
    const wrapper = mount(<Header />);
    
    it('base class is rendered', () => {
        expect(wrapper.find('.header').exists()).to.be.true;
    });

    it('logo is displayed', () => {
        expect(wrapper.find('.brand-logo').exists()).to.be.true;
    });

    it('renders menu items', () => {
        expect(wrapper.find('.hide-on-med-and-down').exists()).to.be.true;
        expect(wrapper.find('.side-nav').exists()).to.be.true;
        expect(wrapper.find('ul')).to.be.length(2);
        expect(wrapper.find('ul li')).to.be.length(8);
    });
});