/*
  Warnings:

  - Changed the type of `body` on the `Email` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `subject` to the `Reply` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `body` on the `Reply` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Email" DROP COLUMN "body",
ADD COLUMN     "body" JSONB NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Reply" ADD COLUMN     "subject" TEXT NOT NULL,
DROP COLUMN "body",
ADD COLUMN     "body" JSONB NOT NULL;
