import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetProdServAllProvider() {
  const select = await prisma.prodServ.findMany();
  return select;
}

export async function GetProdServOneProvider(id: number) {
  const select = await prisma.prodServ.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertProdServProvider(
  detail: string,
  price: number,
  type: string
) {
  const insert = await prisma.prodServ.create({
    data: {
      detail: detail,
      price: price,
      type: type,
    },
  });
  return insert;
}

export async function UpdateProdServProvider(
  id: number,
  detail: string,
  price: number,
  type: string
) {
  const update = await prisma.prodServ.update({
    where: {
      id: id,
    },
    data: {
      detail: detail,
      price: price,
      type: type,
    },
  });
  return update;
}

export async function DeleteProdServProvider(id: number) {
  const deleteU = await prisma.prodServ.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
