/*
  Warnings:

  - You are about to drop the column `prodServ_id` on the `quotes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `quotes` DROP FOREIGN KEY `Quotes_prodServ_id_fkey`;

-- AlterTable
ALTER TABLE `quotes` DROP COLUMN `prodServ_id`;
