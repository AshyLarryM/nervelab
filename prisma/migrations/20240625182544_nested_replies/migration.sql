-- AlterTable
ALTER TABLE "Reply" ADD COLUMN     "parentId" TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Reply"("id") ON DELETE SET NULL ON UPDATE CASCADE;
