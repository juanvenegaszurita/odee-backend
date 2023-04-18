/*
  Warnings:

  - You are about to drop the column `mimeType` on the `File` table. All the data in the column will be lost.
  - Added the required column `extension` to the `TypeFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `File` DROP COLUMN `mimeType`;

-- AlterTable
ALTER TABLE `TypeFile` ADD COLUMN `extension` VARCHAR(191) NOT NULL;
