import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  actionSeasonDetails,
  actionEpisodes,
} from "../workflow/xilften-reducer";

const mapStateToProps = state => ({
  id: state.xilften.id,
  seasonNumber: state.xilften.seasonNumber,
  seasonDetails: state.xilften.seasonDetails,
  episodes: state.xilften.episodes,
});

const mapDispatchToProps = dispatch => ({
  actionSeasonDetails: info => {
    dispatch(actionSeasonDetails(info))
  },
  actionEpisodes: info => {
    dispatch(actionEpisodes(info))
  },
});

const ContainerSeason = styled.div`
  background-color: #333333;
  width: 100%;
  min-height: 100vh;
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

const Season = styled.div`
  
`;

const BlackLayer = styled.div`
  background: rgba(0, 0, 0, 0.80);
`;

const CardCenter = styled.div`
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

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100%;
    padding: 0 auto 15rem auto;
  }
`;

const Image = styled.img`
  width: 345px;
  margin: 3rem 0 1.5rem 0;

  &:hover {
    width: 350px;
    box-shadow: 0px 3px 40px -5px rgba(250, 250, 250, 0.63);
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1rem 0 2rem 0;
`;

const ContainerEpisode = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const Episode = styled.div`
  width: 24%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 .2rem 2rem .2rem;
  overflow-y: hidden;

  div {
  display: flex;
  width: 300px;
  height: 170px;
  min-height: 170px;
  overflow: hidden;
  margin-bottom: 1rem;

    &:hover {
      box-shadow: 0px 3px 40px -5px rgba(0, 0, 0, 0.63);
    }
  }
`;

const ImageEpisode = styled.img`
  max-width: 100%;
	transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const TitleEpisode = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
`;

const ParagraphEpisode = styled.p`

`;

class SeasonDetails extends Component {

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

    const seasonDetails = moviedb({
      method: 'get',
      url: `/tv/${this.props.id}/season/${this.props.seasonNumber}?api_key=${apiKey}`
    }).then((seasonDetails) => {
      this.props.actionSeasonDetails( seasonDetails.data );
    })

    const episodes = moviedb({
      method: 'get',
      url: `/tv/${this.props.id}/season/${this.props.seasonNumber}?api_key=${apiKey}`
    }).then((seasonDetails) => {
      this.props.actionEpisodes( seasonDetails.data.episodes );
    })
  }

  render() {
    const { seasonDetails, episodes } = this.props;

    const poster_path = `https://image.tmdb.org/t/p/w1280${seasonDetails.poster_path}`;

    return (
      <ContainerSeason>
      <Link 
        to="/details"
        style={{ textDecoration: 'none' }} onClick={this.handleExit}>
        <ButtonRenderModal>Voltar</ButtonRenderModal>
      </Link>
        <Season>
          <CardCenter backgroundImage={poster_path}>
            <div>
        <BlackLayer>
              <Image src={poster_path}/>
              <Title>{seasonDetails.name}</Title>
              <Paragraph>{seasonDetails.overview}</Paragraph>
        </BlackLayer>
            </div>
          </CardCenter>
        <ContainerEpisode>
            {episodes.map(item => 
              <Episode>  
                <div>
                  <ImageEpisode src={`https://image.tmdb.org/t/p/w1280${item.still_path}`} />
                </div>
                <TitleEpisode>{item.name}</TitleEpisode>
                <ParagraphEpisode>{item.overview}</ParagraphEpisode>
              </Episode>
            )}
        </ContainerEpisode>
        </Season>
      </ContainerSeason>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeasonDetails)