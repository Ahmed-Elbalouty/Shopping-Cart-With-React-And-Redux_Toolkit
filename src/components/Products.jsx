import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';

function Products() {

    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Container style={{ padding: "80px 0 30px" }}>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} style={{ marginBottom: "20px" }}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={product.image} style={{ height: "300px" }} />
                            <Card.Body>
                                <Card.Title>{product.title.slice(0, 18)}</Card.Title>
                                <Card.Text>
                                    {product.description.slice(0, 70)}
                                </Card.Text>
                                <Card.Text>
                                    {product.price} $
                                </Card.Text>
                                <Button variant="primary" onClick={() => {
                                    dispatch(addToCart(product))
                                }}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products
