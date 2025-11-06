import React from 'react';
import {FaPerson} from "react-icons/fa6";
import Headers from "../../Reusable/Headers.jsx";
import CommonTable from "../../Reusable/CommonTable.jsx";

const Students = () => {
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

    const filterOptions = ["All", "9th", "10th", "11th", "12th"];

    const columns = [
        { header: "Student", accessor: "student" },
        { header: "Email", accessor: "email" },
        { header: "Grade", accessor: "grade" },
        { header: "Courses", accessor: "courses" },
        { header: "Status", accessor: "status" },
        { header: "Actions", accessor: "actions" },
    ];
    return (
        <div>
          <div className='flex justify-between items-center'>
              <Headers title={"Students"} subHeader={"Manage all students enrolled in your platform"} />
              <button className="flex gap-2 items-center bg-[#FFFF00] py-2 rounded-3xl px-5 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
                  <FaPerson /> Add Student
              </button>

          </div>

            <div className="bg-white mt-8 p-5 border-r-2 border-b-2 border-l-2 border-[#0000001A] rounded-2xl">
                <CommonTable

                    columns={columns}
                    data={sampleData}
                    filterOptions={filterOptions}
                />
            </div>
        </div>
    );
};

export default Students;

