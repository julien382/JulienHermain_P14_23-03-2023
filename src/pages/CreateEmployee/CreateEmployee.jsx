import './CreateEmployee.css'
import { useState } from 'react';
import { states } from '../../data/states.js';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
//import Modal from '../Modal/Modal';
import Modal from "julien-easy-modal";

const CreateEmployee = () => { 
    // error message
    const [errorMessage, setErrorMessage] = useState('');

    // handle Modal
    const [isOpen, setIsOpen] = useState(false)

    // states location
    const [selectedState, setSelectedState] = useState("");
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
    };
    // calendar maxDate
    const maxDate = new Date(); // Récupère la date actuelle
    // calendar birthDate
    const [selectedBirthDate, setSelectedBirthDate] = useState(null);
    const [formattedBirthDate, setFormattedBirthDate] = useState('');
    const handleBirthDateSelect = (date) => {
        setSelectedBirthDate(date); // Met à jour l'état avec la date sélectionnée
        const formatted = format(date, 'MM/dd/yyyy'); // formate la date dans le bon format
        setFormattedBirthDate(formatted); 
    };
    // calendar startDate
    const [selectedDate, setSelectedDate] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
    const handleDateSelect = (date) => {
        setSelectedDate(date); // Met à jour l'état avec la date sélectionnée
        const formatted = format(date, 'MM/dd/yyyy'); // formate la date dans le bon format
        setFormattedDate(formatted); 
    };
    // regex letter 
    const isLetter = (event) => {
        const regex = new RegExp("^[a-zA-Z]+$");
        const key = String.fromCharCode(event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
        }
    }
    // regex number 
    const isNumber = (event) => {
        const regex = new RegExp("^[0-9]+$");
        const key = String.fromCharCode(event.charCode);
        const value = event.target.value + key;
        if (!regex.test(key) || value.length > 6) {
            event.preventDefault();
        }
    }
    //const [employees, setEmployees] = useState([]);
    // récupére les datas du formulaire
    const saveEmployee = (event) => {
        event.preventDefault();

        // TO REMOOOOOVE :D
        //setIsOpen(true);
        //return;

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = formattedBirthDate;
        const startDate = formattedDate;
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');
        // mets les datas dans un tableau d'objets
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        if ( // si il y a une data ca envoie le formulaire, sinon rien
            firstName.value &&
            lastName.value &&
            dateOfBirth &&
            startDate &&
            department.value &&
            street.value &&
            city.value &&
            state.value &&
            zipCode.value
          ) 
        {
            const employee = {
                firstName: firstName.value,
                lastName: lastName.value,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                department: department.value,
                street: street.value,
                city: city.value,
                state: state.value,
                zipCode: zipCode.value
            };
/*
            setEmployees([...employees, employee]);

            setIsOpen(true);

            setErrorMessage('');

            // Réinitialiser le formulaire
            document.getElementById("create-employee").reset();
*/
            employees.push(employee);
            localStorage.setItem('employees', JSON.stringify(employees));
            setIsOpen(true);
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
            console.log(storedData);
            setErrorMessage(''); // Réinitialiser le message d'erreur
            // Réinitialiser le formulaire
            document.getElementById("create-employee").reset();
        }
        else{
            setErrorMessage('Veuillez remplir tous les champs obligatoires');
        }
    };
    

    return (
        <div className='CreateEmployee'>
            <div className="container">
                <h1 className='title'>Create Employee</h1>

                <form className='form' action="#" id="create-employee">
                    <div className='row'>
                        <div className='partName'>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" onKeyPress={isLetter}/>

                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" onKeyPress={isLetter}/>

                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <DatePicker
                                selected={selectedBirthDate}
                                onChange={handleBirthDateSelect}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                showMonthDropdown
                                dateFormat="MM/dd/yyyy"
                                maxDate={maxDate}
                            />

                            <label htmlFor="start-date">Start Date</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateSelect}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                showMonthDropdown
                                dateFormat="MM/dd/yyyy"
                                maxDate={maxDate}
                            />
                        </div>
                        <div className='partAddress'>
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" onKeyPress={isLetter}/>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" onKeyPress={isNumber}/>

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
                    {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
                </form>
                <button className='save' onClick={saveEmployee}>Save</button>
            </div>
            {/*<Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                <p>Texte personalisé</p>
            </Modal>*/}
            <Modal setIsOpen={setIsOpen} isOpen={isOpen} fadeDuration={500} fadeDelay={10}>
                <p>salut les gens</p>
                <p>salut les gens</p>
                <p>salut les gens</p>
                <p>salut les gens</p>
                <p>salut les gens</p>
                <button className="close-modal" onClick={()=>{setIsOpen(false)}}>fermer</button>
            </Modal>
        </div>
    )
}

export default CreateEmployee