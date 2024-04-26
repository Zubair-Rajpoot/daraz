import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Flex, Card, Layout, Rate } from "antd"
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../features/home/homeSlice";
import { selectHome } from "../app/selectors";

const { Title } = Typography
const { Meta } = Card

const HomePage = () => {
    const [products, setProducts] = useState([])
    const home = useSelector(selectHome)
    const productsData = home.products
    const dispatch = useDispatch()

    async function fetchProducts() {
        const result = await axios.get("https://dummyjson.com/products?limit=15")
        setProducts(result.data.products)
        dispatch(addProducts(result.data.products))
    }

    useEffect(() => {
        if (productsData.length < 1) {
            fetchProducts()
        } else {
            setProducts(productsData)
        }
    }, [])

    return (
        <Layout>
            <Layout.Content>
                <HeroSection />
                <Categories />
                <Title level={2} className="homepage__title" style={{ textAlign: "center", padding: 20 }}>Products</Title>
                <Flex wrap="wrap" justify="center" gap={25}>
                    {products.map((prod, i) => {
                        return (
                            <Link to={`/product/${prod.id}`} state={prod} key={i}>
                                <Card
                                    hoverable
                                    cover={<img alt={`img-${i}`} src={prod.thumbnail} />}
                                    className="homepage__card"
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
                <Layout.Footer className="homepage__footer" style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                    DARAZ PAKISTAN ©{new Date().getFullYear()} All Rights Reserved
                </Layout.Footer>
            </Layout>
        </Layout>

    )
}

export default HomePage
