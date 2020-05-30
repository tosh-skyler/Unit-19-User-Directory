import React from 'react';
import EmployeeList from '../EmployeeList';
import Search from '../Search';

const Main = () => {
	return (
        <div className="main">
            <Search />
            <EmployeeList />
        </div>
	);
};

export default Main;