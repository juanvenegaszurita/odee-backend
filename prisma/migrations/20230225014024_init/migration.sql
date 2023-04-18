/*
  Warnings:

  - You are about to drop the `ItemsQuotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quotes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ItemsQuotes` DROP FOREIGN KEY `ItemsQuotes_prodServ_id_fkey`;

-- DropForeignKey
ALTER TABLE `ItemsQuotes` DROP FOREIGN KEY `ItemsQuotes_quotes_id_fkey`;

-- DropForeignKey
ALTER TABLE `Quotes` DROP FOREIGN KEY `Quotes_clients_id_fkey`;

-- DropForeignKey
ALTER TABLE `Quotes` DROP FOREIGN KEY `Quotes_file_id_fkey`;

-- DropTable
DROP TABLE `ItemsQuotes`;

-- DropTable
DROP TABLE `Quotes`;

-- CreateTable
CREATE TABLE `Quotation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `dateQuote` VARCHAR(191) NOT NULL,
    `clients_id` INTEGER NULL,
    `file_id` INTEGER NULL,

    UNIQUE INDEX `Quotation_clients_id_key`(`clients_id`),
    UNIQUE INDEX `Quotation_file_id_key`(`file_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemsQuotation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cant` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `quotation_id` INTEGER NULL,
    `prodServ_id` INTEGER NULL,

    UNIQUE INDEX `ItemsQuotation_quotation_id_key`(`quotation_id`),
    UNIQUE INDEX `ItemsQuotation_prodServ_id_key`(`prodServ_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Quotation` ADD CONSTRAINT `Quotation_clients_id_fkey` FOREIGN KEY (`clients_id`) REFERENCES `Clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quotation` ADD CONSTRAINT `Quotation_file_id_fkey` FOREIGN KEY (`file_id`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemsQuotation` ADD CONSTRAINT `ItemsQuotation_quotation_id_fkey` FOREIGN KEY (`quotation_id`) REFERENCES `Quotation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemsQuotation` ADD CONSTRAINT `ItemsQuotation_prodServ_id_fkey` FOREIGN KEY (`prodServ_id`) REFERENCES `ProdServ`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
