import React from 'react';
import '../Styles/App.css';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { loadData } from '../Actions';
import ScrollView from './scrollView';

const mapDispatchToProps = dispatch => {
  return {
    ...dispatch,
    loadData: () => {dispatch(loadData())}
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <ScrollView/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
