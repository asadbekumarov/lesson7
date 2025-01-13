import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/header/Logo.svg";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="bg-[#232536] flex justify-center flex-col items-center p-8 w-96 px-4 rounded-lg">
        <img className="py-7" src={Logo} alt="Logo-png" />
        <div className="flex justify-between gap-3 py-4">
          <Button onClick={() => navigate("/")} variant="contained">
            Go Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="contained">
            Go back
          </Button>
        </div>
        <div>
          <p className="text-white  font-[Poppins] font-medium text-base">
            Email
          </p>
          <input className="bg-slate-400 mb-3 p-2" type="text" />
          <p className="text-white  font-[Poppins] font-medium text-base">
            Password
          </p>
          <input className="bg-slate-400 mb-3 p-2" type="password" />
        </div>
        <Button variant="outlined">Login</Button>
        <div>
          <FormControl className="text-white">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <p className="text-white  font-[Poppins] font-medium text-base p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit
            suscipit, dolor quam at dolorum harum, libero cumque praesentium
            temporibus omnis quo quas dicta aspernatur vitae consectetur impedit
            tempora a.
          </p>
          <FormControlLabel
            className="text-white"
            control={
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": {
                    border: "1px solid white",
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label="shartlarga rozimisiz"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
