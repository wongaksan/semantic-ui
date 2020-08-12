import React from 'react';
import logo from './logo.svg';
//import { Button } from 'semantic-ui-react';
//import { Header } from 'semantic-ui-react';
//import { Form } from 'semantic-ui-react';
//import { Segment } from 'semantic-ui-react';
//import { Grid } from 'semantic-ui-react';

import {Button, Header, Form, Segment, Grid, FormField} from 'semantic-ui-react';
import './App.css';
mport Register from './Register';

function App() {
 return (
   <Register/>
 );
}

export default App;



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button class="ui button"> NDEK KENE </Button> */}
      {/* <Segment compact>
        <Header as='h1'>
        <Header textAlign='center'>
          HALO
        </Header>
        <Form>
          <FormField>
            <label>
              Email
            </label>
            <input placeholder='masukkan email bos'/>
          </FormField>
          <FormField>
            <label>
              Password
            </label>
            <input placeholder='Masukkan Password' type='password'/>
          </FormField>
        </Form>
        <button color='blue'> DAFTAR </button>
        </Header>
      </Segment> */}



    </div>
  );
}

export default App;
