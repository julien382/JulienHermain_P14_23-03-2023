import './CurrentEmployees.css'

import { Link } from "react-router-dom";

const CurrentEmployees = () => {


    return (
        <div className='currentEmployees'>
            <h1>Current Employees</h1>

            {/* à remplacer par un composant qui contient une tableau "plugin" */}
            <table id="employee-table" class="display"></table>

            <Link to="/">Home</Link>
        </div>
    )
}

export default CurrentEmployees