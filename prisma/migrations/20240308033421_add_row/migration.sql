/*
  Warnings:

  - Added the required column `user_id` to the `UserVolunteer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserVolunteer` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;
