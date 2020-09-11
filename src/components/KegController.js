import React from "react";
import PropTypes from "prop-types";
import KegList from "./KegList";
import KegAdd from "./KegAdd";
import KegDetail from "./KegDetail";

class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedKeg = (kegId) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.kegId === kegId)[0];
    this.setState({selectedKegt: selectedKeg});
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegAdd onAddKegCreation={this.handleAddKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default KegController;