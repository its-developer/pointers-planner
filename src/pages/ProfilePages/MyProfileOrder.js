import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";

function MyProfileOrder() {
  const [anchorEl, setAnchorEl] = React.useState({});
  const handleClick = (id, event) => {
    setAnchorEl({
      ...anchorEl,
      [id]: event.currentTarget,
    });
  };
  const handleClose = () => {
    setAnchorEl({});
  };
  return (
    <div className="">
      <h3 className="fw-bolder ms-3">
        <i className="fa fa-first-order"></i> Orders
      </h3>
      <table className="table table-striped mt-5">
        <thead className="table-bordered py-3">
          <tr>
            <th scope="col">
              <Checkbox />
            </th>
            <th scope="col">Email Address</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Status</th>
            <th scope="col">Order</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6].map((item) => {
            const anchor = anchorEl[item];
            const open = Boolean(anchor);
            return (
              <tr key={item} className="">
                <td>
                  <Checkbox />
                </td>
                <td className="pt-3">John123@gmail.com</td>
                <td className="pt-3">John</td>
                <td className="pt-3">Doe</td>
                <td className="text-success pt-3">Active</td>
                <td className="">
                  <Button
                    id="basic-button"
                    onClick={(e) => handleClick(item, e)}
                  >
                    Complted
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchor}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Approved</MenuItem>
                    <MenuItem onClick={handleClose}>Pending</MenuItem>
                    <MenuItem onClick={handleClose}>Reject</MenuItem>
                  </Menu>
                </td>
                {/* <td className="text-primary">Completed</td> */}
                <td className="pt-3">
                  <i
                    className="fa fa-pencil"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                  &emsp;
                  <i
                    className="fa fa-trash-o"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyProfileOrder;
