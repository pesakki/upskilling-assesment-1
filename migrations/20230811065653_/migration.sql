/*
  Warnings:

  - You are about to drop the column `user_id` on the `order` table. All the data in the column will be lost.
  - Made the column `order_date` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_amount` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subtotal` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comment` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `user_id`,
    MODIFY `order_date` DATETIME(3) NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL,
    MODIFY `total_amount` DOUBLE NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `subtotal` DOUBLE NOT NULL,
    MODIFY `rating` INTEGER NOT NULL,
    MODIFY `comment` VARCHAR(191) NOT NULL;
