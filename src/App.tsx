import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { DogProvider } from "./context/DogContext";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              <DogProvider>
                <HomePage />
              </DogProvider>
            }
          />
        </Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
