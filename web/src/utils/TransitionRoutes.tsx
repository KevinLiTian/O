import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import { pages } from "../utils/pages";

export default function TransitionRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <Routes location={location}>
        {[...pages["main"]].map((page) => {
          return (
            <Route
              path={page.path}
              key={page.path}
              element={
                <div style={{ minHeight: "100vh" }}>{page.component}</div>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <div style={{ minHeight: "100vh" }}>{pages["404"].component}</div>
          }
        />
      </Routes>
    </TransitionGroup>
  );
}
