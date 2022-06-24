import { Component } from "react"
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap"


class ProfilePage extends Component {
    render() {
        return (

            <div>
                <h1 className="main-head">Profile Page</h1>
                <img src="https://pbs.twimg.com/media/E4a2Tc1XMAAEcF2?format=png&name=4096x4096" style={{ height: "50px", width: "100px" }} alt="netflix logo"></img>
                <Container>
                    <Row>
                        <Col>
                            <h1>Edit Profile</h1>
                            <hr />
                            <Col style={{ display: "flex" }}>
                                <img src="https://strive.school/favicon.ico" style={{ height: "100px", width: "100px" }} alt="Strive logo" />
                                <Col>
                                    <button className="strive-button">Strive Student</button>
                                    <p>Language:</p>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            English
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item >German</Dropdown.Item>
                                            <Dropdown.Item >Italian</Dropdown.Item>
                                            <Dropdown.Item >Spanish</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Col>
                            <hr />
                            <p>Maturity Settings:</p>
                            <button className="maturity-button">ALL MATURITY RATINGS</button>
                            <p>Show titles of all maturity ratings for this profile.</p>
                            <button className="edit-button">EDIT</button>
                            <hr />
                            <p>AutoPlay Controls</p>
                            <Form.Group>
                                <Form.Check type="checkbox" label="Autoplay next Episode in a series on all devices." checked />
                            </Form.Group>

                            <Form.Group>
                                <Form.Check type="checkbox" label="Autoplay previews while browsing on all devices." checked />
                            </Form.Group>

                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ marginBottom: "1rem" }}>
                            <button className="save-button">SAVE</button>
                            <button className="cancel-button">CANCEL</button>
                            <button className="delete-profile">DELETE PROFILE</button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default ProfilePage