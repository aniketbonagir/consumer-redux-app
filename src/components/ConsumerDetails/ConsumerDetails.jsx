import React, { useState } from 'react';
import { isNumeric } from "../../utils/common";
import styles from "./style.module.css";

const ConsumerDetails = ({ consumer, closeModal, onSave}) => {
    const { name, budget, budget_spent } = consumer;

    const [tBudget, updateBudget] = useState(budget)
    const [showError, updateErrorFlag] = useState(false);
    const [errorMsg, updateErrorMsg] =  useState("");

    const updateBudgetHandler = (e) => {
        let nBudget = e.target.value;
        updateBudget(nBudget);

        if (!isNumeric(nBudget)) {
            updateErrorMsg("Invalid Input Number");
            updateErrorFlag(true);
        } else if (nBudget < budget_spent) {
            updateErrorMsg(`New Budget value is less than the Spent Budget: ${budget_spent}. Please Increase the Budget Value`);
            updateErrorFlag(true);
        } else {
            updateErrorFlag(false);
        }

    }

    const saveHandler = () => {
        let newConsumerObj = { ...consumer, budget: tBudget };
        onSave(newConsumerObj);
    }

    return (
        <div className={styles["ct"]}>
            <div className={styles["detail-ct"]}>
                <div><span className={styles["label"]}>Company Name</span>: {name}</div>
                <div className={styles["input-ct"]}>
                    <span className={styles["label"]}>New Budget</span>: <input className={styles["input"]} onChange={updateBudgetHandler} value={tBudget} />
                </div>
                {showError && <div className={styles["error-msg"]}>{errorMsg}</div>}                
            </div>
            <div className={styles["bt-ct"]}>
                <div className={styles["bt"]}><button className={styles["base-button"]} onClick={closeModal}>Cancel</button></div>
                <div className={styles["bt"]}><button className={(showError) ? styles["button-disabled"] : styles["base-button"]} disabled={showError} onClick={saveHandler}>Save</button></div>
            </div>
        </div>
    );
}

export default ConsumerDetails;