const faker = require('faker')

// index.js
module.exports = () => {
  const data = { tutors: [] }
  const cities = ['London', 'Liverpool', 'Manchester']

  for (let i = 0; i < 150; i += 1) {
    const studentsCount = (i % 5) + 1
    const students = []
    for (let j = 0; j < studentsCount; j += 1) {
      students.push({ id: `${i}${j}`, photo: faker.image.avatar() })
    }
    data.tutors.push({
      id: i,
      name: faker.name.findName(),
      city: cities[i % 3],
      photo: faker.image.avatar(),
      students,
    })
  }
  return data
}
