import React, { useState } from "react";
import { Modal, Button } from "rsuite";

const JsonGen = ({ value }) => {
  var obj = value;

  var text = JSON.stringify(obj, undefined, 4);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="modal-container">
      <Button
        className="mt-1"
        appearance="primary"
        color="orange"
        onClick={handleOpen}
      >
        Generate In JSON format
      </Button>
      <Modal full open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>JSON CODE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            This is the JSON Format of the form you are seeing right Now!
            <pre
              id="GFG_DOWN"
              style={{
                color: "green",
                fontSize: "25px",

                fontFamily: "oblique",
              }}
            >
              {text}
            </pre>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default JsonGen;
