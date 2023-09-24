import { Layout, Button } from "antd";
// import LearnGrid from "../../LearnGrid";
import "./LayoutDefault.scss"
import { SearchOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import logo from "../../../images/logo.png";
import logo2 from "../../../images/logo2.png";
import { useState } from "react";
import Notify from "../../Notify";
import MenuSider from "../../MenuSider";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

export default function LayoutDefault() {
    const [collapse, setCollapse] = useState(false);

    const handleClick = () => {
        setCollapse(!collapse);
    }
    return (
        <>
            <Layout>
                <header className="header">
                    <div className={collapse ? "header__img--collapsed" : "header__img"}>
                        <div className="header__logo">
                            <img src={collapse ? logo2 : logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse">
                                {collapse ? 
                                (<Button type="text" onClick={handleClick} icon={<MenuUnfoldOutlined />}/>) : 
                                (<Button type="text" onClick={handleClick} icon={<MenuFoldOutlined />}/>)}
                            </div>
                            <div className="search">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="header__nav-right">
                            <Notify />
                        </div>
                    </div>
                </header>

                <Layout>

                    <Sider className="sider" collapsed={collapse} theme="light">
                        <MenuSider />
                    </Sider>

                    <Content className="content">
                        <Outlet/>
                    </Content>


                </Layout>

            </Layout>
        </>
    )
}