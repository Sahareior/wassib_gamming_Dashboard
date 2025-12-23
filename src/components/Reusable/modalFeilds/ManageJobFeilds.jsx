import { Upload, X } from 'lucide-react';
import React from 'react';

const ManageJobFeilds = ({ formData, onChange, edit = false, view = false, job, onClose }) => {
    if (view) {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                    {/* Header with close button */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {job?.title || "Solicitor apprenticeship (London)"}
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
                            <button
                                onClick={onClose}
                                className="h-8 w-8 p-0 rounded-md hover:bg-gray-100 flex items-center justify-center"
                                type="button"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="grid grid-cols-1 border p-5 sm:grid-cols-3 gap-6 text-sm text-gray-700">
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
                                <p>19/12/2025</p>
                            </div>

                            <div>
                                <p className='popmed text-[15px]'>Job ID:</p>
                                <p>13586</p>
                            </div>
                            <div>
                                <p className='popmed text-[15px]'>Company</p>
                                <p className="text-gray-600">{job?.company || "DWF LLP"}</p>
                            </div>
                            <div>
                                <p className='popmed text-[15px]'>Location</p>
                                <p className="text-gray-600">{job?.location || "London"}</p>
                            </div>

                            <div>
                                <p className='popmed text-[15px]'>Category</p>
                                <p className="text-gray-600">{job?.category || "Law"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className="p-6 space-y-6 text-gray-800 leading-relaxed">
                        <section>
                            <h3 className="text-lg font-semibold mb-3">About The Job</h3>
                            <p className="mb-4">
                                <strong>Legal Apprentice - Jumpstart Your Career</strong>
                            </p>
                            <p>
                                Are you a sharp, detail-oriented individual looking to dive into
                                the world of law? We're seeking enthusiastic Legal Apprentices to
                                join our team! You'll be a key player in supporting our
                                solicitors, gaining invaluable experience and building a solid
                                foundation for your legal career.
                            </p>
                        </section>

                        <section>
                            <h4 className="font-semibold text-gray-900 mb-2">
                                What You'll Do
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
                                What You'll Gain
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

                    {/* Key Responsibilities */}
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

                    {/* Skills */}
                    <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                        <h3 className="text-lg font-semibold">Skills</h3>
                        <p>Unknown</p>
                    </div>

                    {/* BTEC/Levels */}
                    <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                        <h3 className="text-lg font-semibold">BTEC/Levels</h3>
                        <p>No, we do not accept BTEC/Levels</p>
                    </div>
                </div>
            </div>
        );
    }

    // Regular form for non-view mode
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload csv file
                    </label>

                    <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-yellow-400 transition">
                        <Upload className="h-6 w-6 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                            Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">
                            CSV, PDF file (Max. 5MB)
                        </p>

                        <input
                            type="file"
                            accept=".csv,.pdf"
                            className="hidden"
                            onChange={(e) =>
                                onChange("quizFile", e.target.files[0])
                            }
                        />
                    </label>

                    {edit && formData.quizFileName && (
                        <p className="text-xs text-gray-500 mt-2">
                            Current file:{" "}
                            <span className="font-medium">
                                {formData.quizFileName}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageJobFeilds;