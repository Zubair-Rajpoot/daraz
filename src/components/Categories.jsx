import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Flex, Card, Skeleton } from "antd"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCategories } from "../features/home/homeSlice";
import { selectHome } from "../app/selectors"
const { Title } = Typography

const Categories = () => {
    const [categories, setCategories] = useState([])
    const home = useSelector(selectHome)
    const categoriesData = home.categories
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoriesData.length < 1) {
            axios.get("https://dummyjson.com/products/categories")
                .then((res) => {
                    setCategories(res.data)
                    dispatch(addCategories(res.data))
                })
        } else {
            setCategories(categoriesData)
        }
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
