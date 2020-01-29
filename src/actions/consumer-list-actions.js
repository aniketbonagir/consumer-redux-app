import {
    getConsumerListApi
} from '../api/api';
import {
    UPDATE_LIST,
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_CONFIRM_MODAL,
    CLOSE_CONFIRM_MODAL,
    UPDATE_BUDGET_VALUE
} from '../constants/constants';

export const _getConsumerList = () => {
    return dispatch => {
        getConsumerListApi().then(list => {
            dispatch({
                type: UPDATE_LIST,
                list
            });
        });
    };
}

export const _openModal = (value) => ({
    type: OPEN_MODAL,
    value
});

export const _closeDetailsModal = () => ({
    type: CLOSE_MODAL
});

export const _openConfirmDialogModal = (value) => ({
    type: SHOW_CONFIRM_MODAL,
    value
});

export const _closeConfirmDialogModal = () => ({
    type: CLOSE_CONFIRM_MODAL
});

export const _updateNewBudgetValue = () => ({
    type: UPDATE_BUDGET_VALUE
});