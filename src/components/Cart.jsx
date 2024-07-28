import { Button, Image, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((total, product) => {
        total += product.price * product.quantity;
        return total
    }, 0);

    return (
        <Container style={{ padding: "80px 0 30px" }}>
            <h1>Welcome To Your Cart</h1>
            <Button variant="danger" style={{ margin: "20px 0" }} onClick={() => {
                dispatch(clear())
            }}>Clear Cart</Button>
            <h3>Total Price : {totalPrice.toFixed(2)} $</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td><Image src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} /></td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><Button variant='danger' onClick={() => {
                                    dispatch(deleteFromCart(index))
                                }}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Cart
