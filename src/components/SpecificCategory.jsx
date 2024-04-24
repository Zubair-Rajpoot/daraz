import { Flex, Card, Typography, Rate, Layout } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
const { Meta } = Card

const SpecificCategory = () => {
    const location = useLocation();
    const keyword = location.state

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function category() {
            const result = await axios.get(`https://dummyjson.com/products/category/${keyword}`)
            setProducts(result.data.products)
        }
        category()
    }, [])


    return (
        <div style={{ padding: 20 }}>
            <Typography.Title style={{ textAlign: 'center', padding: 50 }}>
                {`Category: ${keyword}`}
            </Typography.Title>
            <Flex wrap="wrap" justify="center" gap={25}>
                {products.map((prod, i) => {
                    return (
                        <Link to={`/product/${prod.id}`} state={prod} key={i}>
                            <Card
                                hoverable
                                cover={<img alt={`img-${i}`} src={prod.thumbnail} style={{ backgroundSize: "cover" }} />}
                                style={{ width: 400 }}
                            >
                                <Meta description={prod.description} title={prod.title} />
                                <br />
                                <Flex gap={2} vertical>
                                    <Typography.Text>Rating: <Rate allowHalf defaultValue={prod.rating} /></Typography.Text>
                                    <Typography.Text>Stock: {prod.stock}</Typography.Text>
                                    <Typography.Text>Price: {prod.price}</Typography.Text>
                                    <Typography.Text delete>Discount: {prod.discountPercentage + "%"}</Typography.Text>
                                </Flex>
                            </Card>
                        </Link>
                    )
                })}
            </Flex>
        </div>
    )
}

export default SpecificCategory
