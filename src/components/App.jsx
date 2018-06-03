import React from 'react';

import EditForm from '../containers/EditForm';
import SalaryInput from '../containers/SalaryInput';
import TableRows from '../containers/TableRows';
import DataButtons from './DataButtons';

function App() {
    return (
        <div id="container">
            <SalaryInput/>
            <DataButtons/>
            <TableRows/>
            <EditForm/>
        </div>
    );
}

export default App;
