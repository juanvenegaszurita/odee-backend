import { PrismaClient } from ".prisma/client";
import { ItemsQuotes } from "../model/index.model";

const prisma = new PrismaClient();

export async function GetItemsQuotesAllProvider() {
  const select = await prisma.itemsQuotes.findMany();
  return select;
}

export async function GetItemsQuotesOneProvider(
  id: number
) {
  const select = await prisma.itemsQuotes.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertItemsQuotesProvider(
  cant: number,
  total: number,
  quotes_id: number | null, 
  prodServ_id: number | null
) {
  const insert = await prisma.itemsQuotes.create({
    data: {
      cant: cant,
      total: total,
      quotes_id: quotes_id,
      prodServ_id: prodServ_id,
    },
  });
  return insert;
}

export async function UpdateItemsQuotesProvider(
  cant: number,
  total: number,
  quotes_id: number,
  prodServ_id: number
) {
  const update = await prisma.itemsQuotes.update({
    where: {
      quotes_id: quotes_id
    },
    data: {
      cant: cant,
      total: total,
      quotes_id: quotes_id,
      prodServ_id: prodServ_id,
    },
  });
  return update;
}

export async function DeleteItemsQuotesProvider(id: number) {
  const deleteU = await prisma.itemsQuotes.delete({
    where: {
      quotes_id: id
    },
  });
  return deleteU;
}
