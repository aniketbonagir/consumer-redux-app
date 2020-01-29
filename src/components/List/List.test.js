import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    List,
    Header,
    RowDataList,
    Row
} from "./List";
import {
    consumerList
} from "../../constants/mockData";

describe('Test List Component', () => {
    let mountedComponent;
    let props = {
        cList: consumerList,
        rowClickCb: () => {}
    };

    beforeEach(() => {
        mountedComponent = shallow(<List {...props} />);
    });

    test('Check if Components Renders', () => {
        expect(mountedComponent.exists()).toBe(true);
    });

    test('check if it renders header row', () => {
        expect(mountedComponent.find(Header)).toHaveLength(1);
    })

    test('check if it renders RowDataList', () => {
        expect(mountedComponent.find(RowDataList)).toHaveLength(1);
    })

    test('check if it renders RowData', () => {
        let cmp = mountedComponent.find(RowDataList);
        expect(cmp.dive().find(Row)).toHaveLength(3);
    })
})