import { HashRouter, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Home from "./Home";
import LoginPage from "./components/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignupPage from "./components/SignupPage";
import { AuthComponent } from "./components";
import "./index.css";
 
function App() {
 return (
   <HashRouter>
     <UserProvider>
       <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />
         
         {/* Protected Routes */}
         <Route element={<ProtectedRoutes />}>
           <Route path="/chat" element={<AuthComponent />} />
         </Route>

       </Routes>
     </UserProvider>
   </HashRouter>
 );
}
 
export default App;
