-- DropForeignKey
ALTER TABLE `FormUser` DROP FOREIGN KEY `FormUser_id_fkey`;

-- AddForeignKey
ALTER TABLE `FormUser` ADD CONSTRAINT `FormUser_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
