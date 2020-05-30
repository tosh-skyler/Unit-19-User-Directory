import React from 'react';
import Table from 'react-bootstrap/Table';

const EmployeeList = (props) => (
		<Table striped bordered hover className="table-employees">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Age</th>
					<th>Position</th>
				</tr>
			</thead>
			<tbody>{/* User Information Goes Here */}</tbody>
		</Table>
);

export default EmployeeList;
