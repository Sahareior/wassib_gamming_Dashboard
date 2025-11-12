import React, {useState} from 'react';
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

// Modal Component
const CreateQuizModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md transform transition-all">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                               School Name
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                                <option>Select a school</option>
                                <option>Mathematics</option>
                                <option>Science</option>
                                <option>English</option>
                                <option>History</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Course
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                placeholder="Enter quiz title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                rows="3"
                                placeholder="Enter quiz description"
                            />
                        </div>

                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex gap-3 p-6 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        className="flex-1 py-3 px-4 bg-yellow-400 text-gray-900 font-medium rounded-xl hover:bg-yellow-500 transition-all duration-200"
                    >
                        Create Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

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
    const [open, setOpen] = useState(false);
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

    const title = "Recent Students"
    const subtitle = "Manage and view all students enrolled in your platform"

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Headers
                    title={"Application Tracker"}
                    subHeader={"Overview of your educational metrics and applications"}
                />
                <button
                    onClick={() => setOpen(true)}
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

            {/* Modal */}
            <CreateQuizModal
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
};

export default ApplicationTracker;