import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetUsersAllProvider() {
  const select = await prisma.users.findMany();
  return select;
}

export async function GetUsersOneProvider(id: number) {
  const select = await prisma.users.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertUsersProvider(
  name: string,
  clave: string,
  roles_id: number
) {
  const insert = await prisma.users.create({
    data: {
      name: name,
      clave: clave,
      createdAt: undefined,
      roles_id: 1,
    },
  });
  return insert;
}

export async function UpdateUsersProvider(
  id: number,
  name: string,
  clave: string,
  roles_id: number
) {
  const update = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      clave: clave,
      roles_id: roles_id,
    },
  });
  return update;
}

export async function DeleteUsersProvider(id: number) {
  const deleteU = await prisma.users.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
