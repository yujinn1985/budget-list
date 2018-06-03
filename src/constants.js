import {calculatePercentage} from './util/calculator';

export const ADD_RECORD = 'ADD_RECORD';
export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const EDIT_RECORD = 'EDIT_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const SORT_RECORDS = 'SORT_RECORDS';
export const CHANGE_SALARY = 'CHANGE_SALARY';

export const INITIAL_STATE = {
    salary: 3000,
    sortOrder: {
        ascendingOrderName: false,
        ascendingOrderCost: false,
        ascendingOrderPercents: false,
        ascendingOrderGroup: false,
    },
    records: [
        {
            name: 'Rent a car',
            cost: 1000,
            percents: calculatePercentage(3000, 1000),
            group: 'Traveling',
            showEditForm: false
        },
        {
            name: 'Buy a t-shirt',
            cost: 50,
            percents: calculatePercentage(3000, 50),
            group: 'Shopping',
            showEditForm: false
        },
        {
            name: 'Visit Dubai',
            cost: 500,
            percents: calculatePercentage(3000, 500),
            group: 'Traveling',
            showEditForm: false
        },
        {
            name: 'Watch a movie',
            cost: 25,
            percents: calculatePercentage(3000, 25),
            group: 'Tickets',
            showEditForm: false
        },
        {
            name: 'Buy groceries',
            cost: 250,
            percents: calculatePercentage(3000, 250),
            group: 'Meal',
            showEditForm: false
        }
    ]
};