const books = [
  {
    id: 1,
    title: "Mistborn",
    author: "Brandon Sanderson",
  },
  {
    id: 2,
    title: "Leviathan Wakes",
    author: "James S. A. Corey",
  },
  {
    id: 3,
    title: "Red Rising",
    author: "Pierce Brown",
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};
