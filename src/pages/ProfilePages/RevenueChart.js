import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Sample chart data

const data = [
  {
    name: "Jun",
    traffic: 200,
  },
  {
    name: "Jul",
    traffic: 500,
  },
  {
    name: "Aug",
    traffic: 500,
  },
  {
    name: "Sep",
    traffic: 800,
  },
  {
    name: "Oct",
    traffic: 1000,
  },
  {
    name: "Nov",
    traffic: 2000,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border-0 bg-white border-grey">
        <p className="label m-0">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

function RevenueChart({ title }) {
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
            <h3 className="fw-bold mb-2 col-6">{title}</h3>
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
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="10 10" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="traffic" barSize={20} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default RevenueChart;
