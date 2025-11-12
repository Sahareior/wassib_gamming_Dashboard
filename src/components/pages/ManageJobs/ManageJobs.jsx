import React, { useState } from "react";
import Headers from "../../Reusable/Headers.jsx";
import {
    FaBuilding,
    FaCalendar,
    FaEdit,
    FaEye,
    FaTrash,
    FaCheck,
    FaTimes
} from "react-icons/fa";
import Swal from "sweetalert2";

// Demo Data
const jobsData = [
    {
        id: 1,
        company: "StartupX",
        position: "Frontend Developer",
        status: "Pending",
        date: "Oct 7, 2025",
    },
    {
        id: 2,
        company: "TechNova",
        position: "Backend Engineer",
        status: "Approved",
        date: "Sep 28, 2025",
    },
    {
        id: 3,
        company: "Webify",
        position: "UI/UX Designer",
        status: "Pending",
        date: "Nov 2, 2025",
    },
    {
        id: 4,
        company: "CodeCraft",
        position: "Full Stack Developer",
        status: "Rejected",
        date: "Oct 10, 2025",
    },
    {
        id: 5,
        company: "DevCorp",
        position: "Mobile App Developer",
        status: "Approved",
        date: "Oct 25, 2025",
    },
    {
        id: 6,
        company: "PixelHub",
        position: "React Developer",
        status: "Pending",
        date: "Oct 30, 2025",
    },
];

