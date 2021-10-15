import React from "react";
import search from "../image/search.png";
const Modal = () => {
  return (
    <React.Fragment>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              <img src={search} alt="searchLogo" width="50px" height="50px" />
              Snapshot
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6 className="modalText mt-2">
              This is the photo search application and you can find any images
              which are available. Apart from this, when you click on any image,
              it will redirect to the google and the google will result based on
              that image.
            </h6>
          </div>
          <div className="text-center pt-3 pb-3">
            <h4>Developed with ❤️ by Anju Priya V</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
