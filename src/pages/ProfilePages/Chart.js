import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Sample chart data
const pdata = [
  {
    name: "MongoDb",
    student: 11,
    fees: 120,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

function Charts() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="card mb-5 border-0 mx-2">
        <div className="card-body shadow rounded">
          <div className="row">
            <h3 className="fw-bold mb-2 col-6">Sales Report</h3>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <Button
                id="basic-button"
                variant="contained"
                style={{ background: "black" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Monthly
                <i className="fa fa-angle-down fw-bold h5 m-0 ps-2"></i>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Monthly</MenuItem>
                <MenuItem onClick={handleClose}>Anually</MenuItem>
                <MenuItem onClick={handleClose}>Bi-Anually</MenuItem>
              </Menu>
            </div>
          </div>
          <ResponsiveContainer aspect={3} style={{ width: "100%" }}>
            <LineChart data={pdata}>
              <CartesianGrid />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
              {/* <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default Charts;
