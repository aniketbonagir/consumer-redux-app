import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    consumerList
} from "../../constants/mockData";

import ConsumerDetails from "./ConsumerDetails";

describe('Test ConsumerDetails Component', () => {
    let mountedComponent;
    let props = {
        consumer: consumerList[0],
        closeModal: () => {},
        onSave: () => {}
    }

    beforeEach(() => {
        mountedComponent = shallow(<ConsumerDetails {...props} />)
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('Check if the Buton container Renders', () => {
        let lableCmp = mountedComponent.find('.bt-ct');
        expect(lableCmp).toHaveLength(1);
    });

    test('Check if the Detail container Renders', () => {
        let lableCmp = mountedComponent.find('.detail-ct');
        expect(lableCmp).toHaveLength(1);
    });
});