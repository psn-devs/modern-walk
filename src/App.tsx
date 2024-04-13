import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import "./styles/main.scss";

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
