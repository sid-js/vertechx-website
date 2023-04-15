import React from 'react';
import DepartmentSidebarItem from './DepartmentSidebarItem';
const deparments = [
  {
    name: 'All',
    id: '',
  },
  {
    name: 'Computer Science',
    id: 'clg0c7igq000494xw4v4vjfif',
  },
  {
    name: 'Electronics & Communication',
    id: 'clghw9sis0002jj085k1pmlm2',
  },
  {
    name: 'Mechanical',
    id: 'clghwa0b70004jj087r2enlb2',
  },
  {
    name: 'Science Humanities',
    id: 'clghwaltw0006jj08g4w8p408',
  },
  {
    name: 'Information Science',
    id: 'clghwaz2h0008jj08u2mkfi9o',
  },
  {
    name: 'Aeronautical & Aerospace',
    id: 'clghwbi84000ajj08sz57ub0e',
  },
  {
    name: 'Chemical',
    id: 'clghwbr7o000cjj08byfykcg4',
  },
  {
    name: 'Civil',
    id: 'clghwc5ex000ejj08qc36ncu1',
  },
  {
    name: 'Electrical & Electronics',
    id: 'clghwd5km000gjj089ndxj2ry',
  },
];
function DepartmentFilterSidebar({ selected = '', onDepartmentChange }) {
  const handleClick = (event) => {
    const departmentId = event.currentTarget.getAttribute('data-department-id');
    onDepartmentChange(departmentId);
  };
  return (
    <div className='w-full hidden md:flex basis-1/3 h-fit  flex-col gap-3 bg-white text-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-6'>
      <h2 className='text-xl font-semibold'>Deparments</h2>
      {deparments.map((department) => (
        <DepartmentSidebarItem
          data-department-id={department.id}
          department={department}
          selected={selected}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default DepartmentFilterSidebar;
