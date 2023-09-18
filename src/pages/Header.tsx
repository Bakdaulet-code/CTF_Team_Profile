import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { FC, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

const items: MenuProps['items'] = [
    {
        label: 'Main page',
        key: '/',
        icon: <MailOutlined />,
    },
    {
        label: 'About page',
        key: 'about',
        icon: <MailOutlined />,
    },
];

export const Header: FC = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
        setCurrent(e.key);
    };


    return (
        <div style={{ height: "90vh" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: 100, marginRight: 100 }}>
                <MailOutlined style={{ fontSize: 30, color: "white" }} />
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} prefix={"TEST"} />
            </div>
            <Outlet />
        </div>
    )
}