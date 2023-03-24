// Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj) {
  for (key in obj) {
    return true;
  }
  return false;
}

isEmpty(user);

// Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  console.log(sum);
}

sumSalaries(salaries);

// Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyBy2(obj) {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  console.log(obj);
}

multiplyBy2(menu);
