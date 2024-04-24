import { ShoppingCartOutlined } from '@ant-design/icons'
import { Carousel, Row, Col, Typography, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import axios from 'axios'

const Product = () => {

    const [data, setData] = useState([])
    const { id } = useParams()
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart)

    function handleClick() {
        dispatch(addItem(data))
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((result) => {
                setData(result.data)
            })
    }, [])


    return (
        <div style={{ width: "90%", padding: 40, height: "100vh" }}>
            <Row justify={"space-around"} align={"middle"}>
                <Col span={12} style={{ padding: 20 }}>
                    <Typography.Title>{data.title}</Typography.Title>
                    <Typography.Text>{data.description + "."}</Typography.Text>
                    <Typography.Title level={5}>Brand: {data.brand}</Typography.Title>
                    <Typography.Title level={5}>Category: {data.category}</Typography.Title>
                    <Typography.Title level={5}>Stock: {data.stock}</Typography.Title>
                    <Typography.Title level={5}>Discount: {data.discountPercentage + "%"}</Typography.Title>
                    <Typography.Title level={3}>Price: {data.price}</Typography.Title>
                    <Button type='primary' block onClick={handleClick}>Add to Cart<ShoppingCartOutlined style={{ fontSize: 20 }} /></Button>
                </Col>
                <Col span={12}>
                    <Carousel autoplay autoplaySpeed={2000}>
                        {data?.images?.map((img, i) => {
                            return (
                                <div key={"img-" + i} >
                                    <img src={img} alt={"carousalImage" + i} width={600} height={500} />
                                </div>
                            )
                        })}
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}

export default Product
