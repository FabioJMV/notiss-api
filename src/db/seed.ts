import { fakerES } from "@faker-js/faker";
import db from "db";
import { note } from "./schema";

async function seed() {
  const notes: (typeof note.$inferInsert)[] = [];

  console.info("Creating fake notes...");
  for (let i = 0; i < 20; i++) {
    notes.push({
      title: fakerES.word.sample({ length: { min: 1, max: 5 }, strategy: "any-length" }),
      content: fakerES.lorem.paragraphs({ min: 1, max: 3 })
    });
  }

  console.info("Seeding database...");
  const [results] = await db.insert(note).values(notes);
  console.info(`Seeded ${results.affectedRows} notes`);
}

seed()
  .then(() => {
    console.log("Notes seeded successfully!");
    process.exit(0);
  })
  .catch((e) => {
    console.error("Error seeding notes", e);
    process.exit(1);
  });
