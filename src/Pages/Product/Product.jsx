import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Product</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Product</a>
              </li>
              {/* <li><i class='bx bx-chevron-right' ></i></li> */}
              {/* <li>
               <a class="active" href="#">Home</a>
             </li> */}
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span variant="primary" onClick={handleShow}>
              Add Product
            </span>
          </a>
        </div>

        <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check"></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Product</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group"></i>
            <span className="text">
              <h3>2834</h3>
              <p>Today Product</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle"></i>
            <span className="text">
              <h3>2543</h3>
              <p>Total Product</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>All Product</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Discription</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Nike</p>
                  </td>
                  <td>Air Max Shoes</td>
                  <td>
                    <span className="status completed">56</span>
                  </td>
                  <td>$109.99</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p> Nike</p>
                  </td>
                  <td>Air max shoes</td>
                  <td>
                    <span className="status pending">90</span>
                  </td>
                  <td>$487.50</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Adidas</p>
                  </td>
                  <td>Premium adidas shoes</td>
                  <td>
                    <span className="status process">90</span>
                  </td>
                  <td>$678</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>Adidas</p>
                  </td>
                  <td>Adidas shoes</td>
                  <td>
                    <span className="status pending">78</span>
                  </td>
                  <td>$231.5</td>
                </tr>
                {/* <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2023</td>
                  <td>
                    <span className="status completed">67</span>
                  </td>
                  <td>$125.60</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          {/* <div className="todo">
            <div className="head">
              <h3>Product Details</h3>
              <i className="bx bx-plus"></i>
              <i className="bx bx-filter"></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Recent Products</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div> */}
        </div>
      </main>

      {/* /// ########################### bootstarp model ########################## */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you are reading this text in a modal! */}

          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-primary ">Enter Item Name</Form.Label>
              <Form.Control type="text" placeholder="Noman" />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-primary ">Enter Item Code</Form.Label>
              <Form.Control type="text" placeholder="0000-00000000-00" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-1">
              <Form.Label className="text-primary ">Add Item Images</Form.Label>

              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
      {/* /// ########################### bootstarp model ########################## */}
    </div>
  );
};

export default Product;
