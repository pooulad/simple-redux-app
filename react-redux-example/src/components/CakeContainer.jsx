import React, { memo } from "react";

function CakeContainer() {
  return (
    <div>
      <h2>number of cakes : </h2>
      <button>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

export default memo(CakeContainer);
