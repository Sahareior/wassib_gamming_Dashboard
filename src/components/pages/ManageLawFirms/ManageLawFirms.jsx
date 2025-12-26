// ManageLawFirms.jsx
import React, { useState } from "react";
import Headers from "../../Reusable/Headers.jsx";
import {FaBuilding, FaChevronRight, FaEdit, FaEye, FaPlus, FaTrash} from "react-icons/fa";
import {
    Button,
    Card,
    Col,
    Row,
    Tag,
    Modal,
    Form,
    Input,
    message,
} from "antd";
import {
    EnvironmentOutlined,
    HeartOutlined,
    RightOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {MdOutlineDone} from "react-icons/md";
import Swal from "sweetalert2";
import ReusableModal from "../../Reusable/ReusableModal.jsx";

const { TextArea } = Input;


const firmsData = [
    {
        id: 1,
        name: "Freshfields",
        tagline: "Elite International Firm",
        location: "London, Global",
        size: "2800+ Members",
        tags: ["Antitrust", "Tax", "M&A", "Corporate"],
        gradient: "from-blue-100 to-blue-100",
        featured: true,
    },
    {
        id: 2,
        name: "Broadfields Law",
        tagline: "Excellence in Corporate Law",
        location: "London, UK",
        size: "250+ Members",
        tags: ["Corporate Law", "M&A", "Tax"],
        gradient: "from-green-100 to-green-100",
        featured: false,
    },
    {
        id: 3,
        name: "Lexbridge Associates",
        tagline: "Trusted Legal Experts",
        location: "New York, USA",
        size: "120+ Members",
        tags: ["Litigation", "Tax", "Real Estate"],
        gradient: "from-yellow-100 to-yellow-100",
        featured: true,
    },
    {
        id: 4,
        name: "Silverstone Legal",
        tagline: "Leading Law Solutions",
        location: "Sydney, AU",
        size: "500+ Members",
        tags: ["Finance", "M&A", "Corporate"],
        gradient: "from-purple-100 to-purple-100",
        featured: false,
    },
];






const LawFirmCard = ({ firm, isSelected, onSelect, onViewProfile,onEdit }) => {
    const visibleTags = firm.tags.slice(0, 2);
    const extraCount = firm.tags.length - visibleTags.length;

    const handleCardClick = () => {
        onSelect(firm.id);
    };

    const handleViewProfileClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onViewProfile(firm);
    };

    return (
        <Card
            bordered
            className={`rounded-3xl overflow-hidden border-2 transition-all duration-300 w-full max-w-full mx-auto hover:shadow-lg cursor-pointer ${
                isSelected
                    ? 'border-yellow-400 shadow-lg'
                    : 'border-gray-200 shadow-sm'
            }`}
            bodyStyle={{ padding: 0 }}
            onClick={handleCardClick}
        >
          
            <div
                className={`bg-gradient-to-r ${firm.gradient} p-4 md:p-6 flex justify-center items-center relative h-24 md:h-32`}
            >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center p-2 md:p-4 bg-opacity-90">
                    <div className="w-full h-full bg-green-300 rounded-xl flex items-center justify-center">
                        <FaBuilding size={60} />
                    </div>
                </div>

                {firm.featured && (
                    <Tag
                        color="yellow"
                        className="absolute top-2 right-2 md:top-4 md:right-4 rounded-full font-medium text-xs md:text-sm border-0"
                    >
                        Featured
                    </Tag>
                )}


            </div>

    
            <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{firm.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{firm.tagline}</p>

                <Row className="mt-3 md:mt-4" gutter={[12, 12]} align="middle">
                    <Col>
                        <EnvironmentOutlined className="text-gray-500 text-sm md:text-base" />
                        <span className="ml-2 text-xs md:text-sm text-gray-600">{firm.location}</span>
                    </Col>
                    <Col>
                        <TeamOutlined className="text-gray-500 text-sm md:text-base" />
                        <span className="ml-2 text-xs md:text-sm text-gray-600">{firm.size}</span>
                    </Col>
                </Row>

                <Row className="mt-3 md:mt-4" gutter={[6, 6]}>
                    {visibleTags.map((tag, i) => (
                        <Col key={i}>
                            <Tag className="rounded-full border-gray-300 text-gray-700 text-xs">{tag}</Tag>
                        </Col>
                    ))}
                    {extraCount > 0 && (
                        <Col>
                            <Tag className="rounded-full border-gray-300 text-gray-700 text-xs">
                                +{extraCount} more
                            </Tag>
                        </Col>
                    )}
                </Row>

     <div className="flex items-center justify-between mt-8 gap-3">
                <button
                    onClick={handleViewProfileClick}
                    className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-[7px] rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all"
                >
                    <FaEye size={19} className="text-gray-600" /> View
                </button>
                <button
                   onClick={onEdit}
                    className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-[7px] rounded-3xl text-gray-700 font-medium hover:bg-gray-100 transition-all"
                >
                    <FaEdit size={19} className="text-gray-600" /> Edit
                </button>
             
                <button
                    
                    className="flex items-center justify-center border border-gray-200 rounded-full p-3 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 text-gray-500"
                >
                    <FaTrash size={19} />
                </button>
            </div>
            </div>
        </Card>
    );
};





const ManageLawFirms = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFirms, setSelectedFirms] = useState(new Set());
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedFirm, setSelectedFirm] = useState(null);
    const [isEdit,setIsEdit] = useState(false)

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handleCreate = (values) => {
        console.log("New Law Firm payload:", values);
      
        closeModal();
    };

    const handelEdit = (value) => {
        setSelectedFirm(value)
        setIsEdit(true)
    }

    const handleSelectFirm = (firmId) => {
        setSelectedFirms(prev => {
            const newSelected = new Set(prev);
            if (newSelected.has(firmId)) {
                newSelected.delete(firmId);
            } else {
                newSelected.add(firmId);
            }
            return newSelected;
        });
    };

    const handleViewProfile = (firm) => {
        setSelectedFirm(firm);
        setIsViewModalOpen(true);
    };

    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setSelectedFirm(null);
    };

        const handleSave = (data) => {
        console.log("Saved data:", data);
        closeModal(false);
    };

    const handleApproveSelected = () => {
        if (selectedFirms.size === 0) {
            message.warning("Please select at least one law firm to approve.");
            return;
        }

   
        Swal.fire({
            title: 'Congratulations!',
            text: `Approved ${selectedFirms.size} law firm(s) successfully!`,
            icon: 'success',
            confirmButtonColor: '#ffff00',
            confirmButtonText: 'Continue',
            customClass: {
                confirmButton: 'text-gray-900 font-semibold'
            }
        }).then(() => {
           
            console.log("Approving firms:", Array.from(selectedFirms));

  
            setSelectedFirms(new Set());
        });
    };

    return (
        <div className="w-full flex flex-col gap-8 ">
            
            <div className="flex justify-between items-center">
                <Headers
                    title="Manage Law Firm Profiles"
                    subHeader="Approve or manage all law firm profiles"
                />
                <button
                    onClick={openModal}
                    className="flex gap-2 items-center bg-[#FFFF00] hover:bg-yellow-500 py-3 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:scale-105"
                >
                    <FaPlus className="text-sm" />
                    Create New
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {firmsData.map((firm) => (
                    <LawFirmCard
                        key={firm.id}
                        firm={firm}
                        isSelected={selectedFirms.has(firm.id)}
                        onSelect={handleSelectFirm}
                        onViewProfile={handleViewProfile}
                        onEdit ={handelEdit}
                    />
                ))}
            </div>


        
            <ReusableModal
                isOpen={modalVisible}
                onClose={closeModal}
                onSave={handleSave}
                location={'createLawFirms'}
            />
            <ReusableModal
                isOpen={isViewModalOpen}
                onClose={handleCloseViewModal}
                data={selectedFirm}
                view={true}
                location={'createLawFirms'}
            />
            <ReusableModal
                isOpen={isEdit}
                onClose={()=> setIsEdit(false)}
                data={selectedFirm}
                onSave={handleSave}
               edit={true}
            location={'createLawFirms'}
            />
        </div>
    );
};

export default ManageLawFirms;