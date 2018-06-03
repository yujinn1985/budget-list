import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {addRecord} from '../actions';
import {calculatePercentage} from '../util/calculator';

class NewRecord extends Component {

    validateInputField(value) {
        let validate = false;
        if (value < 0 || value > 100000000) {
            document.getElementById("newCostMessage").innerHTML = "Value must be greater than 0 and less than 100 000 000.";
            validate = true;
        }
        return validate;
    }

    clearInputFields() {
        document.getElementById("txtRecord").value = "";
        document.getElementById("numRecord").value = "";
        document.getElementById("groupRecord").value = "Traveling";
    }

    render() {
        const salary = this.props.salary;
        const addRecord = this.props.addRecord;

        return (
            <div>
                <form onSubmit={event => {
                    event.preventDefault();
                    const value = event.target[1].value;
                    if (this.validateInputField(value)) return;
                    document.getElementById("modalWindow").style.display = "none";
                    const cost = Number.parseFloat(value);
                    addRecord(
                        event.target[0].value,
                        cost,
                        calculatePercentage(salary, event.target[1].value),
                        event.target[2].value
                    );
                    this.clearInputFields();
                }}>
                    <label htmlFor="name">Name:</label><br/>
                    <textarea id="txtRecord" className="Modal_textarea" name="name" placeholder="Enter new expense..."
                              required/><br/>
                    <label htmlFor="cost">Cost:</label><br/>
                    <input id="numRecord" className="Modal_input" type="number"
                           name="cost" step="0.01" min="0" max="100000000"
                           placeholder="Enter cost of the expense..." required/><br/>
                    <p id="newCostMessage" style={{color: "red"}}></p>
                    <label htmlFor="group">Group:</label><br/>
                    <select id="groupRecord" className="Modal_select" name="group" defaultValue="Traveling">
                        <option value="Traveling">Traveling</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Meal">Meal</option>
                        <option value="Tickets">Tickets</option>
                    </select>
                    <input className="Modal_submit" type="submit" value="Ok"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        salary: state.salary
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addRecord: bindActionCreators(addRecord, dispatch)
    }
};

NewRecord.propTypes = {
    addRecord: PropTypes.func,
    salary: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecord);