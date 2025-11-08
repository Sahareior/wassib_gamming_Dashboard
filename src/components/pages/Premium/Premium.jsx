import React from 'react';
import Headers from "../../Reusable/Headers.jsx";
import {FaPlus} from "react-icons/fa";
import {MdOutlineDone} from "react-icons/md";

const Premium = () => {
    const features = [
        "Unlimited courses and students",
        "Advanced analytics dashboard",
        "Custom branding options",
        "Priority customer support",
        "Bulk student management",
        "Advanced quiz customization"
    ];

    const plans = [
        {
            name: "Basic",
            price: "$0",
            period: "/month",
            features: [
                "Up to 100 students",
                "5 courses",
                "Basic reports",
            ],
            isCurrent: true,
            buttonText: "Current Plan",
            buttonStyle: "bg-gray-100 text-gray-500 cursor-not-allowed",
        },
        {
            name: "Professional",
            price: "$49",
            period: "/month",
            features: [
                "Up to 500 students",
                "Unlimited courses",
                "Advanced analytics",
            ],
            isCurrent: false,
            buttonText: "Upgrade",
            buttonStyle: "bg-[#FFFF00] text-black hover:bg-yellow-400 transition-colors",
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            features: [
                "Unlimited students",
                "Custom branding",
                "Priority support",
            ],
            isCurrent: false,
            buttonText: "Upgrade",
            buttonStyle: "bg-[#FFFF00] text-black hover:bg-yellow-400 transition-colors",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <Headers
                    title={"Quizzes"}
                    subHeader={"Manage all quizzes available for your students"}
                />
            </div>

            <div className="bg-gradient-to-r from-[#FEFCE8] to-[#FEF9C2] shadow-xl rounded-2xl p-6 border border-yellow-200">
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <p className="text-[16px] popreg font-medium">Upgrade to Premium</p>
                            <span className="text-[12px] popmed px-3 py-1 bg-yellow-300 rounded-full font-medium">
                                Save 20%
                            </span>
                        </div>

                        <p className="text-[14px] popreg text-gray-700 max-w-md">
                            Unlock advanced features and scale your school management platform to the next level.
                        </p>

                        <div className="grid grid-cols-2 w-[40%] gap-1">
                            {features.map((feature, index) => (
                                <p key={index} className="flex items-center gap-2 popreg text-sm">
                                    <MdOutlineDone className="text-green-600 flex-shrink-0" />
                                    {feature}
                                </p>
                            ))}
                        </div>

                        <div className="space-y-1">
                            <p className="text-2xl font-bold popmed">
                                $99 <span className="text-sm font-normal text-gray-600">/Month</span>
                            </p>
                            <p className="text-sm popreg text-gray-700">
                                or $950/year <span className="text-green-600 font-medium">(20% off)</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col   gap-5 items-center space-y-4 lg:space-y-0">
                        <button className="w-full lg:w-auto bg-[#FFFF00] text-black px-6 py-3 rounded-3xl font-medium popmed
                                          shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]
                                          hover:bg-gray-800 transition-colors duration-200">
                            Upgrade Now
                        </button>
                        <p className="text-sm popreg text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-200">
                            Learn More
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full ">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-between w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_41.9px_-3px_#0000001A] p-8 transition-all hover:-translate-y-1 ${
                            plan.isCurrent ? "ring-2 ring-green-300" : ""
                        }`}
                    >
                        {/* Plan Header */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
                                {plan.isCurrent && (
                                    <span className="text-green-600 bg-green-100 text-xs font-medium px-3 py-1 rounded-full">
                    Current
                  </span>
                                )}
                            </div>

                            <p className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</p>
                            <p className="text-sm text-gray-500 mb-6">{plan.period}</p>

                            {/* Features */}
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <MdOutlineDone className="text-green-500" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button */}
                        <button
                            disabled={plan.isCurrent}
                            className={`mt-8 w-full py-3 rounded-3xl font-medium text-sm shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A] ${plan.buttonStyle}`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Premium;