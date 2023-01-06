import React from 'react';
import {RecoilRoot} from "recoil";
import AppBar from "./AppBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";
import UsersPage from "./users/UsersPage";
import BookingsPage from "./bookings/BookingsPage";

function App() {
  return (
    <BrowserRouter>
        <RecoilRoot>
            <AppBar/>
            <Routes>
                <Route index element={<Navigate replace to="/users" />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="bookings" element={<BookingsPage/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
