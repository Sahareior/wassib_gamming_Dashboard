import { Upload, Globe, Mail, Phone, CheckCircle } from "lucide-react";
import React from "react";

const ManageSchoolFeilds = ({ formData, onChange, edit = false, job }) => {
    return (
        <div>
            {/* ================= JOB VIEW ================= */}
            {job ? (
                <div className="space-y-6 h-[80vh]  overflow-y-auto">
                    {/* Header */}
                    <div className="bg-green-50 rounded-lg p-6 relative">
                        <span className="absolute top-4 right-4 bg-yellow-300 text-xs px-3 py-1 rounded-full">
                            Featured Firm
                        </span>

                        <h2 className="text-xl font-semibold text-gray-900">
                            {job.title || "Broadfields Law"}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Excellence in Corporate Law
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                            <span>📍 {job.location || "London, UK"}</span>
                            <span>👥 {job.employees || "250+ employees"}</span>
                            <span>🏢 Founded {job.founded || "1992"}</span>
                            <span>💼 {job.openings || "8 open positions"}</span>
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Globe size={16} />
                                <span>{job.website || "broadfieldslaw.com"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{job.email || "careers@broadfieldslaw.com"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>{job.phone || "+44 20 7123 4567"}</span>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="border rounded-lg p-6">
                        <h3 className="font-semibold mb-2">About {job.title || "Broadfields Law"}</h3>
                        <p className="text-sm text-gray-600">
                            Broadfields Law is a leading corporate law firm with over
                            30 years of experience. We specialize in complex mergers
                            and acquisitions, corporate restructuring, and commercial
                            law.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-4">
                            {/* Practice Areas */}
                            <div>
                                <h4 className="font-medium mb-2">Practice Areas</h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li>✔ Corporate Law</li>
                                    <li>✔ M&A</li>
                                    <li>✔ Commercial</li>
                                    <li>✔ Banking & Finance</li>
                                </ul>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h4 className="font-medium mb-2">Key Highlights</h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li>⭐ Ranked Top 50 Law Firm</li>
                                    <li>🌍 International Practice</li>
                                    <li>🏆 Award-Winning Team</li>
                                    <li>💡 Innovative Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Culture & Benefits */}
                    <div className="border rounded-lg p-6">
                        <h3 className="font-semibold mb-4">Culture & Values</h3>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                "Global network advantage",
                                "Innovative legal solutions",
                                "Commitment to diversity",
                                "Pro bono excellence",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <CheckCircle className="text-yellow-400" size={16} />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <h4 className="font-medium mb-3">Benefits & Perks</h4>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                "Competitive compensation",
                                "Global career opportunities",
                                "Comprehensive benefits",
                                "Professional development",
                                "Flexible working options",
                                "Employee networks",
                            ].map((perk) => (
                                <div
                                    key={perk}
                                    className="bg-blue-50 text-sm px-3 py-2 rounded-md"
                                >
                                    {perk}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* ================= CSV UPLOAD ================= */
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
            )}
        </div>
    );
};

export default ManageSchoolFeilds;
