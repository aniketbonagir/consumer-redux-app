import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    consumerList
} from "../../constants/mockData";
import ConsumerList from "./ConsumerList";
import {
    List
} from "../List/List";

describe('Test ConsumerList Component', () => {
    let mountedComponent;
    let props = {
        consumerList,
        showModal: false,
        showConfirmModal: false,
        consumer: {}
    };

    beforeEach(() => {
        mountedComponent = shallow(<ConsumerList {...props} />);
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if Component List Renders', () => {
        expect(mountedComponent.find(List)).toHaveLength(1);
    });
});