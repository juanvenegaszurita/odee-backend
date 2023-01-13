/*
  Warnings:

  - Added the required column `mime` to the `TypeFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TypeFile` ADD COLUMN `mime` VARCHAR(191) NOT NULL;
