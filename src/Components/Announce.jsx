import React from "react";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

function Announce() {
  const [hide, setHide] = useState(
    "flex items-center justify-center space-x-2 text-white bg-violet-500"
  );

  function Hide() {
    setHide(hide + "hidden");
  }

  return (
    <>
      <div className={hide}>
        <h3>Sale has started 40% off on your first purchase!</h3>
        <ImCancelCircle className="cursor-pointer" onClick={Hide} />
      </div>
    </>
  );
}

export default Announce;
