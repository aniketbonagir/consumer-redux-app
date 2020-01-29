import React, { Component } from 'react';
import {List} from "../List/List";
import Modal from "../Modal/Modal";
import ConsumerDetails from "../ConsumerDetails/ConsumerDetails";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

class ConsumerList extends Component {

    openModalHandler = (item) => {
        this.props._openModal(item);
    }

    closeDetailModal = () => {
        this.props._closeDetailsModal()
    }

    confirmUpdatedValue = (item) => {
        this.props._openConfirmDialogModal(item)
    }

    closeConfirmDialogModal = () => {
        this.props._closeConfirmDialogModal()
    }

    updateNewBudgetValue = () => {
        this.props._updateNewBudgetValue()
    }
    
    render() {
        const { consumerList, showModal, consumer, showConfirmModal } = this.props;

        return (<div>
            <List cList={consumerList} openModal={this.openModalHandler} />
            {showModal ? (
                <Modal>
                    <div>
                        <ConsumerDetails
                            consumer={consumer}
                            closeModal={this.closeDetailModal}
                            onSave={this.confirmUpdatedValue}
                        />
                    </div>
                </Modal>
            ) : null}
            {showConfirmModal ? (
                <Modal>
                    <div>
                        <ConfirmDialog
                            closeModal={this.closeConfirmDialogModal}
                            onSave={this.updateNewBudgetValue}
                        />
                    </div>
                </Modal>
            ) : null}
        </div>);
    }
}

export default ConsumerList;