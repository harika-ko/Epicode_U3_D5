import { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img className="logo" src="https://pbs.twimg.com/media/E4a2Tc1XMAAEcF2?format=png&name=4096x4096"></img></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">TV Shows</Nav.Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My List</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavBar