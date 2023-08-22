import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SecondPage() {
  //COMPONENT ONE/////////////////////////////////////////////

  const FetchJSON = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "userId", headerName: "UserID", width: 90 },
      {
        field: "title",
        headerName: "Title",
        width: 400,
        editable: true,
      },
      {
        field: "body",
        headerName: "Body",
        width: 400,
        editable: true,
      },
    ];
    useEffect(() => {
      if (!localStorage.getItem("loginDetails")) {
        alert(
          "Access denied. Please enter your details on the login page first"
        );
        navigate("/");
      }
    }, []);

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`, {})
        .then((response) => {
          setData(response.data);
          console.log(response);
        });
    }, []);

    interface JsonData {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    const jsonArrayOfData = data;
    const dd: JsonData[] = jsonArrayOfData;
    return (
      <>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          JSON Data
        </Typography>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={dd}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </>
    );
  };

  //COMPONENT TWO/////////////////////////////////////////////
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
    <Container>
      <FetchJSON />
      <Departments />
    </Container>
  );
}
