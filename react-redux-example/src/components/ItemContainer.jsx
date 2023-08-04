import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

function ItemContainer(props) {
  return (
    <div>
      <h2>item - {props.item}</h2>
      <button onClick={props.buyItem}>buy</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
