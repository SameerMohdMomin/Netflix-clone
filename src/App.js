import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner';
import Nav from './Nav'




function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{'position' : 'absolute' , 'overflow-x':'hidden', 'backgroundColor' : 'black'}}>

        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchTranding} isLargeRow /> 
        <Row title="Top Rated" fetchUrl={requests.fetchrated}  />
        <Row title="NETFLIX POPULAR" fetchUrl={requests.fetchpopular}  />
        <Row title="NETFLIX TRANDING" fetchUrl={requests.fetchtrand}  />
        <Row title="Up Comming" fetchUrl={requests.fetchUpcomming}  />
       
        
     
        
    </div>  
    </div>
  );
}

export default App;
