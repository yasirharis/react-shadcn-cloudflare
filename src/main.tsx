import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Skeleton } from "@/components/ui/skeleton";
import "./index.css";

// const Landing = lazy(() => import("./Landing"));
// const App = lazy(() => import("./App"));
const Bio = lazy(() => import("./Bio"));
// const PageClaude = lazy(() => import("./PageClaude"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Skeleton className="h-12 w-12 rounded-full" /> {/* or a full-page skeleton */}
        </div>
      }
    >
      <Bio />
    </Suspense>
  </StrictMode>
);