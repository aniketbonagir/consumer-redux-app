import React from 'react';
import {
    shallow
} from 'enzyme';
import ConfirmDialog from "./ConfirmDialog";

describe('Test ConfirmDialog Component', () => {
    let mountedComponent;
    let props = {
        closeModal: () => {},
        onSave: () => {}
    };

    beforeEach(() => {
        mountedComponent = shallow(<ConfirmDialog {...props} />)
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