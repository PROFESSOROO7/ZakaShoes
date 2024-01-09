import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const Stock = () => {
  //    const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Stockdata = [
    {
      categoryId: 'S-671',
      categoryName: 'Nike',
      description: "Nike Men's Gymnastics Shoes",
      quantity:1,
      status: 'Enable'
    },
    {
      categoryId: 'S-991',
      categoryName: 'Service',
      description: "Service Shoes",
      quantity:2,
      status: 'Enable'
    },
    {
      categoryId: 'S-991',
      categoryName: 'Female',
      description: "Female Shoes",
      quantity:3,
      status: 'Enable'
    }
  ];
  

  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>stock</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">stock</a>
              </li>
              {/* <li><i class='bx bx-chevron-right' ></i></li> */}
              {/* <li>
               <a class="active" href="#">Home</a>
             </li> */}
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span className="primary" onClick={handleShow}>
              Add Stock
            </span>
          </a>
        </div>

        <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check"></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Stock</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group"></i>
            <span className="text">
              <h3>2834</h3>
              <p>Today Stock</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle"></i>
            <span className="text">
              <h3>$2543</h3>
              <p>Total Stock</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Total Stock</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>
            <table>
  <thead>
    <tr className="table-header">
      <th>Category Id</th>
      <th>Category Name</th>
      <th>Description</th>
      <th>Total Products</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {Stockdata.map((item, index) => (
      <tr key={index} className="table-row">
        <td className="table-cell">{item.categoryId}</td>
        <td className="table-cell">{item.categoryName}</td>
        <td className="table-cell">{item.description}</td>
        <td className="table-cell">{item.quantity}</td>
        <td>
                    <select
                      name="Order"
                      id="Order"
                      style={{
                        color: "black",
                        padding: "2px 2px",
                        textDecoration: "none",
                        display: "block",
                        backgroundColor: "rgb(230, 230, 230)",
                      }}
                    >
                      <option value="Enable">Enable</option>
                      <option value="Disable">Disable</option>
                    </select>{" "}
                  </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>

          <div className="todo">
            <div className="head">
              <h3>Recent Stock</h3>
              <i className="bx bx-plus"></i>
              <i className="bx bx-filter"></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>total Stock</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
              <p>total Stock</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
              <p>total Stock</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
              <p>total Stock</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>total Stock</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* /// ########################### bootstarp model ########################## */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stock Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you are reading this text in a modal! */}

          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-primary ">
                Enter Category Id
              </Form.Label>
              <Form.Control type="text" placeholder="Category ID" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-primary ">
                Enter Category Name
              </Form.Label>
              <Form.Control type="text" placeholder="Category Name" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-primary ">
                Enter Category Description
              </Form.Label>
              <Form.Control type="text" placeholder="Category Description" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-1">
              <Form.Label className="text-primary ">Category Images</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Stock
          </Button>
        </Modal.Footer>
      </Modal>
      {/* /// ########################### bootstarp model ########################## */}
    </div>
  );
};

export default Stock;
