import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Col, Row, Flex, Card, Layout, Rate } from "antd"
const { Title } = Typography
const { Meta } = Card
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            const result = await axios.get("https://dummyjson.com/products?limit=15")
            // console.log(result.data.products)
            setProducts(result.data.products)
        }
        fetchProducts()
    }, [])
    return (
        <Layout>
            <Layout.Content>
                <HeroSection />
                <Categories />
                <Title level={2} style={{ textAlign: "center", padding: 20 }}>Products</Title>
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
            </Layout.Content>
            <Layout>
                <Layout.Footer style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                    DARAZ PAKISTAN ©{new Date().getFullYear()} All Rights Reserved
                </Layout.Footer>
            </Layout>
        </Layout>

    )
}

export default HomePage
