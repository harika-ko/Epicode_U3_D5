import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap"

class Gallery extends Component {

    state = {
        movies: []
    }

    componentDidMount = () => {
        this.fetchMovies()
    }


    fetchMovies = async () => {
        try {
            const url = "http://www.omdbapi.com/?apikey=5246caa7&s=harry%20potter"

            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                this.setState(
                    {
                        movies: data.Search
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
                <h3>Harry Potter Gallery</h3>
                <Container>
                    <Row>

                        {this.state.movies.slice(0, 4).map(movie => (
                            <Col md={3} key={movie.imdbID}>
                                <Card style={{ width: '10rem' }}>
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