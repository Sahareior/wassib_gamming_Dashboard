import React, { useState } from 'react';
import Swal from "sweetalert2";
import {FaBuilding, FaCalendar, FaChevronRight, FaEye, FaTrash} from "react-icons/fa";
import Headers from "../../Reusable/Headers.jsx";

// Single Card Component
const SchoolCards = ({ name, type, date, status, onDelete, isSelected, onSelect }) => {
    const statusColor =
        status === "Approved"
            ? "bg-green-200 text-green-800"
            : status === "Rejected"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800";

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete ${name}`,
            icon: "warning",
            iconColor: "#ef4444",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            background: "#ffffff",
            customClass: {
                popup: "rounded-2xl shadow-xl",
                title: "text-gray-800 font-semibold text-xl",
                text: "text-gray-600",
                confirmButton: "rounded-xl px-6 py-2 font-medium",
                cancelButton: "rounded-xl px-6 py-2 font-medium",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: `${name} has been deleted successfully.`,
                    icon: "success",
                    background: "#ffffff",
                    confirmButtonColor: "#10b981",
                    confirmButtonText: "Done",
                    customClass: {
                        popup: "rounded-2xl shadow-xl",
                        title: "text-gray-800 font-semibold text-xl",
                        text: "text-gray-600",
                        confirmButton: "rounded-xl px-6 py-2 font-medium",
                    },
                }).then(() => {
                    onDelete();
                });
            }
        });
    };

    return (
        <div
            className={`w-full bg-white shadow-sm rounded-2xl p-5 border-2 flex flex-col gap-5 hover:shadow-md transition-all duration-200 cursor-pointer ${
                isSelected ? 'border-yellow-500' : 'border-gray-100'
            }`}
            onClick={onSelect}
        >
            {/* Top Section */}
            <div className="flex justify-between items-center">
                <div className="p-3 bg-green-300 rounded-full">
                    <FaBuilding size={26} className="text-gray-700" />
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                    </div>
                </div>
                <p className={`text-sm px-4 py-1 rounded-3xl font-medium ${statusColor}`}>
                    {status}
                </p>
            </div>

            {/* Date */}
            <div className="flex flex-col text-sm text-gray-500 gap-2">
                <div className=''>
                    <p className="text-[16px] font-semibold text-gray-800">{name}</p>
                    <p className="text-sm text-gray-600">{type} School</p>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                    <FaCalendar size={14} />
                    <span>{date}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-3">
                <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
                    <FaEye size={14} className="text-gray-600" /> View
                </button>

                <button
                    onClick={handleDelete}
                    className="flex items-center justify-center border border-gray-200 rounded-full p-3 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 text-gray-500"
                >
                    <FaTrash size={12} />
                </button>
            </div>
        </div>
    );
};

// Parent Component
const ManageSchool = () => {
    const [schools, setSchools] = useState([
        { id: 1, name: "Green Valley High", type: "Boarding", date: "Oct 5, 2025", status: "Approved" },
        { id: 2, name: "Lawton Academy", type: "Law", date: "Sep 25, 2025", status: "Pending" },
        { id: 3, name: "Bluebell Primary", type: "Primary", date: "Oct 15, 2025", status: "Approved" },
        { id: 4, name: "TechBridge Institute", type: "Engineering", date: "Nov 2, 2025", status: "Rejected" },
        { id: 5, name: "Harmony Arts School", type: "Arts", date: "Oct 10, 2025", status: "Pending" },
        { id: 6, name: "Bright Future College", type: "Business", date: "Sep 30, 2025", status: "Approved" },
    ]);

    const [selectedSchool, setSelectedSchool] = useState(null);

    const handleDelete = (id) => {
        setSchools((prev) => prev.filter((school) => school.id !== id));
        if (selectedSchool === id) {
            setSelectedSchool(null);
        }
    };

    const handleSelectSchool = (id) => {
        setSelectedSchool(id === selectedSchool ? null : id);
    };

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <Headers
                    title={"Manage Schools"}
                    subHeader={
                        "Approve schools"
                    }
                />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {schools.map((school) => (
                    <SchoolCards
                        key={school.id}
                        name={school.name}
                        type={school.type}
                        date={school.date}
                        status={school.status}
                        isSelected={selectedSchool === school.id}
                        onSelect={() => handleSelectSchool(school.id)}
                        onDelete={() => handleDelete(school.id)}
                    />
                ))}
            </div>

            <button
                style={{
                    boxShadow: '0px 4px 18px -4px #0000001A, 0px 10px 41.9px -3px #0000001A',
                }}
                className={`flex items-center mt-10 rounded-3xl gap-2 px-6 py-3 font-medium transition-colors duration-200 ${
                    selectedSchool
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : ' text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedSchool}
            >
                <FaChevronRight />
                Approve School
            </button>
        </div>
    );
};

export default ManageSchool;