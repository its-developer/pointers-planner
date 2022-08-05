import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Input, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enLocale from "date-fns/locale/en-US";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const daysEvent = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function Services() {
  const [eventDays, setEventDays] = React.useState([]);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [datePickerValue1, setDatePickerValue1] = React.useState(new Date());

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEventDays(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={enLocale}
      >
        <div
          className="service_div container-xl"
          style={{ backgroundColor: "#F8F5F2 !important" }}
        >
          <div className="pt-4 text-center pb-5">
            <h1 className="main_heading">Services</h1>
            <p className="text-muted fw-bold mt-3">
              You can select One or Multiple services with your Location.
            </p>
          </div>
          <div className="px-3">
            {/* <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}>
            <option>Multiple days event&emsp;</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select> */}
            <FormControl
              sx={{ m: 1, width: 300 }}
              style={{ backgroundColor: "white" }}
            >
              <InputLabel id="demo-multiple-checkbox-label">
                Multiple Days Event
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={eventDays}
                onChange={handleChange}
                input={<OutlinedInput label="Multiple Days Event" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {daysEvent.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={eventDays.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="row px-3">
            <div className="col-md-3 col-6 pt-3">
              <FormControl
                sx={{ m: 1, width: "100%" }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-multiple-checkbox-label">
                  Select Services
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={eventDays}
                  onChange={handleChange}
                  input={<OutlinedInput label="Select Services" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {daysEvent.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={eventDays.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3 col-6 pt-3">
              <FormControl
                sx={{ m: 1, width: "100%" }}
                style={{ backgroundColor: "white" }}
              >
                <InputLabel id="demo-multiple-checkbox-label">
                  Enter City
                </InputLabel>
                <OutlinedInput label="Enter City" type="text" className="" />
              </FormControl>
            </div>
            <div className="col-md-3 col-6 pt-3">
              <FormControl
                sx={{ m: 1, width: "100%" }}
                style={{ backgroundColor: "white" }}
              >
                <DatePicker
                  value={datePickerValue}
                  onChange={(newValue) => setDatePickerValue(newValue)}
                  label="Start Date"
                  renderInput={(params) => <TextField {...params} />}
                />
              </FormControl>
            </div>
            <div className="col-md-3 col-6 pt-3">
              <FormControl
                sx={{ m: 1, width: "100%" }}
                style={{ backgroundColor: "white" }}
              >
                <DatePicker
                  value={datePickerValue1}
                  onChange={(newValue) => setDatePickerValue1(newValue)}
                  label="Start Date"
                  renderInput={(params) => <TextField {...params} />}
                />
              </FormControl>
            </div>
          </div>
          <div className="image_and_intro_div container-xl">
            <div className="row pt-5">
              <div className="col-lg-6 col-xl-5 image_section order-lg-2">
                <div className="card">
                  <div>
                    <img
                      src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h"
                      alt="#ImgNotFound"
                      className="w-100"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7 detail_section order-lg-1">
                <img
                  src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png"
                  alt="#ImgNotFound"
                  width="50px"
                  height="50px"
                  className="my-3 my-lg-0"
                />
                <h3 className="sub_heading_with_color pt-3">How we work</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi cupiditate voluptates ut iusto autem, enim dolore
                  vitae laboriosam maiores iste repellendus ad, tenetur odit
                  dignissimos sint quidem asperiores! Dolor, excepturi. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  cupiditate voluptates ut iusto autem.
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-lg-6 col-xl-5 image_section">
                <div className="card">
                  <div>
                    <img
                      src="https://setmywed.com/blog/wp-content/uploads/2019/12/entry.jpg"
                      alt="#ImgNotFound"
                      className="w-100"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7 detail_section">
                <img
                  src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png"
                  alt="#ImgNotFound"
                  width="50px"
                  height="50px"
                  className="my-3 my-lg-0"
                />
                <h3 className="sub_heading_with_color pt-3">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi cupiditate voluptates ut iusto autem, enim dolore
                  vitae laboriosam maiores iste repellendus ad, tenetur odit
                  dignissimos sint quidem asperiores! Dolor, excepturi. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  cupiditate voluptates ut iusto autem.
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-lg-6 col-xl-5 image_section order-lg-2">
                <div className="card">
                  <div>
                    <img
                      src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h"
                      alt="#ImgNotFound"
                      className="w-100"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7 detail_section order-lg-1">
                <img
                  src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png"
                  alt="#ImgNotFound"
                  width="50px"
                  height="50px"
                  className="my-3 my-lg-0"
                />
                <h3 className="sub_heading_with_color pt-3">How we work</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi cupiditate voluptates ut iusto autem, enim dolore
                  vitae laboriosam maiores iste repellendus ad, tenetur odit
                  dignissimos sint quidem asperiores! Dolor, excepturi. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  cupiditate voluptates ut iusto autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LocalizationProvider>
      <br />
      <br />
      <br />
    </>
  );
}

export default Services;
