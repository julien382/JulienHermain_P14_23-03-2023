import './CurrentEmployees.css'
import { Table } from 'antd';

const CurrentEmployees = () => {

    const dataSource = [
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
      ];

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
            dataIndex: 'departement',
            key: 'departement',
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
            <h1>Current Employees</h1>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default CurrentEmployees