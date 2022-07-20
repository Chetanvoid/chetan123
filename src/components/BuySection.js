import { useState, useEffect } from "react";
import axios from "axios";
import { faker } from '@faker-js/faker';
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";

// const apiKey = "INSERT_YOUR_KEY_HERE"

// const url = "https://api.pexels.com/v1/search?qurey=laptop&per_page=6&page=1"
const localurl = "https://api.jsonserve.com/OeRP1H"

const BuySection = ({ addInCart }) => {
    const [product, setProduct] = useState([])

    // const fetchPhotos = async () =>{
    //     const response = await Axios.length(url, {
    //      header:{
    //         Authorization: apiKey
    //      }
    //     })

    const fetchPhotos = async () => {
        const { data } = await axios.get(localurl);

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.random.word(),
            productPrice: faker.commerce.price(),
            id: faker.datatype.uuid()
        }));

        setProduct(allProduct);
    };



    useEffect(() => {
        fetchPhotos()
    }, [])

    return (
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => {
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addInCart} />
                    </Col>
                })}
            </Row>
        </Container>
    )
};


export default BuySection;