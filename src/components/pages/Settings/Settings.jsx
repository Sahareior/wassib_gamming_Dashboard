import React, { useState } from 'react';
import Headers from "../../Reusable/Headers.jsx";

const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { key: 'general', label: 'General', icon: '🏠' },
        { key: 'account', label: 'Account', icon: '👤' },
        { key: 'notifications', label: 'Notifications', icon: '🔔' },
        { key: 'security', label: 'Security', icon: '🔒' },
    ];

    return (
        <div className="min-h-screen ">
            <Headers
                title="Settings"
                subHeader="Manage your account and platform settings"
            />

            {/* Tabs */}
            <div className="max-w-8xl mx-auto mt-1">
                <div className="flex space-x-3 items-center popbold border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center space-x-1 py-1 px-6 justify-center  text-sm font-medium transition-colors border-b-2 ${
                                activeTab === tab.key
                                    ? 'bg-white rounded-3xl'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-8 ]">
                    {activeTab === 'general' && (
                        <div className="bg-white rounded-[20px] shadow-sm p-6">
                            <h3 className="text-lg popbold text-gray-900">School Information</h3>
                            <p className="text-[16px] text-[#737373] mt-1">Update your school's basic information</p>

                            <div className="mt-6 space-y-5">
                                <div>
                                    <label className="block text-sm popmed text-gray-700">School Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Aspiring School"
                                        className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-sm popmed text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        defaultValue="123 Education Street"
                                        className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm text-sm popmed font-medium text-gray-700">Phone</label>
                                        <input
                                            type="text"
                                            defaultValue="+1 (555) 123-4567"
                                            className="mt-1 block popreg w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm  popmed font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            defaultValue="info@school.edu"
                                            className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className="mt-6 bg-[#FFFF00] hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full transition-colors">
                                Save Changes
                            </button>
                        </div>
                    )}

                    {activeTab === 'account' && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-medium text-gray-900">Account Details</h3>
                            <p className="text-sm text-gray-500 mt-1">Manage your account information</p>

                            <div className="mt-6 space-y-5">
                                <div>
                                    <label className="block text-sm popmed font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Admin User"
                                        className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium popmed text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="admin@aspiring.edu"
                                        className="mt-1 popreg block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium popmed text-gray-700">Profile URL</label>
                                    <div className="mt-1 flex items-center space-x-3">
                                        <input
                                            type="text"
                                            defaultValue="Upload your profile picture"
                                            readOnly
                                            className="flex-1 popreg rounded-md border-gray-300 bg-gray-50 shadow-sm sm:text-sm h-10 px-3 border cursor-not-allowed"
                                        />
                                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="border-t pt-5">
                                    <label className="block text-sm font-medium popmed text-gray-700">Current Password</label>
                                    <input
                                        type="password"
                                        className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium popmed text-gray-700">New Password</label>
                                        <input
                                            type="password"
                                            className="mt-1 block popreg w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm popmed font-medium text-gray-700">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="mt-1 block w-full popreg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 px-3 border"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full transition-colors">
                                Update Account
                            </button>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-medium popmed text-gray-900">Notification Preferences</h3>
                            <p className="text-sm text-gray-500 popreg mt-1">Choose how you want to receive notifications</p>

                            <div className="mt-6 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm popmed font-medium text-gray-900">Email Notifications</h4>
                                        <p className="text-sm popreg text-gray-500">Receive notifications via email</p>
                                    </div>
                                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-400">
                                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium popmed text-gray-900">Push Notifications</h4>
                                        <p className="text-sm popreg text-gray-500">Receive push notifications in browser</p>
                                    </div>
                                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium popmed text-gray-900">Weekly Reports</h4>
                                        <p className="text-sm popreg text-gray-500">Receive weekly summary reports</p>
                                    </div>
                                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-400">
                                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                                    </button>
                                </div>
                            </div>

                            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full transition-colors">
                                Save Preferences
                            </button>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
                            <div>
                                <h3 className="text-lg font-medium popmed text-gray-900">Security Settings</h3>
                                <p className="text-sm popreg text-gray-500 mt-1">Manage your account security options</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium popmed text-gray-900">Two-Factor Authentication</h4>
                                <p className="text-sm text-gray-500 popreg mt-1">Add an extra layer of security to your account</p>
                                <button className="mt-3 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-3xl hover:bg-gray-50 transition-colors">
                                    Enable 2FA
                                </button>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium popmed text-gray-900">Active Sessions</h4>
                                <p className="text-sm popreg text-gray-500 mt-1">Manage your active login sessions</p>
                                <div className="mt-3 flex items-center justify-between p-3 border border-slate-500 rounded-2xl">
                                    <div>
                                        <p className='popmed'>Current Season</p>
                                        <p className="text-[12px] font-medium text-[#737373]">Chrome on Windows • Active now</p>
                                    </div>
                                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h4 className="text-sm font-medium text-red-600">Danger Zone</h4>
                                <p className="text-sm text-gray-500 mt-1">Irreversible actions for your account</p>
                                <button className="mt-3 border border-red-600 text-red-600 font-medium py-2 px-4 rounded-md hover:bg-red-50 transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;