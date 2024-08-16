import React, { Component } from "react";
import '@fontsource/roboto';
import QuoteMachine from "./components/QuoteMachine";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import "./App.css";

const CenteredGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: "100%",
  margin: "0 auto"
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }
  
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return null;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return Math.floor(Math.random() * this.state.quotes.length);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() })
  }

  nextQuoteClickHandler() {
    console.log("hi")
  }
  
  render() {
    return (
      <CenteredGrid id="quote-box" container>
        <Grid item xs={6} lg={4}>
          {
            this.selectedQuote ? 
            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/> : null
            }
        </Grid>
      </CenteredGrid>
    );
  }
}

export default App;
