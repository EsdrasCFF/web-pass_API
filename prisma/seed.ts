import { prisma } from '../src/lib/prisma'

async function seed() {

  await prisma.event.create({
    data: {
      id: 'e74397a8-af80-4cc5-b3c1-b6b48f1c1fbe',
      title: 'Hospitalar 2024',
      slug: 'hospitalar-2024',
      details: 'A maior feira do ramo hospitalar da américa latina.',
      maximumAttendees: 140
    }
  })

}

seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})