import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="grid h-screen place-items-center bg-background-primary font-mono text-primary">
      <div className="h-64 w-96 border-2 border-border-100 bg-background-dark shadow-lg shadow-black">
        <div className="flex w-full border-b-2 border-border-100 bg-background-light">
          <p className="ml-2">main</p>
          <p className="ml-auto mr-2">x</p>
        </div>
        <div className="text-secondary">
          <span>$ </span>
          <Link to="/app/habits">login</Link>
        </div>
      </div>
    </div>
  );
}
