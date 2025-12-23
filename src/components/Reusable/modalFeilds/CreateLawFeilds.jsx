import React from "react";
import { Camera, X } from "lucide-react";
import { FaBuilding } from "react-icons/fa6";

const CreateLawFeilds = ({
    formData,
    onChange,
    edit = false,
    view = false,
    job:firm,
    onClose,
}) => {

    console.log('cv',view)
    const disabled = view;

    return (
<div>

    {
        view ? (
            <div>
                
                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ">

                         <div className="bg-white  w-[60vw]  rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                          
                                               <div className="flex justify-end py-3 px-4">
        <button onClick={()=>onClose()}><X /></button>
    </div>
<div className="h-[80vh] overflow-y-auto">
                                 {/* ---------- Header ---------- */}
                             <div className="p-6 border-b border-gray-200">
                                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                     {/* Title & Meta */}
                                     <div>
                                         <h2 className="text-xl font-semibold text-gray-900">
                                             {firm.name}
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
                                     <div className="flex items-center gap-3">
                                         <div className="p-2 bg-gray-100 rounded-full">
                                             <FaBuilding className="text-gray-700" size={20} />
                                         </div>
                                         <div>
                                             <h3 className="text-lg font-semibold text-gray-800">{firm.name}</h3>
                                             <p className="text-sm text-gray-600">{firm.tagline}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
             
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
                                         <p className="text-gray-600">{firm.name}</p>
                                     </div>
                                     <div>
                                         <p className='popmed text-[15px]'>Location</p>
                                         <p className="text-gray-600">{firm.location}</p>
                                     </div>
             
                                     {/* Row 3 */}
                                     <div>
                                         <p className='popmed text-[15px]'>Category</p>
                                         <p className="text-gray-600">Law</p>
                                     </div>
                                 </div>
                             </div>
             
                             {/* ---------- Buttons ---------- */}
      
             
                             {/* ---------- About Section ---------- */}
                             <div className="p-6 space-y-6 text-gray-800 leading-relaxed">
                                 <section>
                                     <h3 className="text-lg font-semibold mb-3">About The Firm</h3>
                                     <p className="mb-4">
                                         <strong>{firm.name} - {firm.tagline}</strong>
                                     </p>
                                     <p>
                                         {firm.name} is a prestigious law firm with a strong presence in the legal industry.
                                         With {firm.size.toLowerCase()}, we pride ourselves on delivering exceptional legal
                                         services and building long-lasting client relationships.
                                     </p>
                                 </section>
             
                                 <section>
                                     <h4 className="font-semibold text-gray-900 mb-2">
                                         Areas of Expertise
                                     </h4>
                                     <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                         {firm.tags.map((tag, index) => (
                                             <li key={index}>{tag}</li>
                                         ))}
                                     </ul>
                                 </section>
             
                                 <section>
                                     <h4 className="font-semibold text-gray-900 mb-2">
                                         What We Offer
                                     </h4>
                                     <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                         <li>Comprehensive legal training and mentorship programs</li>
                                         <li>Exposure to diverse legal departments and practice areas</li>
                                         <li>Opportunities for professional growth and development</li>
                                         <li>Collaborative and supportive work environment</li>
                                     </ul>
                                 </section>
             
                                 <p className="pt-2">
                                     Ready to start your legal career with {firm.name}? <strong>Apply now!</strong>
                                 </p>
                             </div>
             
                             {/* ---------- Key Responsibilities ---------- */}
                             <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                                 <h3 className="text-lg font-semibold">Training Opportunities</h3>
                                 <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                     <li>Hands-on experience with real casework and legal research</li>
                                     <li>Drafting legal documents and correspondence under supervision</li>
                                     <li>Client file management and documentation procedures</li>
                                     <li>Participation in client meetings and court proceedings</li>
                                     <li>Professional development and administrative training</li>
                                 </ul>
                             </div>
             
                             {/* ---------- Skills Section ---------- */}
                             <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                                 <h3 className="text-lg font-semibold">Required Qualifications</h3>
                                 <p>Law degree or currently pursuing legal education</p>
                             </div>
             
                             {/* ---------- BTEC/Levels Section ---------- */}
                             <div className="p-6 space-y-3 border-t border-gray-200 text-gray-800">
                                 <h3 className="text-lg font-semibold">Education Requirements</h3>
                                 <p>Bachelor's degree in Law or related field required</p>
                             </div>
</div>
             
                             {/* ---------- Footer ---------- */}
                             {/* <div className="p-6 border-t border-gray-200 flex justify-end">
                                 <button
                                     onClick={onClose}
                                     className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                                 >
                                     Close
                                 </button>
                             </div> */}
                         </div>
                     </div>
             </div>
        ):(        <div className="space-y-5">
            {/* Header */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900">
                    {edit ? "Edit Law Firm" : "Create Law Firm"}
                </h2>
                <p className="text-sm text-gray-500">
                    Make changes to this section here. Click save when you're done.
                </p>
            </div>

            {/* Logo Upload */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center">
                        {formData.logo ? (
                            <img
                                src={formData.logo}
                                alt="Logo"
                                className="h-full w-full rounded-full object-cover"
                            />
                        ) : (
                            <Camera className="text-gray-600" />
                        )}
                    </div>

                    {!view && (
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) =>
                                onChange("logo", e.target.files[0])
                            }
                        />
                    )}
                </div>

                <span className="text-sm text-gray-600">Add logo</span>
            </div>

            {/* About Firm */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    About the Firm
                </label>
                <input
                    type="text"
                    placeholder="Overview of the firm’s history and values."
                    value={formData.about || ""}
                    disabled={disabled}
                    onChange={(e) => onChange("about", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
                />
            </div>

            {/* Areas of Expertise */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Expertise
                </label>
                <input
                    type="text"
                    placeholder="Detailed legal services offered."
                    value={formData.expertise || ""}
                    disabled={disabled}
                    onChange={(e) => onChange("expertise", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
                />
            </div>

            {/* Internship / Training */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Internship / Training Opportunities (tag)
                </label>
                <input
                    type="text"
                    placeholder="Summer internship, graduate programs"
                    value={formData.internships || ""}
                    disabled={disabled}
                    onChange={(e) => onChange("internships", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
                />
            </div>

            {/* Location */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                </label>
                <input
                    type="text"
                    placeholder="London"
                    value={formData.location || ""}
                    disabled={disabled}
                    onChange={(e) => onChange("location", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    rows={5}
                    value={formData.description || ""}
                    disabled={disabled}
                    onChange={(e) => onChange("description", e.target.value)}
                    className="w-full border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
                />
            </div>

            {/* Footer */}
           
        </div>)
    }
</div>
    );
};

export default CreateLawFeilds;
