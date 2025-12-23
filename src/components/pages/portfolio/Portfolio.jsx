import React, { useState } from "react";
import { FaPlus, FaEdit, FaEye, FaCalendarAlt, FaClock } from "react-icons/fa";
import Headers from "../../Reusable/Headers";
import ReusableModal from "../../Reusable/ReusableModal";

const ManageEvents = () => {
     const [open, setOpen] = useState(false);
     const [edit,setEdit] = useState(false)
     const [view,setView] = useState(false)
    const [events, setEvents] = useState([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
            title: "Get Ready to Ask an Apprentice!",
            subtitle: "Tuesday, June 24 • 6:00 PM UTC",
            content:
                "Apprenticeships aren't just for people who can't get into university. Learn what apprenticeships really are, how they work, and why they're a powerful alternative career pathway.",
            status: "upcoming", // upcoming, ongoing, completed
            attendees: 156,
            category: "Webinar"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            title: "Careers Beyond University",
            subtitle: "Thursday, July 10 • 5:30 PM UTC",
            content:
                "Explore career paths outside the traditional university route. Hear from industry professionals and apprentices about real-world opportunities.",
            status: "upcoming",
            attendees: 89,
            category: "Seminar"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            title: "How to Write a Standout Personal Statement",
            subtitle: "Monday, July 18 • 4:00 PM UTC",
            content:
                "Struggling with your personal statement? Learn how to showcase your skills, experiences, and motivations effectively.",
            status: "ongoing",
            attendees: 203,
            category: "Workshop"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
            title: "Apprenticeships vs University: The Truth",
            subtitle: "Friday, July 25 • 6:30 PM UTC",
            content:
                "We break down the myths and facts around apprenticeships and university routes so you can make the best decision for your future.",
            status: "completed",
            attendees: 342,
            category: "Panel Discussion"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
            title: "Digital Skills Bootcamp",
            subtitle: "Wednesday, August 5 • 10:00 AM UTC",
            content:
                "Intensive digital skills training covering web development, data analysis, and digital marketing essentials.",
            status: "upcoming",
            attendees: 45,
            category: "Bootcamp"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
            title: "Industry Networking Mixer",
            subtitle: "Saturday, August 15 • 7:00 PM UTC",
            content:
                "Connect with industry leaders and fellow apprentices in this exclusive networking event.",
            status: "upcoming",
            attendees: 120,
            category: "Networking"
        },
    ]);

    const handleEditEvent = (eventId) => {
        console.log(`Edit event with ID: ${eventId}`);
        // Add your edit logic here
    };

    const handleViewEvent = (event) => {
        console.log(`View event:`, event);
        // Add your view logic here
    };

    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
        console.log(`Deleted event with ID: ${eventId}`);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'upcoming':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'ongoing':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'completed':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const handleSave = (data) => {
        console.log("Saved data:", data);
        setOpen(false);
    };

    return (
        <div className="">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
                <Headers
                    title={"Manage Portfolio"}
                    subHeader={"Create, edit, and monitor all upcoming events and webinars"}
                />
                <button
                onClick={()=> setOpen(true)}
                    className="flex items-center gap-2 bg-[#FFFF00] hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                    <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />
                    Create Portfolio
                </button>
            </div>


            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Image with gradient overlay */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            
      

                            {/* Action buttons overlay */}
                            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => setEdit(true)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                                    title="Edit Event"
                                >
                                    <FaEdit className="text-sm" />
                                </button>
                                <button
                                    onClick={() => setView(true)}
                                    className="bg-white hover:bg-gray-100 text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                                    title="View Details"
                                >
                                    <FaEye className="text-sm" />
                                </button>
                            </div>

                            {/* Attendees count */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm">
                                <span className="font-semibold">{event.attendees}</span>
                                <span>attendees</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2">
                                    {event.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <FaCalendarAlt className="text-yellow-500" />
                                    <span>{event.subtitle}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 line-clamp-3">
                                {event.content}
                            </p>

          
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state (if needed) */}
            {events.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-5xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No events yet</h3>
                    <p className="text-gray-600 mb-6">Create your first event to get started!</p>
                    <button className="bg-[#FFFF00] hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <FaPlus className="inline mr-2" />
                        Create Your First Event
                    </button>
                </div>
            )}

            {/* Pagination/Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                    Showing {events.length} of {events.length} events
                </p>
            </div>
                        <ReusableModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onSave={handleSave}
                location={'portfolio'}
                title="Create Portfolio"
               
                submitText="Create Task"
            />
                        <ReusableModal
                isOpen={edit}
                onClose={() => setEdit(false)}
                onSave={handleSave}
                location={'portfolio'}
                edit={true}
                title="Create Portfolio"
               
                submitText="Create Task"
            />
                        <ReusableModal
                isOpen={view}
                onClose={() => setView(false)}
                onSave={handleSave}
                location={'portfolio'}
                title="Create Portfolio"
                view={true}
                submitText="Create Task"
            />
        </div>
    );
};

export default ManageEvents;