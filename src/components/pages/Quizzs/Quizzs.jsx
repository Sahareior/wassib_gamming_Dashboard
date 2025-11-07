import React, {useState} from 'react';
import Headers from "../../Reusable/Headers.jsx";
import { FaPerson } from "react-icons/fa6";
import {FaEdit, FaEye, FaPlus, FaTrash} from "react-icons/fa";
import CommonModal from "../../Reusable/CommonModal.jsx";

const QuizCards = ({ title, subject, status, questions, duration, attempts,setView }) => {
    const statusColors = {
        Active: "bg-green-200 text-green-800",
        Inactive: "bg-red-200 text-red-800",
        Upcoming: "bg-yellow-200 text-yellow-800"
    };

    return (
        <div className="p-5 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-lg font-semibold text-gray-800">{title}</p>
                    <p className="text-sm text-gray-500">{subject}</p>
                </div>
                <p className={`px-4 py-1 rounded-2xl text-sm font-medium ${statusColors[status] || "bg-gray-200 text-gray-700"}`}>
                    {status}
                </p>
            </div>

            {/* Middle Section */}
            <div className=" mb-5">
                <div className='flex justify-between items-center mb-4'>
                    <p className="text-gray-500 text-sm">Questions</p>
                    <p className="text-gray-900 font-semibold">{questions}</p>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="text-gray-900 font-semibold">{duration}</p>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <p className="text-gray-500 text-sm">Attempts</p>
                    <p className="text-gray-900 font-semibold">{attempts}</p>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center gap-4">
                <button onClick={() => setView(true)} className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
                    <FaEye className="text-gray-600" /> View
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
                    <FaEdit className="text-gray-600" /> Edit
                </button>
                <button className='flex items-center justify-center  border border-gray-200 rounded-full p-4 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 text-gray-500 group-hover:shadow-sm'>
                    <FaTrash className="text-xs" />
                </button>
            </div>
        </div>
    );
};

const Quizzs = () => {
    const demoData = [
        { title: "Mathematics - Chapter 5", subject: "Advanced Mathematics", status: "Active", questions: 20, duration: "30 min", attempts: 10 },
        { title: "Physics - Mechanics", subject: "Fundamentals of Motion", status: "Upcoming", questions: 15, duration: "25 min", attempts: 8 },
        { title: "Chemistry - Organic Reactions", subject: "Organic Chemistry", status: "Inactive", questions: 25, duration: "40 min", attempts: 5 },
    ];
    const [view,setView] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSave = (data) => {
        console.log("Saved data:", data);
        setOpen(false);
    };

    const courseFields = [
        { name: "name", label: "Quiz Title", type: "text", placeholder: "e.g., Mathematics - Chapter 5" },
             {
            name: "Course",
            label: "Select Course",
            type: "select",
            options: [
                { label: "6th Grade", value: "6" },
                { label: "7th Grade", value: "7" },
                { label: "8th Grade", value: "8" },
                { label: "9th Grade", value: "9" },
                { label: "10th Grade", value: "10" },
                { label: "11th Grade", value: "11" },
                { label: "12th Grade", value: "12" }
            ],
            placeholder: "Select grade level"
        },
        { name: "Number of Questions", label: "Number of Questions", type: "text", placeholder: "10" },
        { name: "Duration (minutes)", label: "Duration (minutes)", type: "text", placeholder: "10" },

        {
            name: "Course",
            label: "Status",
            type: "select",
            options: [
                { label: "6th Grade", value: "6" },
                { label: "7th Grade", value: "7" },
                { label: "8th Grade", value: "8" },
                { label: "9th Grade", value: "9" },
                { label: "10th Grade", value: "10" },
                { label: "11th Grade", value: "11" },
                { label: "12th Grade", value: "12" }
            ],
            placeholder: "Draft"
        },

    ];



    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Headers title={"Quizzes"} subHeader={"Manage all quizzes available for your students"} />
                <button
                    onClick={() => setOpen(!open)}
                    className="flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:scale-105"
                >
                    <FaPlus className="text-sm" />
                    Create New Quiz
                </button>
            </div>

            {/* Quiz Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoData.map((quiz, index) => (
                    <QuizCards setView ={setView} key={index} {...quiz} />
                ))}
            </div>
            <CommonModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onSave={handleSave}
                title="Create New Quiz"
                fields={courseFields}

            />
        </div>
    );
};

export default Quizzs;
