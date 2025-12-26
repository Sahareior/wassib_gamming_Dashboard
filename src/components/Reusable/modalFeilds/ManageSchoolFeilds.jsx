import { Globe, Mail, Phone, Building, Users, Calendar, Briefcase, Tag, FileText, Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import UpdatedManageSchoolFeilds from "./UpdatedManageSchoolFeilds";
import TextEditor from "../editor/EditSection";

const ManageSchoolFeilds = ({ formData, onChange, edit = false, job, view }) => {
    const [activeTab, setActiveTab] = useState("overview");
        const [logoPreview, setLogoPreview] = useState(null);

      useEffect(() => {
          if (formData.logo && formData.logo instanceof File) {
              const objectUrl = URL.createObjectURL(formData.logo);
              setLogoPreview(objectUrl);
              
              return () => URL.revokeObjectURL(objectUrl);
          } else if (formData.logo && typeof formData.logo === 'string') {
              setLogoPreview(formData.logo);
          } else {
              setLogoPreview(null);
          }
      }, [formData.logo]);
  
      const handleLogoChange = (e) => {
          const file = e.target.files[0];
          if (file) {
              onChange("logo", file);
          }
      };
  
      useEffect(() => {
          return () => {
              if (logoPreview && logoPreview.startsWith('blob:')) {
                  URL.revokeObjectURL(logoPreview);
              }
          };
      }, []);

const tags = [
    "JD Program",
    "LLM Program",
    "International Law",
    "Constitutional Law",
    "Criminal Law",
    "Environmental Law",
    "Intellectual Property",
    "Business Law",
    "Tax Law",
    "Human Rights",
    "Immigration Law",
    "Employment Law",
    "Health Law",
    "Technology Law",
    "Public Interest",
    "Clinical Programs",
    "Appellate Advocacy",
    "Alternative Dispute Resolution",
    "Legal Ethics",
    "First Amendment"
];

    const handleTagToggle = (tag) => {
        const currentTags = formData.tags || [];
        const newTags = currentTags.includes(tag)
            ? currentTags.filter(t => t !== tag)
            : [...currentTags, tag];
        onChange("tags", newTags);
    };

    const renderForm = () => (
        <div className="space-y-6 h-[79vh] overflow-y-auto">

                                <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                {logoPreview ? (
                                    <img
                                        src={logoPreview}
                                        alt="Logo preview"
                                        className="h-full w-full object-cover"
                                    />
                                ) : formData.logo && typeof formData.logo === 'string' ? (
                                    <img
                                        src={formData.logo}
                                        alt="Logo"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Camera className="text-blue-600" />
                                )}
                            </div>

                            {!view && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleLogoChange}
                                    id="logo-upload"
                                />
                            )}
                        </div>

                        <div>
                            <label 
                                htmlFor="logo-upload" 
                                className="text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                            >
                                {logoPreview || formData.logo ? "Change logo" : "Add logo"}
                            </label>
                            <p className="text-xs text-gray-400 mt-1">
                                Recommended: 200×200px PNG/JPG
                            </p>
                        </div>
                    </div>
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        School/Firm Name *
                    </label>
                    <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={formData.name || ""}
                            onChange={(e) => onChange("name", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter school/firm name"
                            required
                        />
                    </div>
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title/Excellence Area *
                    </label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={formData.title || ""}
                            onChange={(e) => onChange("title", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Excellence in Corporate Law"
                            required
                        />
                    </div>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                    </label>
                    <input
                        type="text"
                        value={formData.location || ""}
                        onChange={(e) => onChange("location", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., New York, NY"
                        required
                    />
                </div>

                {/* Employee Count */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Employees
                    </label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.employeeCount || ""}
                            onChange={(e) => onChange("employeeCount", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 250"
                            min="0"
                        />
                    </div>
                </div>

                {/* Founding Year */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Founding Year
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.foundingYear || ""}
                            onChange={(e) => onChange("foundingYear", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 1995"
                            min="1800"
                            max={new Date().getFullYear()}
                        />
                    </div>
                </div>

                {/* Open Positions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Open Positions *
                    </label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.openPositions || ""}
                            onChange={(e) => onChange("openPositions", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Number of open positions"
                            min="0"
                            required
                        />
                    </div>
                </div>

                {/* Website */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                    </label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="url"
                            value={formData.website || ""}
                            onChange={(e) => onChange("website", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://example.com"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) => onChange("email", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="contact@example.com"
                            required
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="tel"
                            value={formData.phone || ""}
                            onChange={(e) => onChange("phone", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>
                </div>
            </div>

            {/* Tags Selection */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Practice Areas/Specializations
                </label>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-colors ${(formData.tags || []).includes(tag)
                                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                                    : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
                                }`}
                        >
                            <Tag className="h-3 w-3" />
                            {tag}
                        </button>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Selected: {(formData.tags || []).join(", ") || "None"}
                </p>
            </div>

            {/* Tabbed Text Areas */}
            <div>
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-4">
                        {["overview", "culture"].map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

         <div className="mt-4">
                    {activeTab === "overview" && (
                                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                        Overview *
                </label>
                <div className='border'>
                <TextEditor
                    value={formData.content || ""}
                    onChange={(value) => onChange("content", value)}
                />
                </div>
            </div>
                    )}

                    {activeTab === "culture" && (
                                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                      Culture & Benefits 
                </label>
                <div className='border'>
                <TextEditor
                    value={formData.content || ""}
                    onChange={(value) => onChange("content", value)}
                />
                </div>
            </div>
                    )}


                </div>
            </div>
        </div>
    );
    const editForm = () => (
        <div className="space-y-6 h-[79vh] overflow-y-auto">

                                            <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                {logoPreview ? (
                                    <img
                                        src={logoPreview}
                                        alt="Logo preview"
                                        className="h-full w-full object-cover"
                                    />
                                ) : formData.logo && typeof formData.logo === 'string' ? (
                                    <img
                                        src={formData.logo}
                                        alt="Logo"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Camera className="text-blue-600" />
                                )}
                            </div>

                            {!view && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleLogoChange}
                                    id="logo-upload"
                                />
                            )}
                        </div>

                        <div>
                            <label 
                                htmlFor="logo-upload" 
                                className="text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                            >
                                {logoPreview || formData.logo ? "Change logo" : "Add logo"}
                            </label>
                            <p className="text-xs text-gray-400 mt-1">
                                Recommended: 200×200px PNG/JPG
                            </p>
                        </div>
                    </div>
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit School/Firm Name *
                    </label>
                    <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={formData.name || ""}
                            onChange={(e) => onChange("name", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter school/firm name"
                            required
                        />
                    </div>
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Edit Title/Excellence Area *
                    </label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={formData.title || ""}
                            onChange={(e) => onChange("title", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Excellence in Corporate Law"
                            required
                        />
                    </div>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Location *
                    </label>
                    <input
                        type="text"
                        value={formData.location || ""}
                        onChange={(e) => onChange("location", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., New York, NY"
                        required
                    />
                </div>

                {/* Employee Count */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Number of Employees
                    </label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.employeeCount || ""}
                            onChange={(e) => onChange("employeeCount", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 250"
                            min="0"
                        />
                    </div>
                </div>

                {/* Founding Year */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Founding Year
                    </label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.foundingYear || ""}
                            onChange={(e) => onChange("foundingYear", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 1995"
                            min="1800"
                            max={new Date().getFullYear()}
                        />
                    </div>
                </div>

                {/* Open Positions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Open Positions *
                    </label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="number"
                            value={formData.openPositions || ""}
                            onChange={(e) => onChange("openPositions", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Number of open positions"
                            min="0"
                            required
                        />
                    </div>
                </div>

                {/* Website */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Website
                    </label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="url"
                            value={formData.website || ""}
                            onChange={(e) => onChange("website", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://example.com"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Email *
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) => onChange("email", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="contact@example.com"
                            required
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="tel"
                            value={formData.phone || ""}
                            onChange={(e) => onChange("phone", e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>
                </div>
            </div>

            {/* Tags Selection */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                   Edit Practice Areas/Specializations
                </label>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-colors ${(formData.tags || []).includes(tag)
                                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                                    : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
                                }`}
                        >
                            <Tag className="h-3 w-3" />
                            {tag}
                        </button>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                   Edit Selected: {(formData.tags || []).join(", ") || "None"}
                </p>
            </div>

            {/* Tabbed Text Areas */}
            <div>
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-4">
                        {["overview", "culture"].map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="mt-4">
                    {activeTab === "overview" && (
                                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                       Edit Overview *
                </label>
                <div className='border'>
                <TextEditor
                    value={formData.content || ""}
                    onChange={(value) => onChange("content", value)}
                />
                </div>
            </div>
                    )}

                    {activeTab === "culture" && (
                                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                     Edit Culture & Benefits 
                </label>
                <div className='border'>
                <TextEditor
                    value={formData.content || ""}
                    onChange={(value) => onChange("content", value)}
                />
                </div>
            </div>
                    )}


                </div>
            </div>
        </div>
    );



    return (
        <div>
            {/* ================= JOB VIEW ================= */}
            {view ? (
                <UpdatedManageSchoolFeilds />
            ) : (
                /* ================= FORM SECTION ================= */
                <div className="space-y-6">


                    {edit ? editForm() : renderForm()}
                </div>
            )}
        </div>
    );
};

export default ManageSchoolFeilds;