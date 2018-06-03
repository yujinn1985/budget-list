import React from 'react';
import PropTypes from 'prop-types';

import {sortRecordsByCost, sortRecordsByGroup, sortRecordsByName, sortRecordsByPercents} from '../util/comparators';

function Heading(props) {

    const sortOrder = props.sortOrder;
    const sortOrderForName = props.sortOrder["ascendingOrderName"];
    const sortOrderForCost = props.sortOrder["ascendingOrderCost"];
    const sortOrderForPercents = props.sortOrder["ascendingOrderPercents"];
    const sortOrderForGroup = props.sortOrder["ascendingOrderGroup"];
    const records = props.records;

    return (
        <thead>
        <tr>
            <th title="Click to sort"
                className="Sortable"
                onClick={() => {
                    sortRecordsByName(records, sortOrderForName);
                    sortOrder["ascendingOrderName"] = !sortOrderForName;
                    props.sortRecords(records, sortOrder);
                }}
            >Name
            </th>
            <th title="Click to sort"
                className="Sortable"
                onClick={() => {
                    sortRecordsByCost(records, sortOrderForCost);
                    sortOrder["ascendingOrderCost"] = !sortOrderForCost;
                    sortOrder["ascendingOrderPercents"] = !sortOrderForPercents;
                    props.sortRecords(records, sortOrder);
                }}
            >Cost
            </th>
            <th title="Click to sort"
                className="Sortable"
                onClick={() => {
                    sortRecordsByPercents(records, sortOrderForPercents);
                    sortOrder["ascendingOrderPercents"] = !sortOrderForPercents;
                    sortOrder["ascendingOrderCost"] = !sortOrderForCost;
                    props.sortRecords(records, sortOrder);
                }}
            >Percents from salary
            </th>
            <th title="Click to sort"
                className="Sortable"
                onClick={() => {
                    sortRecordsByGroup(records, sortOrderForGroup);
                    sortOrder["ascendingOrderGroup"] = !sortOrderForGroup;
                    props.sortRecords(records, sortOrder);
                }}
            >Group
            </th>
            <th className="Actions_heading">Actions</th>
        </tr>
        </thead>
    );
}

Heading.propTypes = {
    sortOrder: PropTypes.object,
    records: PropTypes.array,
    sortRecords: PropTypes.func
};

export default Heading;
