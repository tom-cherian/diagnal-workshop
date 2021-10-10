import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadPageOne,
  loadPageTwo,
  loadPageThree,
} from "../../actions/posterListingActions";
import PosterComponent from "../Poster/Poster.component";

class PosterListingPage extends Component {
  componentDidMount() {
    this.props.loadPageOne();
    this.props.loadPageTwo();
    this.props.loadPageThree();
  }
  render() {
    return (
      <>
        <PosterComponent />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadPageOne: () => dispatch(loadPageOne()),
  loadPageTwo: () => dispatch(loadPageTwo()),
  loadPageThree: () => dispatch(loadPageThree()),
});

export default connect(null, mapDispatchToProps)(PosterListingPage);
