import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";


function CakeContainer(props) {
  return (
    <div>
      <h2>number of cakes : {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
