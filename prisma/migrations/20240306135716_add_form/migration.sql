/*
  Warnings:

  - Added the required column `question1` to the `FormUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormUser` ADD COLUMN `question1` VARCHAR(191) NOT NULL;
