let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

console.log(user.sizes === clone.sizes)

user.sizes.width = 60;

console.log(user.sizes)
console.log(clone.sizes)
