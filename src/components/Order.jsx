import { Table, Typography, Row, Col, Input, Divider, Button, Layout } from "antd"
import { useSelector } from "react-redux";
import { selectCart, selectUser } from "../app/selectors"
import { useEffect } from "react";
import "./stylesheets/Order.css"

const Order = () => {

    const cart = useSelector(selectCart)
    const users = useSelector(selectUser)

    const items = cart.cartItems
    const bill = cart.grandTotal
    const user = users.user

    useEffect(() => {
        items.map((item, index) => {
            return { ...item, key: index + 1 }
        })
    }, [])

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'name',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
    ];

    return (
        <div className="order">
            <Typography.Title className="order__title" level={2}>
                Make Your Order
            </Typography.Title>
            <Table
                columns={columns}
                dataSource={items}
                pagination={{ pageSize: 6 }}
                bordered
                footer={() => `Total Bill: ${bill}`}
            />
            <Divider>
                <Typography.Title className="order__title" level={4}>
                    Required Information
                </Typography.Title>
            </Divider>

            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col span={12} className="order__col">
                    <Typography.Text>First Name</Typography.Text>
                    <Input className="order__input" value={user?.firstName} readOnly />
                </Col>
                <Col span={12} className="order__col">
                    <Typography.Text>Last Name</Typography.Text>
                    <Input className="order__input" value={user?.lastName} readOnly />
                </Col>
            </Row>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col span={12} className="order__col">
                    <Typography.Text>Username</Typography.Text>
                    <Input className="order__input" value={user?.username} readOnly />
                </Col>
                <Col span={12} className="order__col">
                    <Typography.Text>Email</Typography.Text>
                    <Input className="order__input" value={user?.email} readOnly />
                </Col>
            </Row>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col span={12} className="order__col">
                    <Typography.Text>Gender</Typography.Text>
                    <Input className="order__input" value={user?.gender} readOnly />
                </Col>
                <Col span={12} className="order__col">
                    <Typography.Text>Address</Typography.Text>
                    <Input.TextArea required className="order__input" />
                </Col>
            </Row>
            <Row justify={"center"} align={"middle"} className="order__row">
                <Col span={4} className="order__col--submit">
                    <Button type="primary" block >Submit</Button>
                </Col>
            </Row>
            <Divider />
            <Layout>
                <Layout.Footer style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                    DARAZ PAKISTAN ©{new Date().getFullYear()} All Rights Reserved
                </Layout.Footer>
            </Layout>
        </div>
    )
}

export default Order
