import React from 'react';
import './App.css';
import CompareCareer from './CompareCareer';
import { CssBaseline, Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    
	<div className="App">
      <CssBaseline />
	  <Container>
	  	<CompareCareer></CompareCareer>
	  </Container>	  
    </div>
  );
}

export default App;
