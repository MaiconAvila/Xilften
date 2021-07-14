import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { allMovies } from './workflow/movies-reducer';

const mapStateToProps = (state) => ({
  movies: state.moviesList.movies,
})

const mapDispatchToProps = (dispatch) => ({
  allMovies: (info) => {
    dispatch(allMovies(info))
  },
})

const Container = styled.div`
  background: #e6e1f4;
`;

const ContainerFilm = styled.div`
  display: flex;
  margin: 0 auto;
  ${'' /* padding: 5% 0; */}
  max-width: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bfb5e3;
`;

const Film = styled.div`
  margin-bottom: 5%;
  border: 10px solid #7159c1;
  border-radius: 5px;
`;

const ImgFilm = styled.img`
  width: 100%;
`;

const ContainerText = styled.div`
  margin: 2%;
`;

const ParagraphFilm = styled.p`
  max-width: 600px;
  margin-top: 2%;
`;


class App extends Component {

  componentDidMount() {
    axios({
      url:
        "https://api.themoviedb.org/3/tv/popular?api_key=07a910a730a2f36361bcbba38e7257a3",
      method: "get"
    }).then(response => {
      const list = response.data.results.map(item => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
        };
      });

      this.props.allMovies({
        movies: list,
      });
    });
  }

  render() {
    return (
      <Container>
        <ContainerFilm>
          {this.props.movies.map((item, index) =>
            <Film key={index}>
              <ImgFilm src={item.backdrop_path} />
              <ContainerText>
                <h1>
                  {item.original_title}
                </h1>
                <div>
                  {item.original_language}
                </div>
                <div>
                  {item.release_date}
                </div>
                <div>
                  {item.vote_average}
                </div>
                <div>
                  {item.popularity}
                </div>
                <ParagraphFilm>
                  {item.overview}
                </ParagraphFilm>
              </ContainerText>
              <ImgFilm src={item.poster_path} />
            </Film>
          )}
        </ContainerFilm>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
