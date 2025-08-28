import { BrowserRouter } from "react-router"
import Layout from "./components/layout"
import { ThemeProvider } from "./context/theme-provider"

const App = () => {
  return (
     <BrowserRouter>
     <ThemeProvider defaultTheme="dark">
     <Layout/>
     </ThemeProvider>
     </BrowserRouter>
  )
}

export default App