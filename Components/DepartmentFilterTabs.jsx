import { Tabs, Tab } from 'react-tabs-scrollable';
import 'react-tabs-scrollable/dist/rts.css';

import React, { useEffect, useState } from 'react';
import deparments from '@/constants/departments';

function DepartmentFilterTabs({ selected = '', onDepartmentChange }) {
  const handleClick = (event) => {
    const departmentId = event.currentTarget.getAttribute('data-department-id');
    onDepartmentChange(departmentId);
  };
  console.log('selected', selected);
  const [selectedIndex, setsSelectedIndex] = useState(0);
  useEffect(() => {
    setsSelectedIndex(
      deparments.findIndex((department) => department.id === selected)
    );
  }, [selected]);
  return (
    <div className='w-full md:hidden'>
      <Tabs
        showTabsScroll={false}
        activeTab={selectedIndex}
        onTabClick={handleClick}
      >
        {/* generating an array to loop through it  */}
        {deparments.map((department) => (
          <Tab key={department.index} data-department-id={department.id}>
            <span className='text-white'>{department.name}</span>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default DepartmentFilterTabs;
