import './CreateEmployee.css'
import { useState } from 'react';
import { states } from '../../data/states.js';

const CreateEmployee = () => {
    
    // modal
    const [isOpen, setIsOpen] = useState(false);
    // states location
    const [selectedState, setSelectedState] = useState("");
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
    };

    // récupére les datas du formulaire
    const saveEmployee = () => {
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');

        // mets les datas dans un tableau d'objets
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        setIsOpen(!isOpen);

        // rajout d'une key
        const dataWithKeys = employees.map((item, index) => {
            return { ...item, key: index };
        });

        // envoie la data dans le localStorage
        const storedData = JSON.parse(localStorage.getItem('storedData') || '{}');
        localStorage.setItem('storedData', JSON.stringify({
            ...storedData,
            dataWithKeys
        }));
    };

    // fermeture de la modal
    const handleClose = () => {
        setIsOpen(false);
    };
    

    return (
        <div className='CreateEmployee'>
            <div className="container">
                <h1 className='title'>Create Employee</h1>

                <form className='form' action="#" id="create-employee">
                    <div className='row'>
                        <div className='partName'>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" />

                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" />

                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input id="date-of-birth" type="text" />

                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" type="text" />
                        </div>
                        <div className='partAddress'>
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" />

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />

                            <label htmlFor="state">State</label>
                            <select name="state" id="state" value={selectedState} onChange={handleStateChange}>
                                <option value="">Select a state</option>
                                {states().map((state) => (
                                    <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='partDepartment'>
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                </form>
                <button className='save' onClick={saveEmployee}>Save</button>
            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}>X</span>
                        <p>Employee Created!</p>
                    </div>
                </div>
            )}  
        </div>
    )
}

export default CreateEmployee