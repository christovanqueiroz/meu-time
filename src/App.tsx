import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Countries from "./pages/countries";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
