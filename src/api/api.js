import {
    consumerList
} from '../constants/mockData';

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(consumerList);
        }, 200);
    })
}

function fetchData(cb) {
    return new Promise(async (resolve, reject) => {
        let resp = await cb();
        if (Array.isArray(resp)) {
            resolve(resp)
        } else {
            reject("error")
        }
    }).then(successHandler).catch(failureHandler);
}

function successHandler(resp) {
    return resp;
};

function failureHandler(error) {
    return [];
}

export const getConsumerListApi = function getList() {
    return fetchData(getData);
};

