import { Component } from "react";
import { Card, Container, Row, Col, Spinner, Alert } from "react-bootstrap"

class Gallery extends Component {

    state = {
        movies: [],
        isLoading: true,
        errMessage: "",
    }

    componentDidMount = () => {
        this.fetchMovies()
    }


    fetchMovies = async () => {
        try {
            const url = `http://www.omdbapi.com/?apikey=5246caa7&s=${this.props.name}`

            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                this.setState(
                    {
                        movies: data.Search,
                        isLoading: false,
                    }
                )
            } else {
                const message = await response.text()
                this.setState({ ...this.state, isLoading: false, errMessage: message })
            }
        } catch (error) {
            this.setState({ ...this.state, isLoading: false, errMessage: "Error Occured" })
        }
    }
    render() {
        return (
            <div>
                <h3 className="heading">{this.props.title} Gallery</h3>
                <Container>
                    <Row>

                        {this.state.errMessage && <Alert variant="danger">{this.state.errMessage}</Alert>}

                        {this.state.isLoading && (
                            <Spinner animation="grow" />
                        )}

                        {this.state.movies.slice(0, 4).map(movie => (
                            <Col sm={6} md={3} key={movie.imdbID}>
                                <Card className="Cards" style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={movie.Poster} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Gallery