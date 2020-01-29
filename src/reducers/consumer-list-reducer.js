import {
    UPDATE_LIST,
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_CONFIRM_MODAL,
    CLOSE_CONFIRM_MODAL,
    UPDATE_BUDGET_VALUE
} from '../constants/constants';
import findIndex from "lodash/findIndex";
import update from "immutability-helper";
import get from "lodash/get";

const INITIAL_STATE = {
    consumerList: [],
    showModal: false,
    showConfirmModal: false,
    consumer: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_LIST:
            return {
                ...state,
                consumerList: action.list
            }
        case OPEN_MODAL: 
            return {
                ...state,
                showModal: true,
                consumer: action.value
            }
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false
            }
        case SHOW_CONFIRM_MODAL:
            return {
                ...state,
                showModal: false,
                showConfirmModal: true,
                consumer: action.value
            }
        case CLOSE_CONFIRM_MODAL:
            return {
                ...state,
                showConfirmModal: false,
                consumer: {}
            }
        case UPDATE_BUDGET_VALUE:
            return {
                ...state,
                consumerList: update(state.consumerList, {
                    [findIndex(state.consumerList, ["id", state.consumer.id])]: {
                        budget: {
                            $set: +get(state, "consumer.budget")
                        }
                    }
                }),
                showConfirmModal: false,
                consumer: {}
            }
        default:
            return state;
    }

}