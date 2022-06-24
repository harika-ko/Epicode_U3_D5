import { Component } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap"


class Gallery_2 extends Component {

    state = {
        movies: [],
        isLoading: true,
    }

    componentDidMount = () => {
        this.fetchMovies()
    }


    fetchMovies = async () => {
        try {
            const url = "http://www.omdbapi.com/?apikey=5246caa7&s=Lord%20of%20the%20Rings"

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
                alert("Something wrong with API")
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h3 className="heading">Lord of Rings Gallery</h3>
                <Container>
                    <Row>

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


export default Gallery_2