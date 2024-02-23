/*
  Warnings:

  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Formation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hobby` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_ExperienceToTechnology" DROP CONSTRAINT "_ExperienceToTechnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExperienceToTechnology" DROP CONSTRAINT "_ExperienceToTechnology_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_B_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Experience_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Experience_id_seq";

-- AlterTable
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Formation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Formation_id_seq";

-- AlterTable
ALTER TABLE "Hobby" DROP CONSTRAINT "Hobby_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hobby_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hobby_id_seq";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Project_id_seq";

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Technology_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "_ExperienceToTechnology" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_ProjectToTechnology" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperienceToTechnology" ADD CONSTRAINT "_ExperienceToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperienceToTechnology" ADD CONSTRAINT "_ExperienceToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
