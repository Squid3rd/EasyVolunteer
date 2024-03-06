-- CreateTable
CREATE TABLE `Form` (
    `id` VARCHAR(191) NOT NULL,
    `question1` VARCHAR(191) NOT NULL,
    `question2` VARCHAR(191) NOT NULL,
    `question3` VARCHAR(191) NOT NULL,
    `squestion4` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
