/*
  Warnings:

  - You are about to drop the column `question1` on the `FormUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `FormUser` DROP FOREIGN KEY `FormUser_id_fkey`;

-- AlterTable
ALTER TABLE `FormUser` DROP COLUMN `question1`;
