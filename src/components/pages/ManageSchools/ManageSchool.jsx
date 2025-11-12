import React, { useState } from 'react';
import Swal from "sweetalert2";
import {FaBuilding, FaCalendar, FaChevronRight, FaEye, FaTrash, FaTimes} from "react-icons/fa";
import Headers from "../../Reusable/Headers.jsx";

// View Modal Component
const ViewModal = ({ isOpen, onClose, school }) => {
    if (!isOpen || !school) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Title & Meta */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {school.name}
                            </h2>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                                <span className="text-sm text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-medium">
                                    Open
                                </span>
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                                    {school.type} School
                                </span>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <FaTimes className="text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* School Details */}
                <div className="p-6 border-b border-gray-200">
                    <div className="grid grid-cols-1 border p-5 sm:grid-cols-2 gap-6 text-sm text-gray-700">
                        <div>
                            <p className='popmed text-[15px]'>School Name:</p>
                            <p className='popreg'>{school.name}</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>School Type:</p>
                            <p>{school.type} School</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Status:</p>
                            <p className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                school.status === "Approved" 
                                    ? "bg-green-200 text-green-800"
                                    : school.status === "Rejected"
                                    ? "bg-red-200 text-red-800"
                                    : "bg-yellow-200 text-yellow-800"
                            }`}>
                                {school.status}
                            </p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Date Added:</p>
                            <p>{school.date}</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 px-6 py-4 border-b border-gray-200">
                    <button className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium rounded-full py-2.5 transition">
                        Approve School
                    </button>
                    <button className="flex-1 border border-yellow-300 text-gray-800 font-medium rounded-full py-2.5 hover:bg-yellow-50 transition">
                        Save for Later
                    </button>
                </div>

                {/* About Section */}
                <div className="p-6 space-y-6 text-gray-800 leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold mb-3">About The School</h3>
                        <p className="mb-4">
                            <strong>{school.name} - Excellence in {school.type} Education</strong>
                        </p>
                        <p>
                            {school.name} is a prestigious educational institution specializing in {school.type.toLowerCase()} education. 
                            With a commitment to academic excellence and student development, we provide a nurturing 
                            environment for students to thrive and achieve their full potential.
                        </p>
                    </section>

                    <section>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            Educational Programs
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Comprehensive {school.type.toLowerCase()} curriculum</li>
                            <li>Extracurricular activities and sports programs</li>
                            <li>College preparatory courses</li>
                            <li>Professional development workshops</li>
                            <li>Student counseling and career guidance</li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            Facilities & Resources
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Modern classrooms and laboratories</li>
                            <li>Extensive library resources</li>
                            <li>Sports and recreation facilities</li>
                            <li>Technology-enabled learning environments</li>
                            <li>Student support services</li>
                        </ul>
                    </section>
                </div>

                {/* Additional Information */}
                <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                    <h3 className="text-lg font-semibold">Admission Requirements</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Completed application form</li>
                        <li>Academic transcripts and records</li>
                        <li>Standardized test scores</li>
                        <li>Letters of recommendation</li>
                        <li>Personal statement or essay</li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

// Single Card Component
const SchoolCards = ({ name, type, date, status, onDelete, isSelected, onSelect, onView }) => {
    const statusColor =
        status === "Approved"
            ? "bg-green-200 text-green-800"
            : status === "Rejected"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800";

    const handleDelete = (e) => {
        e.stopPropagation();
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

    const handleViewClick = (e) => {
        e.stopPropagation();
        onView();
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
                <div className="p-3 bg-slate-100 rounded-full">
                    <FaBuilding size={26} className="text-gray-700" />
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
                <button 
                    onClick={handleViewClick}
                    className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all"
                >
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
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedSchoolForView, setSelectedSchoolForView] = useState(null);

    const handleDelete = (id) => {
        setSchools((prev) => prev.filter((school) => school.id !== id));
        if (selectedSchool === id) {
            setSelectedSchool(null);
        }
    };

    const handleSelectSchool = (id) => {
        setSelectedSchool(id === selectedSchool ? null : id);
    };

    const handleViewSchool = (school) => {
        setSelectedSchoolForView(school);
        setIsViewModalOpen(true);
    };

    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setSelectedSchoolForView(null);
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
                        onView={() => handleViewSchool(school)}
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

            {/* View Modal */}
            <ViewModal
                isOpen={isViewModalOpen}
                onClose={handleCloseViewModal}
                school={selectedSchoolForView}
            />
        </div>
    );
};

export default ManageSchool;