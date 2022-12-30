import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetRolesAllProvider() {
  const select = await prisma.roles.findMany();
  return select;
}

export async function GetRolesOneProvider(id: number) {
  const select = await prisma.roles.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertRolesProvider(description: string) {
  const select = await prisma.roles.create({
    data: {
      description: description,
    },
  });
  return select;
}

export async function UpdateRolesProvider(id: number ,description: string) {
  const select = await prisma.roles.update({
    where: {
      id: id,
    },
    data: {
      description: description,
    },
  });
  return select;
}

export async function DeleteRolesProvider(id: number) {
  const select = await prisma.roles.delete({
    where: {
      id: id,
    },
  });
  return select;
}