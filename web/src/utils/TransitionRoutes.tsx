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
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    left: 0,
                    bottom: 0,
                    top: 0,
                  }}
                >
                  <div style={{ minHeight: "100vh" }}>{page.component}</div>
                </div>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <div
              style={{
                position: "absolute",
                right: 0,
                left: 0,
                bottom: 0,
                top: 0,
              }}
            >
              <div style={{ minHeight: "100vh" }}>{pages["404"].component}</div>
            </div>
          }
        />
      </Routes>
    </TransitionGroup>
  );
}
