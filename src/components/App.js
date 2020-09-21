import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {
  actionTvShow,
  actionMovies,
  actionSearchTv,
  actionSearchMovie,
  actionLoadMoreTv,
  actionLoadMoreMovies,
  actionRenderModal,
  actionToggle,
  actionValueSearch,
  actionId,
} from "../workflow/xilften-reducer";

const mapStateToProps = state => ({
  tvShow: state.xilften.tvShow,
  movies: state.xilften.movies,
  searchTv: state.xilften.searchTv,
  searchMovie: state.xilften.searchMovie,
  loadMoreTv: state.xilften.loadMoreTv,
  loadMoreMovies: state.xilften.loadMoreMovies,
  renderModal: state.xilften.renderModal,
  toggle: state.xilften.toggle,
  valueSearch: state.xilften.valueSearch
});

const mapDispatchToProps = dispatch => ({
  actionTvShow: info => {
    dispatch(actionTvShow(info));
  },
  actionMovies: info => {
    dispatch(actionMovies(info));
  },
  actionSearchTv: info => {
    dispatch(actionSearchTv(info));
  },
  actionSearchMovie: info => {
    dispatch(actionSearchMovie(info));
  },
  actionLoadMoreTv: info => {
    dispatch(actionLoadMoreTv(info));
  },
  actionLoadMoreMovies: info => {
    dispatch(actionLoadMoreMovies(info));
  },
  actionRenderModal: info => {
    dispatch(actionRenderModal(info));
  },
  actionToggle: info => {
    dispatch(actionToggle(info));
  },
  actionValueSearch: info => {
    dispatch(actionValueSearch(info));
  },
  actionId: info => {
    dispatch(actionId(info));
  },
});

const Container = styled.div`
  background: #333333;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0 3rem 0;
`;

const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0 3rem 0;
`;

const TitleSearch = styled.h1`
  margin: .5rem 0;
  font-size: 4rem;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 5.5rem;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 10px;
  }
`;

const Search = styled.div`
  width: 350px;
  display: flex;
  position: ${props => (props.renderModal ? "fixed" : "initial")};
  z-index: 4;
`;

const SearchLine = styled.div`
  display: inline-block;
  border-bottom: 1px solid #fff;
  width: 60%;
  margin-right: 10px;

  input {
    background: ${props => (props.renderModal ? "transparent" : "#333333")};
    border: none;
    outline: none;
    font-size: 1.5rem;
  }
`;

const Button = styled.label`
  background: #000;
  border-radius: 50px;
  padding: ${props => (props.toggle ? "0 0 0 2%" : "0 2% 0 0")};
  width: 7rem;
  height: 2rem;
  font-size: .7rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.toggle ? "row" : "row-reverse")};
  align-items: center;
  cursor: pointer;

  button {
    width: 3.5rem;
    height: 2rem;
    background: #fff;
    border-radius: 50px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

const ContainerMovies = styled.div`
  margin: 1.5rem;
  cursor: pointer;
`;

const ContainerTvShow = styled.div`
  margin: 1.5rem;
  cursor: pointer;
`;

const WidthCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LoadMore = styled.button`
  border: 1px solid #f26344;
  color: #f26344;
  font-weight: bold;
  font-size: 1rem;
  padding: 1% 3%;
  background: none;
  width: 125px;
  height: 3rem;
  cursor: pointer;
  outline: none;
  margin-bottom: 4rem;

  &:hover {
    border: 1px solid #fff;
    color: #fff;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 0 0 1.5rem 0;
`;

const TitleLabel = styled.h2`
  text-align: center;
  margin: 1.5rem 0;
`;

const TextLabel = styled.p`
  overflow: hidden;
  position: relative;
  line-height: 1.2rem;
  max-height: 3.5rem;

  &:before {
    content: '...';
    position: absolute;
    right: 0px;
    bottom: 0;
    padding: 0 0px 0 0.25em;
  }
`;

const Image = styled.img`
  width: 100%;

  &:hover {
    box-shadow: 0px 3px 40px -5px rgba(0, 0, 0, 0.63);
  }
`;

const Vote = styled.h2`
  font-size: .9rem;
  width: 10%;
  position: absolute;
  top: 19rem;
  left: 12.4rem;
  z-index: 2;
`;

const Heart = styled.div`
  position: absolute;
  top: 16.5rem;
  left: 11.5rem;
  font-size: 5rem;
  color: #f26344;
`;

const TvShow = styled.label`
  cursor: pointer;
  margin: 0 1rem 5rem 1rem;
  width: 16.5%;
  position: relative;
`;

const Movies = styled.label`
  cursor: pointer;
  margin: 0 1rem 5rem 1rem;
  width: 16.5%;
  position: relative;
`;

// ====== render modal ====== //

const ContainerRenderModal = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.63);
  z-index: 3;
`;

const ButtonRenderModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  width: 125px;
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
`;

