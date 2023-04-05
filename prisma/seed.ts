import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (const group of getGroups()) {
    const data = { ...group };
    await prisma.group.create({ data });
  }

  for (const habit of getHabits()) {
    const data = { ...habit };
    await prisma.habit.create({ data });
  }

  // async version for when order of entry doesn't matter
  //
  // await Promise.all(
  //   getGroups().map((group) => {
  //     const data = { ...group };
  //     return prisma.group.create({ data });
  //   })
  // );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

function getGroups() {
  return [
    {
      name: "Morning",
    },
    {
      name: "Evening",
    },
    {
      name: "A Long List",
    },
  ];
}

function getHabits() {
  return [
    {
      groupId: 1,
      content: "Brush teeth",
    },
    {
      groupId: 1,
      content: "Wash face",
    },
    {
      groupId: 1,
      content: "Drink water",
    },
    {
      groupId: 2,
      content: "Brush teeth",
    },
    {
      groupId: 2,
      content: "Wash face",
    },
    {
      groupId: 2,
      content: "Eat a snack",
    },
    {
      groupId: 2,
      content: "Make Fiona potatoes",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
    {
      groupId: 3,
      content: "An item",
    },
  ];
}
