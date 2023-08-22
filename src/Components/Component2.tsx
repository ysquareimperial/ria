import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
export default function Component2() {
  const Departments = () => {
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);

    const departmentJSON = [
      {
        department: "customer_service",
        sub_departments: ["support", "customer_success"],
      },
      {
        department: "design",
        sub_departments: ["graphic_design", "product_design", "web_design"],
      },
    ];

    //Department toggler functions///////////////////////////////
    const handleToggle1 = () => {
      setToggle1(!toggle1);
    };
    const handleToggle2 = () => {
      setToggle2(!toggle2);
    };

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked1(newValue);
      setIsChecked2(newValue);
      setIsChecked3(newValue);
    };

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked2(newValue);
    };

    const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked3(newValue);
    };

    const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked4(newValue);
      setIsChecked5(newValue);
      setIsChecked6(newValue);
      setIsChecked7(newValue);
    };

    const handleChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked5(newValue);
    };

    const handleChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked6(newValue);
    };

    const handleChange7 = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked7(newValue);
    };

    return (
      <div>
        <Typography mt="30px" variant="h6" color="text.secondary" gutterBottom>
          Departments
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormGroup>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {toggle1 ? (
                <ExpandLessIcon fontSize="large" onClick={handleToggle1} />
              ) : (
                <ExpandMoreIcon fontSize="large" onClick={handleToggle1} />
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked2 && isChecked3 ? true : isChecked1}
                    onChange={handleChange1}
                  />
                }
                label={departmentJSON[0].department}
              />
            </Box>
            {toggle1 && (
              <div>
                <Box>
                  <FormControlLabel
                    sx={{ ml: 7 }}
                    control={
                      <Checkbox checked={isChecked2} onChange={handleChange2} />
                    }
                    label={departmentJSON[0].sub_departments[0]}
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    sx={{ ml: 7 }}
                    control={
                      <Checkbox checked={isChecked3} onChange={handleChange3} />
                    }
                    label={departmentJSON[0].sub_departments[1]}
                  />
                </Box>
              </div>
            )}

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {toggle2 ? (
                <ExpandLessIcon fontSize="large" onClick={handleToggle2} />
              ) : (
                <ExpandMoreIcon fontSize="large" onClick={handleToggle2} />
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      isChecked5 && isChecked6 && isChecked7 ? true : isChecked4
                    }
                    onChange={handleChange4}
                  />
                }
                label={departmentJSON[1].department}
              />
            </Box>
            {toggle2 && (
              <div>
                <Box>
                  <FormControlLabel
                    sx={{ ml: 7 }}
                    control={
                      <Checkbox checked={isChecked5} onChange={handleChange5} />
                    }
                    label={departmentJSON[1].sub_departments[0]}
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    sx={{ ml: 7 }}
                    control={
                      <Checkbox checked={isChecked6} onChange={handleChange6} />
                    }
                    label={departmentJSON[1].sub_departments[1]}
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    sx={{ ml: 7 }}
                    control={
                      <Checkbox checked={isChecked7} onChange={handleChange7} />
                    }
                    label={departmentJSON[1].sub_departments[2]}
                  />
                </Box>
              </div>
            )}
          </FormGroup>
        </Box>
      </div>
    );
  };
  return (
    <>
      <Departments />
    </>
  );
}
