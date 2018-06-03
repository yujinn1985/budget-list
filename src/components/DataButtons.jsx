import React, {Component} from 'react';

import NewRecord from '../containers/NewRecord';
import SaveData from '../containers/SaveData';

class DataButtons extends Component {

    showModal() {
        const modalWindow = document.getElementById("modalWindow");
        modalWindow.style.display = "block";
    }

    closeModal() {
        const modalWindow = document.getElementById("modalWindow");
        modalWindow.style.display = "none";
    }

    clearInputFields() {
        document.getElementById("txtRecord").value = "";
        document.getElementById("numRecord").value = "";
        document.getElementById("groupRecord").value = "Traveling";
    }

    render() {
        return (
            <div>
                <label htmlFor="addRecord">Click the button below to add new expense...</label><br/>
                <button className="Button_add_record" name="addRecord" onClick={() => {
                    this.showModal();
                }}>Add Record
                </button>
                <SaveData/>
                <div id="modalWindow" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => {
                            this.closeModal();
                            this.clearInputFields();
                        }}>&times;</span>
                        <NewRecord/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataButtons;