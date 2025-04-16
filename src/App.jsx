import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Tickets from "./components/Tickets/Tickets";
import Teams from "./components/Teams/Teams";
import Product from "./components/Product/Product";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Safe from "./components/Safe/Safe";
import Documents from "./components/Documents/Documents";
import KnowledgeBases from "./components/KnowledgeBases/KnowledgeBases";
import Tasks from "./components/Tasks/Tasks";
import Communication from "./components/Communication/Communication";
import Reports from "./components/Reports/Reports";
import Error from "./components/Error/Error";
import NewTicket from "./components/Tickets/NewTicket";
import TicketsOpen from "./components/Tickets/TicketsOpen";
import Email from "./components/Email/Email";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Header toggleSidebar={toggleSidebar} />}

      <div className="grid grid-cols-12 gap-0 xl:gap-0 lg:gap-28">
   
        {/* Sidebar */}
        {isAuthenticated && (
          <div className={`lg:col-span-2 ${isSidebarOpen ? "fixed inset-0 z-40" : "hidden"} lg:block`}>
            <SideBar toggleSidebar={toggleSidebar} />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`mt-16 ms-2 lg:col-span-10 xl:col-span-10 ${
            isSidebarOpen ? "col-span-12" : "col-span-12"
          } lg:block`}
        >
          <Routes>
            {/* Redirect if not authenticated */}
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />

            {/* Protected Routes */}
            {isAuthenticated ? (
              <>
                <Route index element={<Dashboard />} />
                <Route path="tickets" element={<Tickets />} />
                <Route path="/newTicket" element={<NewTicket />} />
                <Route path="/ticketsOpen" element={<TicketsOpen />} />
                <Route path="teams" element={<Teams />} />
                <Route path="product" element={<Product />} />
                <Route path="infrastructure" element={<Infrastructure />} />
                <Route path="document" element={<Safe />} />
                <Route path="safe" element={<Safe />} />
                <Route path="documents" element={<Documents />} />
                <Route path="knowledgebases" element={<KnowledgeBases />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="communication" element={<Communication />} />
                <Route path="reports" element={<Reports />} />
                <Route path="email" element={<Email />} />
                <Route path="*" element={<Error />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
