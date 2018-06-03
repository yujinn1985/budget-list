import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import Heading from '../components/Heading';
import Rows from '../components/Rows';
import {deleteRecord, showEditForm, sortRecords} from '../actions';

class TableRows extends Component {
    render() {
        return (
            <div>
                <table>
                    <Heading records={this.props.records} sortRecords={this.props.sortRecords}
                             sortOrder={this.props.sortOrder}/>
                    <Rows records={this.props.records} showEditForm={this.props.showEditForm}
                          deleteRecord={this.props.deleteRecord}/>
                </table>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        records: state.records,
        sortOrder: state.sortOrder
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sortRecords: bindActionCreators(sortRecords, dispatch),
        showEditForm: bindActionCreators(showEditForm, dispatch),
        deleteRecord: bindActionCreators(deleteRecord, dispatch)
    }
};

TableRows.propTypes = {
    sortRecords: PropTypes.func,
    showEditForm: PropTypes.func,
    deleteRecord: PropTypes.func,
    records: PropTypes.array,
    sortOrder: PropTypes.object

};

export default connect(mapStateToProps, mapDispatchToProps)(TableRows);