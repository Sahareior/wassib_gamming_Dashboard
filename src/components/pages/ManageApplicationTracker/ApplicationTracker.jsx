import React from 'react';
import Headers from "../../Reusable/Headers.jsx";
import {FaPlus, FaUsers, FaBook, FaTasks, FaFileAlt} from "react-icons/fa";
import CommonTable from "../../Reusable/CommonTable.jsx";

// Demo data for the cards
const cardsData = [
    {
        id: 1,
        name: "Total Students",
        number: "1,284",
        details: "Across all courses",
        icon: <FaUsers className="text-blue-500" />,
        color: "text-blue-500"
    },
    {
        id: 2,
        name: "Active Courses",
        number: "24",
        details: "Currently running",
        icon: <FaBook className="text-green-500" />,
        color: "text-green-500"
    },
    {
        id: 3,
        name: "Pending Tasks",
        number: "18",
        details: "Require attention",
        icon: <FaTasks className="text-yellow-500" />,
        color: "text-yellow-500"
    },
    {
        id: 4,
        name: "Total Applications",
        number: "342",
        details: "This semester",
        icon: <FaFileAlt className="text-purple-500" />,
        color: "text-purple-500"
    }
];

const Cards = ({ name, icon, number, details }) => {
    return (
        <div className='bg-white p-6 py-5 h-[200px] flex flex-col justify-between rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-gray-600 text-sm font-medium popreg'>{name}</p>
                <div className='text-lg'>
                    {icon}
                </div>
            </div>
            <div>
                <p className='text-2xl font-bold text-gray-800 popmed mb-1'>{number}</p>
                <p className='text-sm text-gray-500 popreg'>{details}</p>
            </div>
        </div>
    );
};

const ApplicationTracker = () => {
    const sampleData = [
        {
            student: "Sarah Johnson",
            email: "sarah.j@email.com",
            grade: "10th",
            courses: 5,
            status: "Active",
        },
        {
            student: "Michael Chen",
            email: "michael.c@email.com",
            grade: "11th",
            courses: 6,
            status: "Active",
        },
        {
            student: "Emma Williams",
            email: "emma.w@email.com",
            grade: "9th",
            courses: 4,
            status: "Inactive",
        },
        {
            student: "James Davis",
            email: "james.d@email.com",
            grade: "12th",
            courses: 7,
            status: "Active",
        },
        {
            student: "Olivia Martinez",
            email: "olivia.m@email.com",
            grade: "10th",
            courses: 5,
            status: "Active",
        },
    ];

    const columns = [
        { header: "Student", accessor: "student" },
        { header: "Email", accessor: "email" },
        { header: "Grade", accessor: "grade" },
        { header: "Courses", accessor: "courses" },
        { header: "Status", accessor: "status" },
        { header: "Actions", accessor: "actions" },
    ];

    const filterOptions = ["All", "9th", "10th", "11th", "12th"];

    const title="Recent Students"
    const subtitle="Manage and view all students enrolled in your platform"
    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Headers
                    title={"Application Tracker"}
                    subHeader={"Overview of your educational metrics and applications"}
                />
                <button
                    className="flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:scale-105"
                >
                    <FaPlus className="text-sm" />
                    Create New Quiz
                </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardsData.map((card) => (
                    <Cards
                        key={card.id}
                        name={card.name}
                        icon={card.icon}
                        number={card.number}
                        details={card.details}
                    />
                ))}
            </div>

            <div className='bg-white mt-8 p-5 border-2 border-[#0000001A] rounded-2xl'>
                <div className='pb-4'>
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
                <CommonTable

                    columns={columns}
                    data={sampleData}
                    filterOptions={filterOptions}
                />
            </div>
        </div>
    );
};

export default ApplicationTracker;