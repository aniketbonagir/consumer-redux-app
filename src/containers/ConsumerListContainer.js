import { connect } from 'react-redux';
import {
    bindActionCreators
} from 'redux';

import {
    _openModal,
    _closeDetailsModal,
    _openConfirmDialogModal,
    _closeConfirmDialogModal,
    _updateNewBudgetValue
} from "../actions/consumer-list-actions";
import ConsumerList from "../components/ConsumerList/ConsumerList";


const mapStateToProps = ({
        ConsumerList
    }) => {
    return {
        ...ConsumerList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        _openModal,
        _closeDetailsModal,
        _openConfirmDialogModal,
        _closeConfirmDialogModal,
        _updateNewBudgetValue
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerList);