import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  const groups = await db.group.findMany();

  const habits = await Promise.all(
    groups.map((group) => db.habit.findMany({ where: { groupId: group.id } }))
  );

  return json({ groups, habits });
};

export const action = async ({ request }: ActionArgs) => {
  console.log(request);
  console.log("action triggered");
};

export default function Habits() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-wrap content-start gap-x-3 gap-y-6 overflow-auto p-6">
      <Outlet />
      {/* Mark up the groups */}
      {data.groups.map((group) => (
        <div
          className="h-fit w-48 border-2 border-border-100 shadow-md shadow-black transition-all duration-500 hover:outline-double hover:outline-4 hover:outline-primary"
          key={group.id}
        >
          <p className="flex justify-end border-b-2 border-border-100 bg-background-light px-2 text-primary">
            <p className="w-full">{group.name}</p>
            <button>x</button>
          </p>
          {/* Mark up the habit list */}
          <ul className="max-h-56 overflow-auto bg-background-dark py-2">
            {data.habits[group.id - 1].map((habit) => (
              <li key={habit.id} className="flex">
                {boxIcon()}
                <span>{habit.content}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function boxIcon() {
  return (
    <svg
      className="mx-1 mt-1"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
