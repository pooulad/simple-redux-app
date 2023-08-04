import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>item - {props.item}</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
