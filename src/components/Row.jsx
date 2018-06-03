import React from 'react';
import PropTypes from 'prop-types';

function Row(props) {

    const name = props.record.name;
    const cost = props.record.cost;
    const group = props.record.group;
    const index = props.index;
    const buttonsDisabled = props.buttonsEditAndDeleteDisable;
    const percents = props.record.percents;

    return (
        <tr>
            <td className="Name_row">{name}</td>
            <td className="Cost_row">{cost}</td>
            <td className="Percents_row">{percents}</td>
            <td className="Group_row">{group}</td>
            <td className="Buttons_row">
                {buttonsDisabled ?
                    <button
                        type="button"
                        className="Row_button disabled"
                        disabled
                    >Edit</button> :
                    <button
                        type="button"
                        className="Row_button enabled"
                        onClick={() => {
                            props.showEditForm(!props.record.showEditForm, index);
                        }}
                    >Edit</button>}
                {buttonsDisabled ?
                    <button
                        type="button"
                        className="Row_button disabled"
                        disabled
                    >Delete</button> :
                    <button
                        type="button"
                        className="Row_button enabled"
                        onClick={() => {
                            props.deleteRecord(index);
                        }}
                    >Delete</button>}
            </td>
        </tr>
    );
}

Row.propTypes = {
    deleteRecord: PropTypes.func,
    showEditForm: PropTypes.func,
    record: PropTypes.object,
    index: PropTypes.number,
    buttonsEditAndDeleteDisable: PropTypes.bool
};

export default Row;
