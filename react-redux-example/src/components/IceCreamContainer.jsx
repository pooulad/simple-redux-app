import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";


function IceCreamContainer(props) {
  return (
    <div>
      <h2>number of iceCreams : {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>buy iceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
