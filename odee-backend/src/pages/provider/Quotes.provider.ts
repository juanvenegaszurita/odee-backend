import { PrismaClient } from ".prisma/client";
import { Quotes } from "../model/index.model";

const prisma = new PrismaClient();

export async function GetQuotesAllProvider() {
  const select = await prisma.quotes.findMany({
    include: {
      ItemsQuotes: {},
    },
  });
  return select;
}

export async function GetQuotesOneSProvider(id: number) {
  const select = await prisma.quotes.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function GetQuotesOneProvider(id: number) {
  const select = await prisma.quotes.findMany({
    where: {
      id: id,
    },
    include: {
      ItemsQuotes: {}
    }
  });
  return select;
}

export async function GetQuotesAllBusinessProvider(id: number) {
  const select = await prisma.business.findMany({
    where: {
      id: id,
    },
    include: {
      clients: {
        include: {
          quotes: {
            include: {
              ItemsQuotes: {}
            }
          },
        },
      },
    },
  });
  return select;
}

export async function GetQuotesAllClientsProvider(id: number) {
  const select = await prisma.clients.findMany({
    where: {
      id: id,
    },
    include: {
      quotes: {
        include: {
          ItemsQuotes: {}
        }
      },
    },
  });
  return select;
}

export async function InsertQuotesProvider(
  title: string,
  detail: string,
  dateQuote: string,
  clients_id: number | null,
  file_id: number | null
) {
  const insert = await prisma.quotes.create({
    data: {
      title: title,
      detail: detail,
      dateQuote: dateQuote,
      clients_id: clients_id,
      file_id: file_id,
    },
  });
  return insert;
}

export async function UpdateQuotesProvider(
  id: number,
  title: string,
  detail: string,
  dateQuote: string,
  clients_id: number | null,
  file_id: number | null
) {
  const update = await prisma.quotes.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      detail: detail,
      dateQuote: dateQuote,
      clients_id: clients_id,
      file_id: file_id,
    },
  });
  return update;
}

export async function DeleteQuotesProvider(id: number) {
  const deleteU = await prisma.quotes.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
