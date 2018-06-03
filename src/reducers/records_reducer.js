import {
    ADD_RECORD,
    CHANGE_SALARY,
    DELETE_RECORD,
    EDIT_RECORD,
    INITIAL_STATE,
    SHOW_EDIT_FORM,
    SORT_RECORDS
} from '../constants';

const records_reducer = (state = INITIAL_STATE, action) => {
    let newState = {};

    switch (action.type) {
        case ADD_RECORD:
            newState.salary = state.salary;
            newState.sortOrder = Object.assign({}, state.sortOrder);
            newState.records = state.records.slice();
            newState.records.push({
                name: action.name,
                cost: action.cost,
                percents: action.percents,
                group: action.group,
                showEditForm: action.showEditForm
            });
            return newState;

        case SHOW_EDIT_FORM:
            newState.salary = state.salary;
            newState.sortOrder = Object.assign({}, state.sortOrder);
            newState.records = state.records.slice();
            newState.records[action.index].showEditForm = action.showEditForm;
            return newState;

        case EDIT_RECORD:
            newState.salary = state.salary;
            newState.sortOrder = Object.assign({}, state.sortOrder);
            newState.records = state.records.slice();
            newState.records[action.index].name = action.name;
            newState.records[action.index].cost = action.cost;
            newState.records[action.index].percents = action.percents;
            newState.records[action.index].group = action.group;
            newState.records[action.index].showEditForm = action.showEditForm;
            return newState;

        case DELETE_RECORD:
            newState.salary = state.salary;
            newState.sortOrder = Object.assign({}, state.sortOrder);
            newState.records = state.records.slice();
            newState.records.splice(action.index, 1);
            return newState;

        case SORT_RECORDS:
            newState.salary = state.salary;
            newState.sortOrder = Object.assign({}, action.sortOrder);
            newState.records = action.records.slice();
            return newState;

        case CHANGE_SALARY:
            newState.sortOrder = Object.assign({}, state.sortOrder);
            newState.records = state.records.slice();
            newState.salary = action.salary;
            newState.records.forEach((record, index) => {
                record.percents = action.allPercents[index];
            });
            return newState;

        default:
            return state;
    }

};

export default records_reducer;