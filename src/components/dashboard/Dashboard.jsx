import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2xl  mx-auto">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  items-center justify-center flex flex-col  ">
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 mt-5 border-r-2 ">
            {/* <!-- Sidebar content here --> */}
            {/* <li>
              <Link to={"/dashboard/addProduct"}>Add Product</Link>
            </li> */}
            <li>
              <Link to={"/dashboard/addItem"}>Add Item</Link>
            </li>
            <li>
              <Link to={"/dashboard/allSeller"}>All Seller</Link>
            </li>
            <li>
              <Link to={"/dashboard/allBuyer"}>All Buyer</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
