import React, { useState, useEffect } from 'react';

function DashboardCard01() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 100;
    const duration = 2000; 
    const intervalTime = duration / target; 
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5 mb-3">
        <header className="flex justify-between items-start mb-0">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Total Case Registered</h2>
        </header>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{count}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
