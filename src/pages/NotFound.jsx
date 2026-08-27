import { Link } from "react-router-dom";
import Container from "@components/ui/Container.jsx";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            404
          </h1>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Page not found.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block font-medium text-accent hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </Container>
  );
}
