import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import DataTile from '../components/detail_data_tile'

describe("<DataTile className='dt' name='n' value='v'>", () => {
  const wrapper = mount(<DataTile className='dt' name='n' value='v' />);
  
  it('renders className', () => {
    expect(wrapper.find('.dt').exists()).to.equal(true);
  });

  it('renders name and value as text', () => {
    expect(wrapper.find('.dt code').text()).to.equal('n: v');
  });
});
