import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PortfolioPage from "./pages/PortfolioPage"
import BlogsPage from "./pages/BlogsPage"
import ContactPage from "./pages/ContactPage"
import GetStartedPage from "./pages/GetStartedPage"
import StartPage from "./pages/StartPage"
import DashboardPage from "./pages/DashboardPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/**Pages */}
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/**Get started page */}
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/start" element={<StartPage />} />

          {/**Dashboard page */}
          <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
