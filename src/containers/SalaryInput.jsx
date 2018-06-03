import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {changeSalary} from '../actions';
import {calculatePercentsOfEachRecord} from '../util/calculator';

class SalaryInput extends Component {

    validateInputField(value) {
        let validate = false;
        if (value < 0 || value > 100000000) {
            document.getElementById("salaryMessage").innerHTML = "Value must be greater than 0 and less than 100 000 000.";
            validate = true;
        }
        return validate;
    }

    render() {
        const salary = this.props.salary;

        return (
            <div>
                <h1>Budget</h1>
                <h2>Your salary is: {salary}</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    const value = event.target[0].value;
                    if (this.validateInputField(value)) return;
                    const newSalary = Number.parseFloat(value);
                    const allPercents = calculatePercentsOfEachRecord(newSalary, this.props.records);
                    this.props.changeSalary(newSalary, allPercents);
                    document.getElementById("newSalary").value = "";
                }}>
                    <label htmlFor="salary">Fill out the field below to change your salary:</label><br/>
                    <input id="newSalary" className="Salary_input" type="number" step="0.01" min="0" max="100000000"
                           name="salary" required/>
                    <input className="Salary_submit" type="submit" value="OK"/><br/>
                    <p id="salaryMessage" style={{color: "red"}}></p>
                </form>
            </div>
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
        changeSalary: bindActionCreators(changeSalary, dispatch)
    }
};

SalaryInput.propTypes = {
    changeSalary: PropTypes.func,
    salary: PropTypes.number,
    records: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryInput);
