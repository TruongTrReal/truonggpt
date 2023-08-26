import { Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

 
const LoginPage = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // We are consuming our user-management context to
 // get & set the user details here
 const { user, fetchUser, fetchUserPlan, emailPasswordLogin } = useContext(UserContext);
 
 // We are using React's "useState" hook to keep track
 //  of the form values.
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // This function will be called whenever the user edits the form.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 // This function will redirect the user to the
 // appropriate page once the authentication is done.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/chat");
 }
 
 // Once a user logs in to our app, we don’t want to ask them for their
 // credentials again every time the user refreshes or revisits our app, 
 // so we are checking if the user is already logged in and
 // if so we are redirecting the user to the home page.
 // Otherwise we will do nothing and let the user to login.
 const loadUser = async () => {
  if (!user) {
    const fetchedUser = await fetchUser();
    if (fetchedUser) {
      const storedUserData = localStorage.getItem('userData');
      const userData = JSON.parse(storedUserData);
      const planData = await fetchUserPlan(userData.email);
      navigate('/chat', {
        state: {
          email: userData.email,
          plan: planData
        }
      });
    }
  }
  }
 
 // This useEffect will run only once when the component is mounted.
 // Hence this is helping us in verifying whether the user is already logged in
 // or not.
 useEffect(() => {
   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 // This function gets fired when the user clicks on the "Login" button.
 const onSubmit = async (event) => {
   try {
     // Here we are passing user details to our emailPasswordLogin
     // function that we imported from our realm/authentication.js
     // to validate the user credentials and log in the user into our App.
     const user = await emailPasswordLogin(form.email, form.password);

     if (user) {

        const planData = await fetchUserPlan(form.email);
        localStorage.setItem('userData', JSON.stringify({ email: form.email }));
        navigate('/chat', {
          state: {
            email: form.email,
            plan: planData
          }
        });
        
     }
   } catch (error) {
       if (error.statusCode === 401) {
          alert("Sai tên đăng nhập hoặc mật khẩu. Try again!");
      } else {
          alert(error);
      }
 
   }
 };
 
 return   <form className="flex flex-col max-w-xs mx-auto mt-[10%]">
 <Typography variant="h1" sx={{ fontSize: "30px", marginBottom: "1rem", color: "white" }}>
   Welcome back🐧🚀
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
   Đăng nhập
 </Button>
 <>Chưa có tài khoản?</>
 <Button variant="contained" color="primary" component={Link} to="/signup" sx={{ borderRadius: "4px", backgroundColor: "#1976D2", color: "white" }}>
   Đăng ký
 </Button>
</form>
}
 
export default LoginPage;