import React from "react";
import Headers from "../../Reusable/Headers.jsx";
import {
    FaBuilding,
    FaCalendar,
    FaEdit,
    FaEye,
    FaTrash,
    FaCheck
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

const JobsCard = ({ company, position, status, date, onDelete }) => {
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
                <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
                    <FaEye size={14} className="text-gray-600" /> View
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 py-2 rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
                    <FaEdit size={14} className="text-gray-600" /> Edit
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

const ManageJobs = () => {
    const handleDeleteJob = (jobId) => {
        // Here you would typically make an API call to delete the job
        console.log(`Deleting job with ID: ${jobId}`);
        // For demo purposes, we'll just log to console
        // In a real app, you would update your state or make an API call
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
                    />
                ))}
            </div>
        </div>
    );
};

export default ManageJobs;