import React from 'react'
import "./stylesheets/Navbar.css"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Layout, Menu, Input, Button, Flex, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Header } = Layout
const { Search } = Input
const { Title } = Typography

const Navbar = () => {

    return (
        <div>
            <Layout className={`layout__header`}>
                <Header className={`header`}>
                    <Link to={"/"}>
                        <div style={{ padding: 10 }}><Title style={{ color: "white" }}>Daraz</Title></div>
                    </Link>
                    <div style={{ paddingTop: 16, width: "50%" }}>
                        <Search
                            style={{ width: "100%" }}
                            placeholder='Search in Daraz'
                        />
                    </div>
                    <Flex gap={40}>
                        <Space size={15}>
                            <Button type='primary' size='middle'>Login</Button>
                            <Button type='dashed' size='middle'>Signup</Button>
                        </Space>
                        <ShoppingCartOutlined style={{ fontSize: "35px", cursor: "pointer" }} />
                    </Flex>
                </Header>
            </Layout>
        </div>
    )
}

export default Navbar
