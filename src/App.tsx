import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { DogProvider } from "./context/DogContext";
import { UnexpectedErrorPage } from "./pages/UnexpectedErrorPage";

export function App() {
  return (
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
      <Route path="/unexpected-error" element={<UnexpectedErrorPage />}></Route>
    </Routes>
  );
}
