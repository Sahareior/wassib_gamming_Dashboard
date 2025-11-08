import React, { useState } from 'react';
import {
    PieChartOutlined,
} from '@ant-design/icons';
import {Avatar, Breadcrumb, Layout, Menu, theme} from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {FaSchool} from "react-icons/fa";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return { key, icon, children, label };
}

const items = [
    getItem('Dashboard', '/dashboard', <PieChartOutlined />),
    getItem('Students', '/students', <FaSchool />),
    getItem('Courses', '/courses', <FaSchool />),
    getItem('Quizs', '/quiz', <FaSchool />),
    getItem('Task', '/task', <FaSchool />),
    getItem('Manage Jobs', '/manage-jobs', <FaSchool />),
    getItem('Manage Schools', '/manage-schools', <FaSchool />),
    getItem('Manage Law Firms', '/manage-law-firms', <FaSchool />),
    getItem('Application Tracker', '/application-tacker', <FaSchool />),
    getItem('Premium', '/premium', <FaSchool />),
    getItem('Settings', '/settings', <FaSchool />),
];

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        navigate(e.key); // key corresponds to route path like '/dashboard'
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical mt-[10vh] bg-white" />
                <Menu
                    theme="light"
                    mode="inline"
                    items={items}
                    onClick={handleMenuClick}

                />
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
                                src="/path-to-avatar.jpg"
                                alt="Admin Avatar"
                                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                            />

                        </div>
                    </div>
                </div>
                <Content className='h-[80vh] overflow-y-auto' style={{ margin: '0 16px' }}>

                    <div
                        style={{
                            padding: 24,
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
