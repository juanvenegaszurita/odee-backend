/*
  Warnings:

  - You are about to drop the column `cant` on the `prodserv` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `prodserv` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `prodserv` DROP COLUMN `cant`,
    DROP COLUMN `total`;

-- CreateTable
CREATE TABLE `ItemsQuotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cant` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `quotes_id` INTEGER NULL,
    `prodServ_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemsQuotes` ADD CONSTRAINT `ItemsQuotes_quotes_id_fkey` FOREIGN KEY (`quotes_id`) REFERENCES `Quotes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemsQuotes` ADD CONSTRAINT `ItemsQuotes_prodServ_id_fkey` FOREIGN KEY (`prodServ_id`) REFERENCES `ProdServ`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
