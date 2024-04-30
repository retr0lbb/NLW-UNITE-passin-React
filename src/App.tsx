import { AttendeeList } from "./components/attendee-list";
import {HomeDashboard} from "./pages/home"

import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Header } from "./components/header";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
            <Header />
            <AttendeeList />
        </div>
        } path="/"/>
        <Route element={
        <HomeDashboard />
      } path="/admin/dashbord"/>
      </Routes>
    </BrowserRouter>
    
  )
}
