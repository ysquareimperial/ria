import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export default function Component1() {
  const FetchJSON = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    //Table columns////////////////////////////////////////////
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

    //Redirecting user to FirstPage////////////////////////////////////////////
    useEffect(() => {
      if (!localStorage.getItem("loginDetails")) {
        alert(
          "Access denied. Please enter your details on the login page first"
        );
        navigate("/");
      }
    }, []);

    //Fetching API data////////////////////////////////////////////
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`, {})
        .then((response) => {
          setData(response.data);
          console.log(response);
        });
    }, []);

    //Converting the retrieved JSON data into a model/interface///
    interface JsonData {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    const jsonArrayOfData = data;
    const finalData: JsonData[] = jsonArrayOfData;
    return (
      <>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          JSON Data
        </Typography>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={finalData}
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
  return (
    <>
      <FetchJSON />
    </>
  );
}
