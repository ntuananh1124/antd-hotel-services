import { UnorderedListOutlined, BookOutlined, ContainerOutlined, PlusCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./MenuSider.scss";

export default function MenuSider() {
    const items = [
        {
            key: "menu-1",
            label: <Link to="/">Menu 1</Link>,
            icon: <DashboardOutlined />,
            children: [
                {
                    key: "menu-1-1",
                    label: "Menu 1 - 1"
                },
                {
                    key: "menu-1-2",
                    label: "Menu 1 - 2"
                },
                {
                    key: "menu-1-3",
                    label: "Menu 1 - 3"
                }
            ]
        },
        {
            key: "menu-2",
            label: "Menu 2",
            icon: <ContainerOutlined />,
            children: [
                {
                    key: "menu-2-1",
                    label: "Menu 2 - 1"
                },
                {
                    key: "menu-2-2",
                    label: "Menu 2 - 2"
                }
            ]
        },
        {
            key: "book-room",
            label: <Link to="/book-room" >Book Room</Link>,
            icon: <BookOutlined />
        },
        {
            key: "create-room",
            label: <Link to="/create-room" >Create Room</Link>,
            icon: <PlusCircleOutlined />
        },
        {
            key: "list-room",
            label: <Link to="/room-list" >Room List</Link>,
            icon: <UnorderedListOutlined />
        }
    ]

    return (
        <>
            <Menu mode="inline" items={items}/>
        </>
    )
}