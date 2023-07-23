const posts = [
  {
    id: "abc",
    title: "ABC",
  },
  {
    id: "def",
    title: "DEF",
  },
  {
    id: "ghi",
    title: "GHI",
  },
];

const profiles = [
  {
    id: 1,
    name: "John Smith",
    age: 20,
  },
  {
    id: 2,
    name: "Alexander II",
    age: 22,
  },
  {
    id: 3,
    name: "Charles Wayne",
    age: 23,
  },
];

export default Object.freeze({
  posts,
  profiles,
});

export { posts, profiles };
