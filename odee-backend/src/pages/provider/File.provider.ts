import { PrismaClient } from ".prisma/client";
import { File } from "../model/index.model";

const prisma = new PrismaClient();

export async function GetFileAllProvider() {
  const select = await prisma.file.findMany();
  return select;
}

export async function GetFileOneProvider(id: number) {
  const select = await prisma.file.findMany({
    where: {
      id: id,
    },
  });
  return select;
}

export async function InsertFileProvider(
  url: string,
  mimeType: string,
  typeFile_id: number | null
) {
  const insert = await prisma.file.create({
    data: {
      url: url,
      mimeType: mimeType,
      typeFile_id: typeFile_id,
    },
  });
  return insert;
}

export async function UpdateFileProvider(
  id: number,
  url: string,
  mimeType: string,
  typeFile_id: number
) {
  const update = await prisma.file.update({
    where: {
      id: id,
    },
    data: {
      url: url,
      mimeType: mimeType,
      typeFile_id: typeFile_id,
    },
  });
  return update;
}

export async function DeleteFileProvider(id: number) {
  const deleteU = await prisma.file.delete({
    where: {
      id: id,
    },
  });
  return deleteU;
}
