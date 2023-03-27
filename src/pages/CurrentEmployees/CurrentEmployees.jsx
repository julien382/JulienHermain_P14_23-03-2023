import './CurrentEmployees.css'
import { Table } from 'antd';

const CurrentEmployees = () => {

    // récupére la data du localStorage
    const storedData = JSON.parse(localStorage.getItem('storedData') || '{}');
    const formData = storedData.dataWithKeys;

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
        </div>
    )
}

export default CurrentEmployees