// Modal Component
const ViewModal = ({ isOpen, onClose, job }) => {
    if (!isOpen || !job) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ">
            <div className="bg-white w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                {/* ---------- Header ---------- */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Title & Meta */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {job.title || "Solicitor apprenticeship (London)"}
                            </h2>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-sm text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-medium">
                  Open
                </span>
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                  Level 7
                </span>
                            </div>
                        </div>

                        {/* Company Info */}

                    </div>
                </div>

                {/* ---------- Salary & Meta ---------- */}
                {/* ---------- Salary & Meta ---------- */}
                <div className="p-6  border-gray-200">
                    <div className="grid grid-cols-1 border p-5 sm:grid-cols-3 gap-6 text-sm text-gray-700">
                        {/* Row 1 */}
                        <div>
                            <p className='popmed text-[15px]'>Salary:</p>
                            <p className='popreg'>£27,000 - £30,700 Yearly</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Start date:</p>
                            <p>19/12/2025</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Application deadline:</p>
                            <p>19/12/2025:</p>

                        </div>

                        {/* Row 2 */}
                        <div>
                            <p className='popmed text-[15px]'>Job ID:</p>
                            <p>13586</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Company</p>
                            <p className="text-gray-600">{job.company || "DWF LLP"}</p>
                        </div>
                        <div>
                            <p className='popmed text-[15px]'>Location</p>
                            <p className="text-gray-600">{job.location || "London"}</p>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <p className='popmed text-[15px]'>Category</p>
                            <p className="text-gray-600">{job.category || "Law"}</p>
                        </div>
                    </div>
                </div>

                {/* ---------- Buttons ---------- */}
                <div className="flex gap-3 px-6 py-4 border-b border-gray-200">
                    <button className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium rounded-full py-2.5 transition">
                        Apply
                    </button>
                    <button className="flex-1 border border-yellow-300 text-gray-800 font-medium rounded-full py-2.5 hover:bg-yellow-50 transition">
                        Save
                    </button>
                </div>

                {/* ---------- About Section ---------- */}
                <div className="p-6 space-y-6 text-gray-800 leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold mb-3">About The Job</h3>
                        <p className="mb-4">
                            <strong>Legal Apprentice - Jumpstart Your Career</strong>
                        </p>
                        <p>
                            Are you a sharp, detail-oriented individual looking to dive into
                            the world of law? We’re seeking enthusiastic Legal Apprentices to
                            join our team! You’ll be a key player in supporting our
                            solicitors, gaining invaluable experience and building a solid
                            foundation for your legal career.
                        </p>
                    </section>

                    <section>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            What You’ll Do
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Conduct legal research & analysis to help build strong cases.</li>
                            <li>Draft essential legal documents and correspondence.</li>
                            <li>Manage and organize client files with precision.</li>
                            <li>
                                Attend client meetings and court proceedings (amazing learning
                                opportunities).
                            </li>
                            <li>
                                Provide administrative support to keep our team running smoothly.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="font-semibold text-gray-900 mb-2">
                            What You’ll Gain
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Take on more responsibility over time.</li>
                            <li>
                                Rotate through diverse departments every 12 months (or 6 months
                                in final 2 years) alongside trainee solicitors.
                            </li>
                            <li>Develop real-world legal skills and knowledge.</li>
                            <li>
                                Be part of a supportive and collaborative work environment.
                            </li>
                        </ul>
                    </section>

                    <p className="pt-2">
                        Ready to launch your legal journey? <strong>Apply now!</strong>
                    </p>
                </div>

                {/* ---------- Key Responsibilities ---------- */}
                <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                    <h3 className="text-lg font-semibold">Key Responsibilities</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Assisting solicitors with casework and legal research</li>
                        <li>Drafting legal documents and correspondence</li>
                        <li>Managing client files and documentation</li>
                        <li>Participating in meetings and court proceedings</li>
                        <li>Supporting the team with administrative tasks</li>
                    </ul>
                </div>

                {/* ---------- Skills Section ---------- */}
                <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <p>Unknown</p>
                </div>

                {/* ---------- BTEC/Levels Section ---------- */}
                <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                    <h3 className="text-lg font-semibold">BTEC/Levels</h3>
                    <p>No, we do not accept BTEC/Levels</p>
                </div>

                {/* ---------- Footer ---------- */}
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

const JobsCard = ({ company, position, status, date, onDelete, onView }) => {
    // Dynamic status color
    const statusColor =
        status === "Approved"
            ? "bg-green-200 text-green-800"
            : status === "Rejected"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800";

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete the job at ${company}`,
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
                cancelButton: "rounded-xl px-6 py-2 font-medium"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Show success confirmation with done logo
                Swal.fire({
                    title: "Deleted!",
                    text: "The job has been deleted successfully.",
                    icon: "success",
                    iconHtml: '<div class="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full"><FaCheck class="text-green-600 text-2xl" /></div>',
                    background: "#ffffff",
                    confirmButtonColor: "#10b981",
                    confirmButtonText: "Done",
                    customClass: {
                        popup: "rounded-2xl shadow-xl",
                        title: "text-gray-800 font-semibold text-xl",
                        text: "text-gray-600",
                        confirmButton: "rounded-xl px-6 py-2 font-medium",
                        icon: "border-0"
                    }
                }).then(() => {
                    // Call the onDelete prop to handle actual deletion
                    onDelete();
                });
            }
        });
    };

    return (
        <div className="w-full bg-white shadow-sm rounded-2xl p-5 border border-gray-100 flex space-y-3 flex-col gap-3 hover:shadow-md transition-all duration-200">
            {/* Top Section: Icon + Status */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-full">
                        <FaBuilding size={26} className="text-gray-700" />
                    </div>
                </div>
                <p className={`text-sm px-4 py-1 rounded-3xl font-medium ${statusColor}`}>
                    {status}
                </p>
            </div>

            <div className='space-y-3'>
                {/* Date */}
                <div>
                    <p className="text-[16px] popbold text-gray-800">{company}</p>
                    <p className="text-sm text-gray-600">{position}</p>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <FaCalendar size={14} />
                    <span>{date}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-3">
                <button
                    onClick={onView}
                    className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-[7px] rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all"
                >
                    <FaEye size={19} className="text-gray-600" /> View
                </button>
             
                <button
                    onClick={handleDelete}
                    className="flex items-center justify-center border border-gray-200 rounded-full p-3 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 text-gray-500"
                >
                    <FaTrash size={15} />
                </button>
            </div>
        </div>
    );
};

const ManageJobs = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteJob = (jobId) => {
        // Here you would typically make an API call to delete the job
        console.log(`Deleting job with ID: ${jobId}`);
        // For demo purposes, we'll just log to console
        // In a real app, you would update your state or make an API call
    };

    const handleViewJob = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <Headers
                    title={"Tasks"}
                    subHeader={
                        "Manage all your student assignments and track their progress"
                    }
                />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsData.map((job) => (
                    <JobsCard
                        key={job.id}
                        company={job.company}
                        position={job.position}
                        status={job.status}
                        date={job.date}
                        onDelete={() => handleDeleteJob(job.id)}
                        onView={() => handleViewJob(job)}
                    />
                ))}
            </div>

            {/* Modal */}
            <ViewModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                job={selectedJob}
            />
        </div>
    );
};

export default ManageJobs;