import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetTypeFileAllProvider() {
  const select = await prisma.typeFile.findMany();
  return select;
}

export async function GetTypeFileOneProvider(id: number) {
  const select = await prisma.typeFile.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertTypeFileProvider(
  name: string,
) {
  const insert = await prisma.typeFile.create({
    data: {
      name: name,
    },
  });
  return insert;
}

export async function UpdateTypeFileProvider(
  id: number,
  name: string,
) {
  const update = await prisma.typeFile.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return update;
}

export async function DeleteTypeFileProvider(id: number) {
  const deleteU = await prisma.typeFile.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
