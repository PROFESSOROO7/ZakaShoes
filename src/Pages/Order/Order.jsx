const Order = () => {

  const tableDataOrders = [
    {
      user: {
        imgSrc: "https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g",
        name: "Ali"
      },
      dateOrder: "01-10-2023",
      status: "Rejected",
      ProductId:232,
      Rider:["rider 1","rider 2","rider 2"],
      Receipt : "View Receipt"
    },
    {
      user: {
        imgSrc: "https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g",
        name: "Ahmed"
      },
      dateOrder: "01-10-2023",
      status: "Deliverd",
      ProductId:232,
      Rider:["rider 1","rider 2","rider 2"],
      Receipt : "View Receipt"
    },


  ];
  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Order</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Order</a>
              </li>
              {/* <li><i class='bx bx-chevron-right' ></i></li> */}
              {/* <li>
               <a class="active" href="#">Home</a>
             </li> */}
            </ul>
          </div>
          {/* <a href="#" class="btn-download">
           <i class='bx bxs-cloud-download' ></i>
           <span class="text">Download PDF</span>
         </a> */}
        </div>

        <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check"></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group"></i>
            <span className="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle"></i>
            <span className="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>
            <table>
    <thead>
      <tr>
        <th>User</th>
        <th>Date Order</th>
        <th>Status</th>
        <th>ProductId</th>
        <th>Rider</th>
        <th>Receipt</th>
      </tr>
    </thead>
    <tbody>
      {tableDataOrders.map((item, index) => (
        <tr key={index}>
          <td>
            <img src={item.user.imgSrc} alt="User Avatar" />
            <p>{item.user.name}</p>
          </td>
          <td>{item.dateOrder}</td>
          <td>
            <select
              name="Order"
              id="Order"
              className=""
              style={{
                color: "black",
                padding: "2px 2px",
                textDecoration: "none",
                display: "block",
                backgroundColor: "rgb(230, 230, 230)",
              }}
              value={item.status}
            >
              <option value="Rejected">Rejected</option>
              <option value="Deliverd">Deliverd</option>
              <option value="Inprocess">Inprocess</option>
              <option value="Dispatched">Dispatched</option>
            </select>
            </td>
            <td>{item.ProductId}</td>
            <td><select
              name="Rider"
              id="Rider"
              className=""
              style={{
                color: "black",
                padding: "2px 2px",
                textDecoration: "none",
                display: "block",
                backgroundColor: "rgb(230, 230, 230)",
              }}
              value={item.Rider}
            >
              <option value="Rider 1">Rider 1</option>
              <option value="Rider 2">Rider 2</option>
              <option value="Rider 3">Rider 3</option>
            </select></td>
            <td><button style={{
                color: "black",
                padding: "2px 2px",
                textDecoration: "none",
                display: "block",
                backgroundColor: "rgb(230, 230, 230)",
              }} >{item.Receipt}</button></td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>

          <div className="todo">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-plus"></i>
              <i className="bx bx-filter"></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Order 1</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Order 1</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Order 1</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Order 1</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Order 1</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
