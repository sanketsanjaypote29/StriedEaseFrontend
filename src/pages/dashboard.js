import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EventFilter from "../components/eventFilter";
import EventContainer from "../components/eventContainer";
import Footer from "../components/footer";
import Navbar from "../components/navBars/dashboardNav";
import { BASE_URL } from "./helper";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      // Introduce a delay of 3 seconds before making the request
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const response = await axios.get(`${BASE_URL}/login/success`, {
        withCredentials: true,
      });
      
      localStorage.setItem("googleId", response.data.user.googleId);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Navbar/>
      <EventFilter />
      <EventContainer />
      <Footer />
    </div>
  );
};

export default Dashboard;
