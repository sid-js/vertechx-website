import React from 'react';
import DepartmentSidebarItem from './DepartmentSidebarItem';
import deparments from '@/constants/departments';

function DepartmentFilterSidebar({ selected = '', onDepartmentChange }) {
  const handleClick = (event) => {
    const departmentId = event.currentTarget.getAttribute('data-department-id');
    onDepartmentChange(departmentId);
  };
  return (
    <div className='w-full hidden md:flex basis-1/3 h-fit  flex-col gap-3 bg-white text-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-6'>
      <h2 className='text-xl font-semibold'>Deparments</h2>
      {deparments.map((department, index) => (
        <DepartmentSidebarItem
          data-department-id={department.id}
          department={department}
          key={index}
          selected={selected}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default DepartmentFilterSidebar;
