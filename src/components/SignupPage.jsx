import { Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
 
const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/chat");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordSignup(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert('Đăng ký thất bại, email đã được sử dụng hoặc mật khẩu quá ngắn');
   }
 };
 
 return  <form className="flex flex-col max-w-xs mx-auto mt-[10%]">
    <Typography variant="h1" sx={{ fontSize: "30px", marginBottom: "1rem", color: "white" }}>
        Welcome👋😁
    </Typography>
    <TextField
    placeholder="Email"
    type="email"
    variant="outlined"
    name="email"
    value={form.email}
    onChange={onFormInputChange}
    InputProps={{ sx: { color: "black" }, style: { marginBottom: "1rem", borderRadius: "8px", backgroundColor: "#f1f1f1" } }}
    />
    <TextField
    placeholder="Mật khẩu"
    type="password"
    variant="outlined"
    name="password"
    value={form.password}
    onChange={onFormInputChange}
    InputProps={{ sx: { color: "black" }, style: { marginBottom: "1rem", borderRadius: "8px", backgroundColor: "#f1f1f1" } }}
    />
    <Button
    variant="contained"
    color="primary"
    onClick={onSubmit}
    sx={{
        py: 2,
        px: 4,
        backgroundColor: "#1976D2",
        color: "white",
        borderRadius: "4px",
        "&:hover": {
        backgroundColor: "#1565C0",
        },
        marginBottom: "1rem"
    }}
    >
    Đăng ký
    </Button>
    <>Đã có tài khoản?</>
    <Button variant="contained" color="primary" component={Link} to="/login" sx={{ borderRadius: "4px", backgroundColor: "#1976D2", color: "white" }}>
    Đăng nhập
    </Button>
    </form>
}
 
export default Signup;