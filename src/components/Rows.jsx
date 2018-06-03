import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

class Rows extends Component {

    constructor(props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows(records) {
        const rowsArray = [];
        for (let index = 0; index < records.length; index++) {
            rowsArray.push(
                <Row record={records[index]}
                     index={index}
                     key={index}
                     showEditForm={this.props.showEditForm}
                     deleteRecord={this.props.deleteRecord}
                />
            );
        }

        return rowsArray;
    }

    render() {
        const records = this.props.records;
        let renderOnlyEditRow = false;
        let index;

        for (index = 0; index < records.length; index++) {
            if (records[index].showEditForm) {
                renderOnlyEditRow = true;
                break;
            }
        }

        return (
            <tbody>
            {renderOnlyEditRow ?
                <Row record={records[index]}
                     index={index}
                     buttonsEditAndDeleteDisable={true}
                /> :
                this.renderRows(records)}
            </tbody>
        );
    }
}

Rows.propTypes = {
    showEditForm: PropTypes.func,
    deleteRecord: PropTypes.func,
    records: PropTypes.array
};

export default Rows;