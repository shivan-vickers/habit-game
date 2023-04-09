import { Link, NavLink, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background-primary font-mono text-secondary">
      {/* Header */}
      <header className="absolute flex h-20 w-screen items-center justify-between border-b-2 border-border-200 bg-background-primary px-6">
        {/* Hamburger menu button and page title */}
        <div className="flex w-fit items-center">
          {menuIcon()}
          <h1 className="ml-6 text-xl">Testing</h1>
        </div>
        {/* Search bar */}
        <div className=" flex h-10 w-1/2 flex-initial items-center border-2 border-purple-300 bg-background-extra-dark outline-purple-100 transition-all duration-500 hover:outline-double hover:outline-4">
          <p className="ml-2">
            $<span className="animate-ping">|</span>
          </p>
        </div>
        {/* Profile icon */}
        <div className="flex-none overflow-hidden rounded-full border-2 border-border-200 px-0.5 pt-1">
          {profileIcon()}
        </div>
      </header>
      {/* Main */}
      <main className="flex h-full border-2 border-border-300 pt-20">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className="w-64 flex-none border-r-2 border-border-200 bg-background-light p-2"
        >
          <ul className="">
            <li className="">
              <NavLink
                to="habits"
                className={({ isActive, isPending }) => {
                  return (
                    "" +
                    (isPending
                      ? " border-2 border-border-400 bg-primary-hover"
                      : isActive
                      ? " border-b-2 border-border-300"
                      : "")
                  );
                }}
              >
                Habits
              </NavLink>
            </li>
            <li>
              <Link to={"habits/new"}>+ new group</Link>
            </li>
          </ul>
        </nav>
        {/* Main components for app functionality */}
        <Outlet />
      </main>
    </div>
  );
}

function menuIcon() {
  return (
    <svg
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function profileIcon(): JSX.Element {
  return (
    <svg
      height={40}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <desc>
        "Pixel Art" by "Florian Körner", licensed under "CC0 1.0". / Remix of
        the original. - Created with dicebear.com
      </desc>
      <mask id="viewboxMask">
        <rect width="16" height="16" rx="0" ry="0" x="0" y="0" fill="#fff" />
      </mask>
      <g mask="url(#viewboxMask)">
        <path
          d="M4 2h8v1h1v3h1v2h-1v3h-1v1H9v1h4v1h1v2H2v-2h1v-1h4v-1H4v-1H3V8H2V6h1V3h1V2Z"
          fill="#8d5524"
        />
        <path
          d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
          fill="#fff"
          fillOpacity=".1"
        />
        <path d="M7 12h2v1h4v1h1v2H2v-2h1v-1h4v-1Z" fill="#d11141" />
        <path fill="#000" fillOpacity=".3" d="M7 12h2v1H7z" />
        <path fill="#fff" d="M12 5H9v3h3zM7 5H4v3h3z" />
        <path fill="#5b7c8b" d="M12 6h-2v1h2zM7 6H5v1h2z" />
        <path fill="#fff" fillOpacity=".7" d="M12 6h-1v1h1zM7 6H6v1h1z" />
        <path d="M8 10v1h1v-1H8Z" fill="#de0f0d" />
        <path
          d="M5 1h5v1H5zM4 2h8v1H4zM9 3h1v1H9zM11 3h2v1h-2zM3 3h2v1H3z"
          fill="#611c17"
        />
      </g>
    </svg>
  );
}
