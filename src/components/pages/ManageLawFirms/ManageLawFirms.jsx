// ManageLawFirms.jsx
import React, { useState } from "react";
import Headers from "../../Reusable/Headers.jsx";
import {FaBuilding, FaChevronRight, FaPlus} from "react-icons/fa";
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

const { TextArea } = Input;

/* ------------------------------------------------------------------ */
/* -------------------------- DEMO DATA ----------------------------- */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* -------------------------- CARD COMPONENT ------------------------ */
/* ------------------------------------------------------------------ */

const ViewModal = ({ isOpen, onClose, firm }) => {
    if (!isOpen || !firm) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ">
            <div className="bg-white w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
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


const LawFirmCard = ({ firm, isSelected, onSelect, onViewProfile }) => {
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
            {/* Header – Gradient + Logo */}
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

                {/* Selection Indicator */}
                {isSelected && (
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Body */}
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

                <Row className="mt-8 md:mt-12" gutter={[8, 8]} align="middle">
                    <Col>
                        <Button
                            shape="circle"
                            icon={<HeartOutlined />}
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border-gray-300"
                        />
                    </Col>
                    <Col flex="auto">
                        <button
                            onClick={handleViewProfileClick}
                            className="w-full"
                        >
                            <Button
                                type="primary"
                                style={{
                                    backgroundColor: "#ffff00",
                                    borderColor: "#ffff00",
                                    borderRadius: 14,
                                    width: "100%",
                                    height: "32px",
                                }}
                                className="flex items-center justify-center gap-1 md:gap-2 hover:bg-yellow-500 hover:border-yellow-500"
                            >
                <span
                    style={{
                        fontFamily: "'Poppins-Medium', Helvetica",
                        fontSize: "12px",
                        color: "#1e1e1e",
                        fontWeight: 500,
                    }}
                    className='flex items-center gap-3'
                >
                  View Profile
                    <FaChevronRight />
                </span>
                                <RightOutlined className="text-xs md:text-sm" />
                            </Button>
                        </button>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

/* ------------------------------------------------------------------ */
/* -------------------------- CREATE MODAL -------------------------- */
/* ------------------------------------------------------------------ */
const CreateLawFirmModal = ({ visible, onCancel, onCreate }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        form
            .validateFields()
            .then(async (values) => {
                setLoading(true);
                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // Show success popup
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Law firm created successfully!',
                        icon: 'success',
                        confirmButtonColor: '#ffff00',
                        confirmButtonText: 'Continue',
                        customClass: {
                            confirmButton: 'text-gray-900 font-semibold'
                        }
                    }).then(() => {
                        onCreate(values);
                        form.resetFields();
                        setLoading(false);
                    });
                } catch (error) {
                    setLoading(false);
                    message.error("Failed to create law firm");
                }
            })
            .catch(() => {
                // validation error – AntD already shows inline messages
            });
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold">Create Law Firm</span>}
            open={visible}
            onCancel={onCancel}
            width={640}
            footer={[
                <Button key="cancel" onClick={onCancel} disabled={loading}>
                    Cancel
                </Button>,
                <Button
                    key="create"
                    type="primary"
                    style={{
                        backgroundColor: "#ffff00",
                        borderColor: "#ffff00",
                        color: "#1e1e1e",
                    }}
                    onClick={handleOk}
                    loading={loading}
                    disabled={loading}
                >
                    Create Law Firm
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical" className="mt-4">
                {/* About the Firm */}
                <Form.Item
                    label={<span className="font-medium">About the Firm</span>}
                    name="about"
                    rules={[{ required: true, message: "Please enter an overview" }]}
                >
                    <TextArea placeholder="Overview of the firm's history and values." rows={3} />
                </Form.Item>

                {/* Areas of Expertise */}
                <Form.Item
                    label={<span className="font-medium">Areas of Expertise</span>}
                    name="expertise"
                    rules={[{ required: true, message: "Please list services offered" }]}
                >
                    <TextArea placeholder="Detailed legal services offered." rows={2} />
                </Form.Item>

                {/* Internship / Training Opportunities */}
                <Form.Item
                    label={<span className="font-medium">Internship / Training Opportunities</span>}
                    name="internships"
                    rules={[{ required: true, message: "Please describe programs" }]}
                >
                    <TextArea placeholder="Summer internship, graduate programs" rows={2} />
                </Form.Item>

                {/* Description (pre-filled example) */}
                <Form.Item
                    label={<span className="font-medium">Description</span>}
                    name="description"
                    rules={[{ required: true, message: "Please enter a description" }]}
                >
                    <TextArea
                        placeholder="Our gym has had both a local and national presence..."
                        rows={5}
                        defaultValue={
                            "Our gym has had both a local and a national presence since its founding in 2011, however its roots go much deeper. Our Team has been training and competing across the world in multiple combat sports to bring you the best instruction available. We are athletes, hobbyists, competitors, students and professionals. We strive to learn and grow while pushing others around us to do the same. We are a family, and we are a team."
                        }
                    />
                </Form.Item>
            </Form>

            <p className="text-sm text-gray-500 mt-2">
                Make changes to this section here. Click save when you're done.
            </p>
        </Modal>
    );
};

/* ------------------------------------------------------------------ */
/* -------------------------- MAIN COMPONENT ------------------------ */
/* ------------------------------------------------------------------ */
const ManageLawFirms = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFirms, setSelectedFirms] = useState(new Set());
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedFirm, setSelectedFirm] = useState(null);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handleCreate = (values) => {
        console.log("New Law Firm payload:", values);
        // TODO: send to your backend / update local state
        closeModal();
    };

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

    const handleApproveSelected = () => {
        if (selectedFirms.size === 0) {
            message.warning("Please select at least one law firm to approve.");
            return;
        }

        // Show success popup for approval
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
            // TODO: Implement your approval logic here
            console.log("Approving firms:", Array.from(selectedFirms));

            // Clear selection after approval
            setSelectedFirms(new Set());
        });
    };

    return (
        <div className="w-full flex flex-col gap-8 p-4 md:p-6">
            {/* Header + Create button */}
            <div className="flex justify-between items-center">
                <Headers
                    title="Manage Law Firm Profiles"
                    subHeader="Approve or manage all law firm profiles"
                />
                <button
                    onClick={openModal}
                    className="flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:scale-105"
                >
                    <FaPlus className="text-sm" />
                    Create New
                </button>
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {firmsData.map((firm) => (
                    <LawFirmCard
                        key={firm.id}
                        firm={firm}
                        isSelected={selectedFirms.has(firm.id)}
                        onSelect={handleSelectFirm}
                        onViewProfile={handleViewProfile}
                    />
                ))}
            </div>

            {/* Approve Button */}
            <div className='flex justify-start'>
                <button
                    onClick={handleApproveSelected}
                    className={`flex justify-center gap-3 items-center rounded-3xl px-6 py-1 font-medium text-gray-700 transition-all duration-300 ${
                        selectedFirms.size > 0
                            ? 'bg-yellow-400 shadow-lg scale-105'
                            : 'bg-[#F7F7F7] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_41.9px_-3px_#0000001A]'
                    }`}
                >
                    <MdOutlineDone />
                    Approve {selectedFirms.size > 0 ? `(${selectedFirms.size})` : ''}
                </button>
            </div>

            {/* Modals */}
            <CreateLawFirmModal
                visible={modalVisible}
                onCancel={closeModal}
                onCreate={handleCreate}
            />
            <ViewModal
                isOpen={isViewModalOpen}
                onClose={handleCloseViewModal}
                firm={selectedFirm}
            />
        </div>
    );
};

export default ManageLawFirms;