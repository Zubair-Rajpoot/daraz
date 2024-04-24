import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Flex, Card, Skeleton } from "antd"
import { Link } from "react-router-dom";
const { Title } = Typography

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then((res) => {
                setCategories(res.data)
            })
    }, [])
    return (
        <div>
            <Title level={2} style={{ textAlign: "center", padding: 20 }}>Categories</Title>
            <Flex wrap="wrap" justify="center" gap={25}>
                {categories ? categories.map((cat, i) => {
                    return (
                        <Link to={`/category`} key={i} state={cat}>
                            <Card hoverable >{cat}</Card>
                        </Link>
                    )
                }) : <Skeleton loading />}
            </Flex>
        </div>
    )
}

export default Categories
