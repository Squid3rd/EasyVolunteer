/*
  Warnings:

  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Form` DROP FOREIGN KEY `Form_id_fkey`;

-- DropTable
DROP TABLE `Form`;

-- CreateTable
CREATE TABLE `FormUser` (
    `id` VARCHAR(191) NOT NULL,
    `question1` VARCHAR(191) NOT NULL,
    `question2` VARCHAR(191) NOT NULL,
    `question3` VARCHAR(191) NOT NULL,
    `squestion4` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FormUser` ADD CONSTRAINT `FormUser_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
