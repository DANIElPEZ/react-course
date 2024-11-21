import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./components/HomePage";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { ProfilePage } from "./components/ProfilePage";
import { LoginPage } from "./components/LoginPage";
import { LogoutPage } from "./components/LogoutPage";
import { AuthProvider, ValidRoute } from "./context/auth";

export default function App() {
  return (
    <div className="App">
      {/*provider de react-router-dom*/}
      <HashRouter>
        <AuthProvider>
          <Menu />
          {/*Parte dinamica de rutas*/}
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* nested route */}
            <Route path="/blog" element={<BlogPage />}>
              {/*ruta dinamica*/}
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <ValidRoute>
                  <LogoutPage />
                </ValidRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ValidRoute>
                  <ProfilePage />
                </ValidRoute>
              }
            />

            <Route path="*" element={<p>not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}
