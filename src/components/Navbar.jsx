import { useEffect, useState } from 'react'
import "./stylesheets/Navbar.css"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Drawer, Input, Button, Flex, Space, Typography, Card, InputNumber, Avatar, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity, emptyCart } from "../features/cart/cartSlice"
import { login, logout } from '../features/user/userSlice'
import axios from 'axios'
import { selectCart, selectUser } from '../app/selectors'

const { Header } = Layout
const { Search } = Input
const { Title } = Typography

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const users = useSelector(selectUser)
    const cart = useSelector(selectCart)
    const items = cart.cartItems
    const grandTotal = cart.grandTotal
    const user = users.user

    const dispatch = useDispatch()

    async function handleLogin() {
        const result = await axios.post(`https://dummyjson.com/auth/login`, {
            username: 'kminchelle',
            password: '0lelplR',
            expiresInMins: 30,
        })
        dispatch(login(result.data))
        localStorage.setItem("user", JSON.stringify(result.data))
    }

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (userData) {
            dispatch(login(JSON.parse(userData)))
        }
    }, [])

    return (
        <div>
            <Layout className={`layout__header`}>
                <Header className={`header`}>
                    <Link to={"/"}>
                        <div className='header__link'><Title className='header__link__title'>Daraz</Title></div>
                    </Link>
                    <div className='header__search__wrapper'>
                        <Search
                            className='header__search'
                            placeholder='Search in Daraz'
                        />
                    </div>
                    <Flex gap={40}>
                        <Space size={15}>
                            {
                                user ? (
                                    <>
                                        <Avatar shape='square' size={"large"} icon={<UserOutlined />} />
                                        <Link to={"/order"}>
                                            <Button type='primary' size='middle'>Make Order</Button>
                                        </Link>
                                        <Button type='dashed' size='middle' onClick={() => {
                                            dispatch(logout())
                                            dispatch(emptyCart())
                                            localStorage.removeItem("user")
                                        }}>Log Out</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button type='primary' size='middle' onClick={handleLogin}>Login</Button>
                                        <Button type='dashed' size='middle'>Signup</Button>
                                    </>

                                )
                            }
                        </Space>
                        <Badge count={items.length} className='header__badge'>
                            <ShoppingCartOutlined className='header__badge__cart' onClick={() => { setOpen(true) }} />
                        </Badge>
                    </Flex>
                </Header>
                {/* cart */}
                <Drawer title={"Cart"} onClose={() => { setOpen(false) }} open={open}
                    extra={
                        <Space>
                            <Typography.Title level={4}>
                                Grand Total: {grandTotal}
                            </Typography.Title>
                        </Space>
                    }
                >
                    {items?.map((item, i) => {
                        return (
                            <Card title={item.title} key={i + 2} hoverable>
                                <Space size={'small'}>
                                    <Typography.Text className='cart__item__price'>
                                        Price: {item.price}
                                    </Typography.Text>
                                    <Typography.Text>
                                        Quantity: <InputNumber
                                            size='small'
                                            onChange={(val) => {
                                                // console.log(val)
                                                dispatch(updateQuantity({ ...item, quantity: val }))
                                            }}
                                            defaultValue={1}
                                            min={1}
                                            max={10} />
                                    </Typography.Text>
                                    <Button id={item.id} danger size='small' onClick={() => { dispatch(removeItem(item)) }}>
                                        X
                                    </Button>
                                </Space>
                            </Card>
                        )
                    })}
                </Drawer>
            </Layout>
        </div >
    )
}

export default Navbar
