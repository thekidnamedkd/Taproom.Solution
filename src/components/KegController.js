import React from "react";
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
        selectedKeg: null
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleChangingSelectedKeg = (kegId) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.kegId === kegId)[0];
    this.setState({selectedKeg: selectedKeg});
  };

  handleAddKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  };

  handleDeletingKeg = (kegId) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.kegId !== kegId);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}  />
      buttonText = "Return to Keg List";
    
    }
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
      <KegDetail 
        keg = {this.state.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg}
      />
      );
      buttonText = "Return to Keg List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <KegAdd 
          onKegAddCreation={this.handleAddKegToList} 
        />
      );
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState = ( 
        <KegList 
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default KegController;