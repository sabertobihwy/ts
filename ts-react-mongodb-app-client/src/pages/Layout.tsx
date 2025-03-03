import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Sider, Content } = Layout;
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem(<NavLink to='/'>首页</NavLink>, '1'),
    getItem(<NavLink to='/movie'>MovieList</NavLink>, '2'),
    getItem(<NavLink to='/movie/add'>add</NavLink>, '3'),
    getItem(<NavLink to='/movie/edit/12314131'>edit</NavLink>, '4')
];


const _Layout: React.FC = () => {
    return (
        <Layout className='container'>
            <Header className="header">Maoyan Movie</Header>
            <Layout>
                {/* <Sider className="sider">left sidebar</Sider> */}
                <Sider className="sider">
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Content className='content'><Outlet /></Content>
                {/* <Sider className="sider">right sidebar</Sider> */}
            </Layout>
        </Layout>

    )
}

export default _Layout