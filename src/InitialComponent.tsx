import { useState } from "react";
import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";

function InitialComponent() {
  const [loginForm, setLoginForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem("loginDetails", JSON.stringify(loginForm));
    console.log(loginForm);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 400, height: 380 }} variant="outlined">
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Login
            </Typography>
            <div>
              <TextField
                required
                sx={{ marginBottom: 2, width: "100%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={loginForm.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                required
                sx={{ marginBottom: 2, width: "100%" }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={loginForm.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                required
                sx={{ marginBottom: 2, width: "100%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "92%", padding: 2 }}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Box>
  );
}

export default InitialComponent;
