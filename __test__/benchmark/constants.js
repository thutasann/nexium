/** Big Nested Array */
const bigNestedArray = [
  {
    id: 1,
    name: 'Alice',
    details: {
      age: 25,
      address: {
        city: 'New York',
        zip: '10001',
      },
      hobbies: ['reading', 'swimming'],
    },
  },
  {
    id: 2,
    name: 'Bob',
    details: {
      age: 30,
      address: {
        city: 'Los Angeles',
        zip: '90001',
      },
      hobbies: ['cycling', 'gaming'],
    },
  },
  {
    id: 3,
    name: 'Charlie',
    details: {
      age: 28,
      address: {
        city: 'Chicago',
        zip: '60601',
      },
      hobbies: ['photography', 'drawing'],
    },
  },
  {
    id: 1, // Duplicate of the first object
    name: 'Alice',
    details: {
      age: 25,
      address: {
        city: 'New York',
        zip: '10001',
      },
      hobbies: ['reading', 'swimming'],
    },
  },
  {
    id: 2, // Duplicate of the second object
    name: 'Bob',
    details: {
      age: 30,
      address: {
        city: 'Los Angeles',
        zip: '90001',
      },
      hobbies: ['cycling', 'gaming'],
    },
  },
  {
    id: 4,
    name: 'Dave',
    details: {
      age: 35,
      address: {
        city: 'San Francisco',
        zip: '94101',
      },
      hobbies: ['hiking', 'traveling'],
    },
  },
  {
    id: 3, // Duplicate of the third object
    name: 'Charlie',
    details: {
      age: 28,
      address: {
        city: 'Chicago',
        zip: '60601',
      },
      hobbies: ['photography', 'drawing'],
    },
  },
  {
    id: 5,
    name: 'Eve',
    details: {
      age: 32,
      address: {
        city: 'Boston',
        zip: '02101',
      },
      hobbies: ['writing', 'yoga'],
    },
  },
]

/** Big Unsorted Array */
const bigUnsortedArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1)

module.exports = { bigNestedArray, bigUnsortedArray }
