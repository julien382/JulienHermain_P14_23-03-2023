import './CreateEmployee.css'
import { useState } from 'react';
import { states } from '../../data/states.js';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../services/store';
//import Modal from '../Modal/Modal';
import Modal from "julien-easy-modal";

const CreateEmployee = () => { 
    const dispatch = useDispatch();
    // datas
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    // error message
    const [errorMessage, setErrorMessage] = useState('');
    // handle Modal
    const [isOpen, setIsOpen] = useState(false)

    // set a calendar maxDate
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

    // récupére les datas du formulaire
    const saveEmployee = (event) => {
        event.preventDefault();

        // TO REMOOOOOVE :D
        //setIsOpen(true);
        //return;

        // mets les datas dans un tableau d'objets
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        if ( // si il y a une data ca envoie le formulaire, sinon rien
            firstName &&
            lastName &&
            formattedBirthDate &&
            formattedDate &&
            department &&
            street &&
            city &&
            state &&
            zipCode
          ) 
        {
            const employee = { // l'objet qui contient les datas
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: formattedBirthDate,
                startDate: formattedDate,
                department: department,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode
            };

            // dispatch the addEmployee action with the new employee object as the payload
            dispatch(addEmployee(employee));
            
            employees.push(employee);
            console.log(employees);
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
                            <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} onKeyPress={isLetter}/>

                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} onKeyPress={isLetter}/>

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
                            <input id="street" type="text" onChange={(e) => setStreet(e.target.value)} />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" onKeyPress={isLetter} onChange={(e) => setCity(e.target.value)} />

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" onKeyPress={isNumber} onChange={(e) => setZipCode(e.target.value)} />

                            <label htmlFor="state">State</label>
                            <select name="state" id="state" onChange={(e) => setState(e.target.value)}>
                                <option value="">Select a state</option>
                                {states().map((state) => (
                                    <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='partDepartment'>
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
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