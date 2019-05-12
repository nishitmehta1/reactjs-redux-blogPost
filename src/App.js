import React from 'react';
import PostsDisplay from './components/PostsDisplay';
import Form from './components/Form';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <PostsDisplay />
      </div>
    </Provider>
  );
}

export default App;
