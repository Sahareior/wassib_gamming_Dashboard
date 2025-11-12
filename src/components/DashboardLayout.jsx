import React, { useState } from 'react';
import {
    PieChartOutlined,
} from '@ant-design/icons';
import {Avatar, Breadcrumb, Layout, Menu, theme} from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {FaSchool} from "react-icons/fa";
import {RiDashboardHorizontalLine, RiShoppingBag4Line} from "react-icons/ri";
import {GoLaw, GoPeople} from "react-icons/go";
import {FiBookOpen} from "react-icons/fi";
import {LuCrown, LuFileQuestion, LuNotepadText} from "react-icons/lu";
import {BiTask} from "react-icons/bi";
import {IoSettingsOutline} from "react-icons/io5";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return { key, icon, children, label };
}



const items = [
    getItem('Dashboard', '/dashboard', <RiDashboardHorizontalLine size={18} />),
    getItem('Students', '/students', <GoPeople  size={18}/>),
    getItem('Courses', '/courses', <FiBookOpen  size={18}/>),
    getItem('Quizs', '/quiz', <LuFileQuestion size={18} />),
    getItem('Task', '/task', <BiTask  size={18}/>),
    getItem('Manage Jobs', '/manage-jobs', <RiShoppingBag4Line  size={18}/>),
    getItem('Manage Schools', '/manage-schools', <FaSchool size={18} />),
    getItem('Manage Law Firms', '/manage-law-firms', <GoLaw  size={18}/>),
    getItem('Application Tracker', '/application-tacker', <LuNotepadText  size={18}/>),
    getItem('Premium', '/premium', <LuCrown  size={18}/>),
    getItem('Settings', '/settings', <IoSettingsOutline  size={18}/>),
];

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handelLogout = () => {
    // Implement logout functionality here
    navigate('/'); // Redirect to login page after logout
}

    const handleMenuClick = (e) => {
        navigate(e.key); // key corresponds to route path like '/dashboard'
    };

    return (
        <Layout className='relative' style={{ minHeight: '100vh' }}>
            <Sider className='w-[180%]' width={260} >
                <div className="demo-logo-vertical mt-[10vh] w-2/6 bg-white" />
                <div className='flex items-center top-8 left-4 absolute gap-2'>
                    <img className='w-[42px]'  src='/images/Container.png' />
                    <div>
                        <p className='popreg text-[16px]'>Aspiring</p>
                        <p className='text-[#737373] text-[12px]'>Admin Panel</p>
                    </div>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    items={items}
                    className='popreg text-[15px]'
                    onClick={handleMenuClick}

                />
                <div>
                    <button
                    onClick={handelLogout}
                        className='absolute bottom-4 left-4 w-11/12 py-3 bg-[#F7F7F7] text-black font-semibold rounded-xl mt-4 mb-6 hover:bg-red-50 hover:shadow-md transition-all duration-200'
                    style={{
                        boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A',
                    }}
                    >
                        Logout
                    </button>
                </div>
            </Sider>

            <Layout>
                <div className="flex justify-between items-center p-6 bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold text-[#CCCC00]">Aspiring School</p>
                        <input
                            className="px-4 py-2 border border-gray-200 rounded-3xl bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-96"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="font-semibold text-gray-800">Admin User</p>
                            <p className="text-sm text-gray-500">Administration</p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                                alt="Admin Avatar"
                                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                            />

                        </div>
                    </div>
                </div>
                <Content className='h-[80vh] overflow-y-auto' style={{ margin: '0 6px' }}>

                    <div
                        style={{
                            padding: 14,
                            minHeight: 360,

                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
