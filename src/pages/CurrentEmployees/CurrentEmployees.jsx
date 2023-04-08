import { useSelector } from 'react-redux';
import './CurrentEmployees.css'
import { Table } from 'antd';

const CurrentEmployees = () => {
    const employees = useSelector(state => state.employees);
    console.log(employees && employees.length > 0 ? employees : "No employees found");
    console.log(employees);

    // récupére la data du localStorage
    const storedData = JSON.parse(localStorage.getItem('storedData') || '{}');
    const formData = storedData.dataWithKeys;
    console.log(formData);

    // nombre d'éléments par page
    const pagination = {
        pageSize: 8 
    };
    
    // initialisation des columns
    const columns = [
    {
        title: 'FirstName',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'LastName',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'Departement',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth',
        key: 'dateOfBirth',
    },
    {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
    },
    {
        title: 'Zip Code',
        dataIndex: 'zipCode',
        key: 'zipCode',
    },
    ];    
      
    return (
        <div className='currentEmployees'>
            <h1 className='title'>Current Employees</h1>
            <Table dataSource={formData} columns={columns} pagination={pagination}/>
            {employees == null ? (
            <tr>
              <td colSpan="9">No employees found</td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>1
                <td>{employee.lastName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))
          )}
        </div>
    )
}

export default CurrentEmployees