import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
// import App from "./App.tsx"
// import Landing from "./Landing.tsx"
import Bio from "./Bio.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      {/* <App />       */}
      {/* <Landing />       */}
      <Bio />      
  </StrictMode>
)
