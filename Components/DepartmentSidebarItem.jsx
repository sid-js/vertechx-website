import React from 'react';

function DepartmentSidebarItem({ department, onClick, selected }) {
  return (
    <div
      className={`${
        selected === department.id
          ? 'bg-purple-400 bg-opacity-100 hover:bg-purple-400'
          : 'bg-white'
      } text-white bg-opacity-5 backdrop-blur-sm border border-gray-700 rounded-lg p-2 hover:bg-slate-700 cursor-pointer hover:scale-105 transition-all duration-300`}
      data-department-id={department.id}
      onClick={onClick}
    >
      {department.name}
    </div>
  );
}

export default DepartmentSidebarItem;
