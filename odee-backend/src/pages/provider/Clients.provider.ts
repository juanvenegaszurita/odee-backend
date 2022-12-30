import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function GetClientsAllProvider() {
  const select = await prisma.clients.findMany();
  return select;
}

export async function GetClientsOneProvider(id: number) {
  const select = await prisma.clients.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertClientsProvider(
  name: string,
  rut: string,
  address: string,
  business_id: number
) {
  const insert = await prisma.clients.create({
    data: {
      name: name,
      rut: rut,
      address: address,
      business_id: business_id,
    },
  });
  return insert;
}

export async function UpdateClientsProvider(
  id: number,
  name: string,
  rut: string,
  address: string,
  business_id: number
) {
  const update = await prisma.clients.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      rut: rut,
      address: address,
      business_id: business_id,
    },
  });
  return update;
}

export async function DeleteClientsProvider(id: number) {
  const deleteU = await prisma.clients.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
