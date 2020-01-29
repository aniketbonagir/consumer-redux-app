import React from "react";
import styles from "./style.module.css";
import { convertToGermanFormat } from "../../utils/common";

export const List = ({ cList, openModal}) => {
    return (<div>
        {<Header />}
        {<RowDataList
            list={cList}
            rowClickCb= {openModal} 
        />}
    </div>);
}

export const Header = () => {
    return (<div key="header" className={styles["header"]}>
        <div className={styles["col"]}>Company Name</div>
        <div className={styles["col"]}>Date of a first purchase</div>
        <div className={styles["col"]}>Total Budget</div>
        <div className={styles["col"]}>Budget Spent</div>
        <div className={styles["col"]}>Budget Left</div>
    </div>)
}

export const RowDataList = ({list = [], rowClickCb}) => {
    return list.map((consumer, index) => {
        return (<Row key={consumer.id} consumer={consumer} index={index} rowClickCb={rowClickCb}  />)
    })
}

export const Row = ({ consumer, index, rowClickCb}) => {
    return (
        <div
            key={consumer.id}
            className={(index % 2 === 0) ? styles["row-even"] : styles["row-odd"]}
            onClick={() => {
                rowClickCb(consumer);
            }}
        >
            <div className={styles["col"]}>{consumer.name}</div>
            <div className={styles["col"]}>{consumer.date_of_first_purchase}</div>
            <div className={styles["col"]}>{convertToGermanFormat(consumer.budget)}</div>
            <div className={styles["col"]}>{convertToGermanFormat(consumer.budget_spent)}</div>
            <div className={styles["col"]}>{convertToGermanFormat(consumer.budget - consumer.budget_spent)}</div>
        </div>
    );
}