import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header />); //instead of const component = shallow(<Header />)
    return component;
};

describe('Header Component', () => {

    let component
    beforeEach(() => {
        component = setUp();
    });

it('Should render without errors', () => {
    // const component = setUp() // instead of shallow(<Header />)
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
    });

    it('Should render logo', () => {
        // const component = setUp() // instead of shallow(<Header />)
        const logo = component.find(`[data-test='logoIMG']`)
        expect(logo.length).toBe(1);
        });
});