import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class SaveData extends Component {

    constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);
    }

    saveData() {
        const records = this.props.records;
        let recordsToSave = records.slice();
        let confirmation = false;
        if (localStorage.getItem('records') !== null) {
            confirmation = window.confirm('Local storage contains data with key "records". These data may be lost. Do you want to proceed?');
        }
        if (confirmation) {
            const recordsFromLocalStorage = JSON.parse(localStorage.getItem('records'));
            if (Array.isArray(recordsFromLocalStorage)) {
                recordsToSave = recordsToSave.concat(recordsFromLocalStorage);
            }
        } else {
            return;
        }
        localStorage.setItem('records', JSON.stringify(recordsToSave));
        window.alert('Data have been saved');
    }


    render() {
        return (
            <button className="Save_button"
                    onClick={() => {
                        this.saveData()
                    }}
            >Save All The Records
            </button>
        );
    }
}

SaveData.propTypes = {
    records: PropTypes.array
};

const mapStateToProps = state => {
    return {
        records: state.records
    }
};

export default connect(mapStateToProps)(SaveData);