-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('SUPERADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER';
