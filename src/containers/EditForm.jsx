import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {editRecord, showEditForm} from '../actions';
import {calculatePercentage} from '../util/calculator';

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.renderEditForm = this.renderEditForm.bind(this);
    }

    validateInputField(value) {
        let validate = false;
        if (value < 0 || value > 100000000) {
            document.getElementById("editCostMessage").innerHTML = "Value must be greater than 0 and less than 100 000 000.";
            validate = true;
        }
        return validate;
    }

    renderEditForm(record, index) {

        const salary = this.props.salary;
        const editRecord = this.props.editRecord;
        const showEditForm = this.props.showEditForm;

        return (
            <div className="Edit_form">
                <form onSubmit={event => {
                    event.preventDefault();
                    const value = event.target[1].value;
                    if (this.validateInputField(value)) return;
                    const cost = Number.parseFloat(value);
                    editRecord(
                        event.target[0].value,
                        cost,
                        calculatePercentage(salary, event.target[1].value),
                        event.target[2].value,
                        index
                    );
                }}>
                    <p><strong>Please fill out the form below to edit the expense...</strong></p>
                    <label htmlFor="name">Name</label>
                    <textarea style={{height: "100px"}} className="Edit_textarea" name="name" defaultValue={record.name}
                              required/>
                    <label htmlFor="cost">Cost</label><br/>
                    <input className="Edit_input" type="number" name="cost" step="0.01" min="0" max="100000000"
                           defaultValue={record.cost} required/><br/>
                    <p id="editCostMessage" style={{color: "red"}}></p>
                    <label htmlFor="group">Group</label><br/>
                    <select className="Edit_select" name="group" defaultValue={record.group}>
                        <option value="Traveling">Traveling</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Meal">Meal</option>
                        <option value="Tickets">Tickets</option>
                    </select><br/>
                    <button className="Edit_button" type="submit">OK</button>
                    <button className="Edit_button"
                            type="button"
                            onClick={() => {
                                showEditForm(!record.showEditForm, index)
                            }}
                    >Cancel
                    </button>
                </form>
            </div>
        );
    }

    render() {
        const records = this.props.records;
        let render = false;
        let record;
        let index;

        for (index = 0; index < records.length; index++) {
            if (records[index].showEditForm) {
                render = true;
                record = records[index];
                break;
            }
        }

        return (
            render ? this.renderEditForm(record, index) : null
        );
    }
}

const mapStateToProps = state => {
    return {
        salary: state.salary,
        records: state.records
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showEditForm: bindActionCreators(showEditForm, dispatch),
        editRecord: bindActionCreators(editRecord, dispatch)
    }
};

EditForm.propTypes = {
    showEditForm: PropTypes.func,
    editRecord: PropTypes.func,
    records: PropTypes.array,
    salary: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);