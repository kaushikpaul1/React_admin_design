import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard03() {


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-0">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Total Pending Case</h2>
       
        </header>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">15</div>
        </div>
      </div>
      
    </div>
  );
}

export default DashboardCard03;
