import React from "react";
import styles from "./style.module.css";

const ConfirmDialog = ({ closeModal, onSave }) => {

    return (
        <div className={styles["ct"]}>
            <div className={styles["detail-ct"]}>
                Please confirm if you do want to procced?
            </div>
            <div className={styles["bt-ct"]}>
                <div className={styles["bt"]}><button className={styles["base-button"]} onClick={closeModal}>Cancel</button></div>
                <div className={styles["bt"]}><button className={styles["base-button"]} onClick={onSave}>Confirm</button></div>
            </div>
        </div>
    );
}

export default ConfirmDialog;