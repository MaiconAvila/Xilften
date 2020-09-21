import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { Button } from '../stories/Button';

import {
  actionDetails,
  actionId,
  actionVideoDetails,
  actionImageDetails,
  actionSeasons,
  actionSeasonNumber,
  actionSeasonDetails,
  actionEpisodes
} from "../workflow/xilften-reducer";

const mapStateToProps = state => ({
  id: state.xilften.id,
  details: state.xilften.details,
  videoDetails: state.xilften.videoDetails,
  imageDetails: state.xilften.imageDetails,
  seasons: state.xilften.seasons,
  seasonNumber: state.xilften.seasonNumber,
});

const mapDispatchToProps = dispatch => ({
  actionDetails: info => {
    dispatch(actionDetails(info));
  },
  actionId: info => {
    dispatch(actionId(info));
  },
  actionVideoDetails: info => {
    dispatch(actionVideoDetails(info))
  },
  actionImageDetails: info => {
    dispatch(actionImageDetails(info))
  },
  actionSeasons: info => {
    dispatch(actionSeasons(info))
  },
  actionSeasonNumber: info => {
    dispatch(actionSeasonNumber(info))
  },
  actionSeasonDetails: info => {
    dispatch(actionSeasonDetails(info))
  },
  actionEpisodes: info => {
    dispatch(actionEpisodes(info))
  },
});

const ContainerDetails = styled.div`
  background: #333333;
  width: 100%;
  min-height: 100vh;
  position:relative;
`;

const ButtonRenderModal = styled.button`
  position: fixed;
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
  z-index: 5;
  outline: none;

    &:hover {
      background: #fff;
      color: #f26344;
      border: 1px solid #f26344;
    }
`;

const Card = styled.div`
background-image: url(${props => (props.backgroundImage)});
background-repeat: no-repeat;
background-size: 105%;
animation: gradient 15s linear;

  @keyframes gradient {
    0% {
      background-size: 100%;
    }
    25% {
      background-size: 102%;
    }
    50% {
      background-size: 103%;
    }
    75% {
      background-size: 104%;
    }
    100% {
      background-size: 105%;
    }
  }  
`;

const BlackLayer = styled.div`
  background: rgba(0, 0, 0, 0.80);
`;

const CardCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: ${props => (props.isTvShow ? '0 auto 15rem auto' : '0 auto')};
`;

const Image = styled.img`
  width: 345px;
  margin: 0 1rem;

  &:hover {
    width: 350px;
    box-shadow: 0px 3px 40px -5px rgba(250, 250, 250, 0.63);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

const Trailer = styled.div`
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0;

  .youtube {
    box-shadow: 0px -1px 26px -4px rgba(0,0,0,0.47);
    border: 10px solid #fff;
    margin-bottom: 8rem;
  }
`;

const TitleTrailer = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContainerImage = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  div {
  display: flex;
  width: 253px;
  overflow: hidden;
  margin: .2rem;

    &:hover {
      box-shadow: 0px 3px 40px -5px rgba(0, 0, 0, 0.63);
    }
  }
`;

const ImageTrailer = styled.img`
  max-width: 100%;
	transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ContainerSeason = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSeason = styled.h2`
  font-size: 2.5rem;
  margin: 0 2rem;
  text-align: center;
`;

const Season = styled.div`
  display: flex;
  width: 250px;
  overflow: hidden;
  margin: 1rem .5rem 2rem .5rem;

    &:hover {
      box-shadow: 0px 3px 40px -5px rgba(0, 0, 0, 0.63);
    }
`;

class Details extends Component {

  componentDidMount() {
    const moviedb = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      timeout: 35000,
      dataType: "jsonp",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const apiKey = "07a910a730a2f36361bcbba38e7257a3";

    const movieDetails = moviedb({
      method: "get",
      url: `/movie/${this.props.id}?api_key=${apiKey}`
    }).then(movie => {
      this.props.actionDetails( movie.data );
    });

    const tvShowDetails = moviedb({
      method: "get",
      url: `/tv/${this.props.id}?api_key=${apiKey}`
    }).then(tvShow => {
      this.props.actionDetails( tvShow.data );
    });

    const videoDetails = moviedb({
      method: 'get',
      url: `/movie/${this.props.id}/videos?api_key=${apiKey}`
    }).then((video) => {
      // console.log(video.data)

      // const newVideo = ;
      // console.log(newVideo)

    this.props.actionVideoDetails( video.data.results[0].key );
    })

    const imageDetails = moviedb({
      method: 'get',
      url: `/movie/${this.props.id}/images?api_key=${apiKey}`
    }).then((image) => {
    this.props.actionImageDetails( image.data.backdrops );
    })

    const seasons = moviedb({
      method: "get",
      url: `/tv/${this.props.id}?api_key=${apiKey}`
    }).then(seasons => {
      this.props.actionSeasons( seasons.data.seasons );
    });
  }

  handleExit = () => {
    this.props.actionDetails({ details: [] });
    this.props.actionId({ id: [] });
    this.props.actionVideoDetails({ videoDetails: [] });
    this.props.actionSeasonDetails({ seasonDetails: [] });
  };

  handleSeasonDetails = (item) => {
    this.props.actionSeasonNumber( item.season_number )
  }

  render() {
    const { details, videoDetails, imageDetails } = this.props;

    const backdrop_path = `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`;

    const poster_path = `https://image.tmdb.org/t/p/w500${details.poster_path}`;

    return (
      <ContainerDetails>
        <Link 
          to="/"
          style={{ textDecoration: 'none' }} onClick={this.handleExit}>
          <ButtonRenderModal>Voltar</ButtonRenderModal>
          <Button>I'm Button</Button>
        </Link>
        <Card backgroundImage={backdrop_path}>
          <BlackLayer>
            <CardCenter isTvShow={details.name}>
              <Image src={poster_path} />
              <Text>
                <h3>{details.first_air_date || details.release_date}</h3>
                <Title>{details.name || details.title}</Title>
                <Paragraph>{details.overview}</Paragraph>
              </Text>
            </CardCenter>
          </BlackLayer>
        </Card>
        {details.title 
        ? <Trailer>
            <TitleTrailer>Trailer</TitleTrailer>
            <YouTube className="youtube" videoId={videoDetails}/>
            <TitleTrailer>Cenas</TitleTrailer>
            <ContainerImage>
                {imageDetails.slice(0, 12).map(item => 
                <div>
                  <ImageTrailer src={`https://image.tmdb.org/t/p/w500${item.file_path}`}/>
                </div>
                )}
            </ContainerImage>
          </Trailer>
        : <ContainerSeason>
          {this.props.seasons.map(item => 
            <div>
              <Link to='/SeasonDetails' style={{ textDecoration: 'none' }} onClick={() => this.handleSeasonDetails(item)}>
                <TitleSeason>{item.name}</TitleSeason>
                <Season>
                  <ImageTrailer src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                </Season>
              </Link>
            </div>
          )}
          </ContainerSeason>}
        
      </ContainerDetails>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
