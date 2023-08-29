import { HashRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Home from "./Home";
import { AuthComponent, SignupPage, ProtectedRoutes, LoginPage, Plans } from "./components";
import "./index.css";
 
function App() {
 return (
   <HashRouter>
     <UserProvider>
       <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/plans" element={<Plans />} />
         
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
