import { useSelector } from 'react-redux';
import './CurrentEmployees.css'
import { Table } from 'antd';

const CurrentEmployees = () => {
    const formData = useSelector(state => state);
    console.log(formData && formData.length > 0 ? formData : "No employees found");
    console.log(formData);

    // récupére la data du localStorage
    /*const storedData = JSON.parse(localStorage.getItem('storedData') || '{}');
    const formData = storedData.dataWithKeys;
    console.log(formData);*/

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
            {formData == null ? (
              <p>No formData found</p>
          ) : (
            formData.map((employee, index) => (
              <p key={index}>
                <p>{employee.firstName}</p>1
                <p>{employee.lastName}</p>
                <p>{employee.dateOfBirth}</p>
                <p>{employee.startDate}</p>
                <p>{employee.department}</p>
                <p>{employee.street}</p>
                <p>{employee.city}</p>
                <p>{employee.state}</p>
                <p>{employee.zipCode}</p>
              </p>
            ))
          )}
        </div>
    )
}

export default CurrentEmployees