const ContainerModalSearch = styled.div`
  width: 92%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    height: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 8px;
  }
`;

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 2rem;
`;

const ImgCardModal = styled.img``;

const TitleCardModal = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const DateCardModal = styled.div`font-size: 1rem;`;

class App extends Component {
  state = {};

  componentDidMount() {

    const moviedb = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      timeout: 35000,
      dataType: 'jsonp',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const apiKey = '07a910a730a2f36361bcbba38e7257a3';

    const movie = moviedb({
      method: 'get',
      url: `/movie/popular?api_key=${apiKey}`,

    }).then(response => {
      const movies = response.data.results.map(item => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
        };
      });

      this.props.actionMovies({
        movies: movies
      });
    });

    const show = moviedb({
      method: 'get',
      url: `/tv/popular?api_key=${apiKey}`,

    }).then(response => {
      const tvShow = response.data.results.map(item => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
        };
      });

      this.props.actionTvShow({
        tvShow: tvShow
      });
    });
  }

  handleChange = ev => {
    const { movies, tvShow } = this.props;

    const value = ev.target.value;

    this.props.actionValueSearch({
      valueSearch: value
    });

    this.props.actionRenderModal({
      renderModal: value === "" ? false : true
    });

    const searchMovie = movies.filter(item => {
      return !item.title.toLowerCase().indexOf(value.toLowerCase());
    });

    const searchTv = tvShow.filter(item => {
      return !item.name.toLowerCase().indexOf(value.toLowerCase());
    });

    if (value === "") {
      this.props.actionSearchTv({ searchTv: [] });
      this.props.actionSearchMovie({ searchMovie: [] });
    } else {
      this.props.actionSearchTv({ searchTv: searchTv });
      this.props.actionSearchMovie({ searchMovie: searchMovie });
    }
  };

  handleToggle = () => {
    const { toggle } = this.props;

    this.props.actionToggle({
      toggle: !toggle
    });
  };

  handleLoadMoreTv = () => {
    const { loadMoreTv } = this.props;

    this.props.actionLoadMoreTv({
      loadMoreTv: loadMoreTv + 5
    });
  };

  handleLoadMoreMovies = () => {
    const { loadMoreMovies } = this.props;
    this.props.actionLoadMoreMovies({
      loadMoreMovies: loadMoreMovies + 5
    });
  };

  handleExit = () => {
    this.props.actionSearchTv({
      searchTv: []
    });

    this.props.actionSearchMovie({
      searchMovie: []
    });

    this.props.actionRenderModal({
      renderModal: false
    });

    this.props.actionValueSearch({ valueSearch: "" });
  };

  handleGetId = (item) => {
    this.props.actionId( item.id );
  }

  renderModal = () => {
    const { searchTv, searchMovie, toggle } = this.props;

    const cards = toggle ? searchMovie : searchTv;

    return (
      <ContainerRenderModal>
        <ButtonRenderModal onClick={this.handleExit}>Fechar</ButtonRenderModal>
        <ContainerModalSearch>
          {cards.map((item, index) =>
            <CardModal key={index}>
              <Link 
                to="/details"
                style={{ textDecoration: 'none' }} onClick={() => this.handleGetId(item)}>
                <ImgCardModal src={item.backdrop_path} />
                <div>
                  <TitleCardModal>
                    {!toggle ? item.name : item.title}
                  </TitleCardModal>
                  <DateCardModal>
                    {!toggle ? item.first_air_date : item.original_title}
                  </DateCardModal>
                </div>
              </Link>
            </CardModal>
          )}
        </ContainerModalSearch>
      </ContainerRenderModal>
    );
  };

  render() {
    const {
      toggle,
      movies,
      tvShow,
      loadMoreTv,
      loadMoreMovies,
      valueSearch,
      renderModal
    } = this.props;

    const newTvShow = tvShow.slice(0, loadMoreTv);
    const newMovies = movies.slice(0, loadMoreMovies);

    return (
      <Container>
        <ContainerSearch>
          <TitleSearch>
            <span>x</span>ilfte<span>n</span>
          </TitleSearch>
          <Search renderModal={renderModal}>
            <SearchLine renderModal={renderModal}>
              <input
                value={valueSearch}
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
              />
            </SearchLine>
            <Button renderModal={renderModal} toggle={toggle}>
              {toggle ? <span>Tv Show</span> : <span>Movies</span>}
              <button onClick={this.handleToggle} />
            </Button>
          </Search>
        </ContainerSearch>
        <ContainerTvShow>
          <Title>Tv Show</Title>
          <WidthCard>
            {newTvShow.map((item, index) =>
              <TvShow key={index}>
                <Link 
                  to="/details"
                  style={{ textDecoration: 'none' }} onClick={() => this.handleGetId(item)}>
                  <Image src={item.poster_path} />
                  <Vote>
                    {item.vote_average}
                  </Vote>
                  <Heart>♥</Heart>
                  <TitleLabel>
                    {item.name}
                  </TitleLabel>
                  <TextLabel>
                    {item.overview}
                  </TextLabel>
                </Link>
              </TvShow>
            )}
          </WidthCard>
        </ContainerTvShow>
        {loadMoreTv === 20
          ? null
          : <span>
              <LoadMore onClick={this.handleLoadMoreTv}>Load More</LoadMore>
            </span>}
        <ContainerMovies>
          <Title>Movies</Title>
          <WidthCard>
            {newMovies.map((item, index) =>
              <Movies key={index}>
                <Link 
                  to="/details" 
                  style={{ textDecoration: 'none' }} onClick={() => this.handleGetId(item)}>
                  <Image src={item.poster_path} />
                  <Vote>
                    {item.vote_average}
                  </Vote>
                  <Heart>♥</Heart>
                  <TitleLabel>
                    {item.title}
                  </TitleLabel>
                  <TextLabel>
                    {item.overview}
                  </TextLabel>
                </Link>
              </Movies>
            )}
          </WidthCard>
        </ContainerMovies>
        {loadMoreMovies === 20
          ? null
          : <span>
              <LoadMore onClick={this.handleLoadMoreMovies}>Load More</LoadMore>
            </span>}
        {renderModal && this.renderModal()}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
