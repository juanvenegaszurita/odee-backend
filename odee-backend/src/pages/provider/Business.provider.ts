import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetBusinessAllProvider() {
  const select = await prisma.business.findMany();
  return select;
}

export async function GetBusinessOneProvider(id: number) {
  const select = await prisma.business.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertBusinessProvider(
  name: string,
  rut: string,
  users_id: number
) {
  const insert = await prisma.business.create({
    data: {
      name: name,
      rut: rut,
      users_id: users_id,
    },
  });
  return insert;
}

export async function UpdateBusinessProvider(
  id: number,
  name: string,
  rut: string,
  users_id: number
) {
  const update = await prisma.business.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      rut: rut,
      users_id: users_id,
    },
  });
  return update;
}

export async function DeleteBusinessProvider(id: number) {
  const deleteU = await prisma.business.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
