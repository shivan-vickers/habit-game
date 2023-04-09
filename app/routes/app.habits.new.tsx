import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const groupName = form.get("group-name");

  if (typeof groupName !== "string") {
    throw new Error("Form not submitted correctly.");
  }

  if (groupName?.length > 16) {
    console.log("Group Name is too long (> 16 characters).");
  }

  await db.group.create({
    data: { name: groupName },
  });

  return redirect("/app/habits");
};

export default function New() {
  return (
    <div>
      <Form
        method="post"
        className="h-fit w-fit shadow-md shadow-black transition-all duration-500 hover:outline-double hover:outline-4 hover:outline-primary"
      >
        <div className="flex w-full justify-center border-2 border-border-100 bg-background-light">
          <input
            type="text"
            name="group-name"
            placeholder="Enter Group Name"
            className="w-44 bg-background-light px-1 text-primary caret-primary focus:outline-none active:border-0"
          ></input>
        </div>
        <div className="grid h-24 w-48 place-items-center border-x-2 border-b-2 border-border-100 bg-background-dark">
          <button
            type="submit"
            className="h-10 w-24 border-2 border-secondary bg-background-light"
          >
            Create
          </button>
        </div>
      </Form>
    </div>
  );
}
