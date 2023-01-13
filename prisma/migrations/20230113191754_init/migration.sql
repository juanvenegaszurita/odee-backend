/*
  Warnings:

  - You are about to drop the column `clave` on the `Users` table. All the data in the column will be lost.
  - Added the required column `address` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_name` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UID` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Business` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `business_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `clave`,
    ADD COLUMN `UID` VARCHAR(191) NOT NULL;
