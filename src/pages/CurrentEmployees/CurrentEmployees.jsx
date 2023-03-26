import './CurrentEmployees.css'
import { Table } from 'antd';

const CurrentEmployees = () => {

    // récupére la data du localStorage
    const storedData = JSON.parse(localStorage.getItem('storedData') || '{}');
    const formData = storedData.dataWithKeys;
    console.log(formData);

    /*const dataSource = [
        {
            key: '1',
            firstName: 'Emma',
            lastName: 'Jones',
            startDate: '2019-06-15',
            departement: 'Sales',
            dateOfBirth: '1985-02-12',
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
        },
        {
            key: '2',
            firstName: 'Lucas',
            lastName: 'Brown',
            startDate: '2020-09-01',
            departement: 'Marketing',
            dateOfBirth: '1992-07-23',
            street: '456 Elm St',
            city: 'San Francisco',
            state: 'CA',
            zipCode: '94107',
        }
      ];*/

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
            <Table dataSource={formData} columns={columns} />
        </div>
    )
}

export default CurrentEmployees