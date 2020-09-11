import React from "react";
import PropTypes from "prop-types";
import KegList from "./KegList";
import KegAdd from "./KegAdd";
import KegDetail from "./KegDetail";

class KegController extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
}