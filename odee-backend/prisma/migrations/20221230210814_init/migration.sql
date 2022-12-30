/*
  Warnings:

  - A unique constraint covering the columns `[typeFile_id]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quotes_id]` on the table `ItemsQuotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prodServ_id]` on the table `ItemsQuotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clients_id]` on the table `Quotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[file_id]` on the table `Quotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `File_typeFile_id_key` ON `File`(`typeFile_id`);

-- CreateIndex
CREATE UNIQUE INDEX `ItemsQuotes_quotes_id_key` ON `ItemsQuotes`(`quotes_id`);

-- CreateIndex
CREATE UNIQUE INDEX `ItemsQuotes_prodServ_id_key` ON `ItemsQuotes`(`prodServ_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Quotes_clients_id_key` ON `Quotes`(`clients_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Quotes_file_id_key` ON `Quotes`(`file_id`);
