import { ADD_RECORD, SHOW_EDIT_FORM, EDIT_RECORD, DELETE_RECORD, SORT_RECORDS, CHANGE_SALARY } from '../constants';


export function addRecord(name, cost, percents, group) {

    return {
        type: ADD_RECORD,
        name,
        cost,
        percents,
        group,
        showEditForm: false
    }
}

export function showEditForm(showEditForm, index) {
    return {
        type: SHOW_EDIT_FORM,
        showEditForm,
        index
    }
}

export function editRecord(name, cost, percents, group, index) {
    return {
        type: EDIT_RECORD,
        name,
        cost,
        percents,
        group,
        showEditForm: false,
        index
    }
}

export function deleteRecord(index) {
    return {
        type: DELETE_RECORD,
        index
    }
}

export function sortRecords(records, sortOrder) {
    return {
        type: SORT_RECORDS,
        records,
        sortOrder
    }
}

export function changeSalary(salary, allPercents) {
    return {
        type: CHANGE_SALARY,
        salary,
        allPercents
    }
}
