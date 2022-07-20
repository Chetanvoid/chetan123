import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap"

const CardItem = ({ product, addInCart }) => {
    return (
        <>
            <Card className="mt-2 mb-1">
                <CardImg top
                    height="250"
                    width="100%"
                    src={product.smallImage} />


            </Card>

            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="" secondary>price: RS {product.productPrice}</CardText>
                <Button color="success" onClick={() => {
                    addInCart(product)
                }}>Buy Now</Button>
            </CardBody>
        </>
    )
}

export default CardItem;