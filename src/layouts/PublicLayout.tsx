import Header from "../components/header"
import {Outlet } from "react-router-dom"
import AuthHanlder from "@/handlers/auth-handler";
import {Footer } from "@/components/footer"
export const PublicLayout = () =>{
    return(
        <div  className="w-full">
        {/*handler to store the user data */}
      <AuthHanlder />
        <Header />
       <Outlet />
       <Footer/>
       </div>
    )
}