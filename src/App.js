import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* NavBar Component */}
      <Nav/>


 




      {/* Banner Component*/}
      <Banner/>









        {/* Row Component */}
        <Row         
        title="NETFLIX ORIGINALS" 
        fetchurl= {requests.fetchNetflixOriginals}
        isLargeRow/>
        <Row title="Trending Now" fetchurl= {requests.fetchTrending}/>
        <Row title="Top Rated" fetchurl= {requests.fetchTopRated}/>
        <Row title="Action Movies" fetchurl= {requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchurl= {requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchurl= {requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchurl= {requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchurl= {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
