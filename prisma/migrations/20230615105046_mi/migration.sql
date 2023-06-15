/*
  Warnings:

  - You are about to drop the column `descrtiption` on the `Note` table. All the data in the column will be lost.
  - Added the required column `description` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "descrtiption",
ADD COLUMN     "description" TEXT NOT NULL;
