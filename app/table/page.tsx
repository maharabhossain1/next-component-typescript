import React from 'react';
import { DataTable } from './components/data-table';
import { columns } from './components/columns';

const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    programName: 'Web Development Bootcamp',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    status: 'approved',
    action: 'invite link'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    programName: 'Data Science Certification',
    startDate: '2024-02-15',
    endDate: '2024-08-15',
    status: 'current',
    action: ''
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    programName: 'UX/UI Design Course',
    startDate: '2024-03-10',
    endDate: '2024-09-10',
    status: 'complete',
    action: ''
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob@example.com',
    programName: 'Digital Marketing Masterclass',
    startDate: '2024-04-20',
    endDate: '2024-10-20',
    status: 'approved',
    action: 'invite link'
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily@example.com',
    programName: 'Project Management Training',
    startDate: '2024-05-05',
    endDate: '2024-11-05',
    status: 'current',
    action: ''
  },
  {
    id: 6,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    programName: 'Cybersecurity Essentials',
    startDate: '2024-06-10',
    endDate: '2024-12-10',
    status: 'complete',
    action: ''
  },
  {
    id: 7,
    name: 'Sarah White',
    email: 'sarah@example.com',
    programName: 'Artificial Intelligence Fundamentals',
    startDate: '2024-07-15',
    endDate: '2025-01-15',
    status: 'approved',
    action: 'invite link'
  },
  {
    id: 8,
    name: 'David Wilson',
    email: 'david@example.com',
    programName: 'Mobile App Development Bootcamp',
    startDate: '2024-08-20',
    endDate: '2025-02-20',
    status: 'current',
    action: ''
  },
  {
    id: 9,
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    programName: 'Graphic Design Workshop',
    startDate: '2024-09-25',
    endDate: '2025-03-25',
    status: 'complete',
    action: ''
  },
  {
    id: 10,
    name: 'James Taylor',
    email: 'james@example.com',
    programName: 'Machine Learning Specialization',
    startDate: '2024-10-30',
    endDate: '2025-04-30',
    status: 'approved',
    action: 'invite link'
  },
  {
    id: 11,
    name: 'Sophia Anderson',
    email: 'sophia@example.com',
    programName: 'Frontend Web Development Course',
    startDate: '2024-11-05',
    endDate: '2025-05-05',
    status: 'current',
    action: ''
  },
  {
    id: 12,
    name: 'William Thompson',
    email: 'william@example.com',
    programName: 'Agile Project Management',
    startDate: '2024-12-10',
    endDate: '2025-06-10',
    status: 'complete',
    action: ''
  },
  {
    id: 13,
    name: 'Emma Garcia',
    email: 'emma@example.com',
    programName: 'UI Design Fundamentals',
    startDate: '2025-01-15',
    endDate: '2025-07-15',
    status: 'approved',
    action: 'invite link'
  },
  {
    id: 14,
    name: 'Alexander Hernandez',
    email: 'alexander@example.com',
    programName: 'Blockchain Essentials',
    startDate: '2025-02-20',
    endDate: '2025-08-20',
    status: 'current',
    action: ''
  },
  {
    id: 15,
    name: 'Mia Perez',
    email: 'mia@example.com',
    programName: 'Digital Photography Basics',
    startDate: '2025-03-25',
    endDate: '2025-09-25',
    status: 'complete',
    action: ''
  }
];

console.log(dummyData);

const CustomTable = () => {
  return (
    <div className="bg-background m-4 overflow-hidden rounded-[0.5rem] border shadow-md md:shadow-xl">
      <div className="flex h-full flex-1 flex-col space-y-8 p-8">
        <DataTable data={dummyData} columns={columns} />
      </div>
    </div>
  );
};

export default CustomTable;
