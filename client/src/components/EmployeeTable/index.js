import React from 'react';
import Table from 'react-bootstrap/Table';

const useSortableData = (users, config = null) => {
	const [ sortConfig, setSortConfig ] = React.useState(config);

	const sortedUsers = React.useMemo(
		() => {
			let sortableUsers = [ ...users ];
			if (sortConfig !== null) {
				sortableUsers.sort((a, b) => {
					if (a[sortConfig.key] < b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? -1 : 1;
					}
					if (a[sortConfig.key] > b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? 1 : -1;
					}
					return 0;
				});
			}
			return sortableUsers;
		},
		[ users, sortConfig ]
	);

	const requestSort = (key) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return { users: sortedUsers, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
	const { users, requestSort, sortConfig } = useSortableData(props.users);
	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};
	return (
		<Table striped bordered hover>
			<caption>Employees</caption>
			<thead>
				<tr>
					<th>
						<button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
							Name
						</button>
					</th>
					<th>
						<button type="button" onClick={() => requestSort('age')} className={getClassNamesFor('age')}>
							Age
						</button>
					</th>
					<th>
						<button
							type="button"
							onClick={() => requestSort('position')}
							className={getClassNamesFor('position')}
						>
							Position
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.age}</td>
						<td>{user.position}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default function App() {
	return (
		<div className="App">
			<EmployeeTable
				users={[
					{ id: 1, name: "Gracey O' Ryan", age: 22, position: 'Manager' },
					{ id: 2, name: 'Brett Dominguez', age: 21, position: 'Register' },
					{ id: 3, name: 'Inaaya Carty', age: 26, position: 'Fries' },
					{ id: 4, name: 'Katelyn Hibbert', age: 30, position: 'Sandwiches' },
					{ id: 5, name: 'Enid Spooner', age: 20, position: 'Grill' },
					{ id: 6, name: 'Asa Carver', age: 17, position: 'Dishes' },
					{ id: 7, name: 'Jayda Lawrence', age: 32, position: 'Janitor' }
				]}
			/>
		</div>
	);
}
