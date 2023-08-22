import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function FirstComponent() {
  //COMPONENT ONE
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
  //COMPONENT TWO
  const Departments = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked1(e.target.checked);
    };

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked2(e.target.checked);
    };
    const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked3(e.target.checked);
    };

    const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked4(e.target.checked);
    };

    const handleChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked5(e.target.checked);
    };

    const handleChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked6(e.target.checked);
    };

    const handleChange7 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked7(e.target.checked);
    };

    return (
      <div>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <FormGroup>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ExpandMoreIcon fontSize="large" />
              <FormControlLabel
                control={
                  <Checkbox checked={isChecked1} onChange={handleChange1} />
                }
                label="customer_services"
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ ml: 7 }}
                control={
                  <Checkbox checked={isChecked2} onChange={handleChange2} />
                }
                label="support"
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ ml: 7 }}
                control={
                  <Checkbox checked={isChecked3} onChange={handleChange3} />
                }
                label="customer_success"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ExpandMoreIcon fontSize="large" />
              <FormControlLabel
                control={
                  <Checkbox checked={isChecked4} onChange={handleChange4} />
                }
                label="design"
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ ml: 7 }}
                control={
                  <Checkbox checked={isChecked5} onChange={handleChange5} />
                }
                label="graphic_design"
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ ml: 7 }}
                control={
                  <Checkbox checked={isChecked6} onChange={handleChange6} />
                }
                label="product_design"
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ ml: 7 }}
                control={
                  <Checkbox checked={isChecked7} onChange={handleChange7} />
                }
                label="web_design"
              />
            </Box>
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
