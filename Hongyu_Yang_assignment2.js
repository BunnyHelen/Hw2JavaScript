/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
let str1a = JSON.parse(JSON.stringify(itemsObject));
let q1a = () => {
  console.log(
    str1a.filter(
      (e) => ((e.quantity = e.quantity * 2), (e.price = e.price * 2))
    )
  );
};

let str1b = JSON.parse(JSON.stringify(itemsObject));
let q1b = () => {
  console.log(str1b.filter((e) => (e.quantity > 2, e.price > 300)));
};

let sum = 0;

let q1c = () => {
  itemsObject.forEach((element) => {
    sum += element.quantity * element.price;
  });
  console.log(sum);
};
console.log("Q1:");
q1a();
q1b();
q1c();

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

let q2 = () => {
  console.log(
    string.trim().split(/[- ]+/).join(" ").toLocaleString().toLocaleLowerCase()
  );
};

console.log("Q2:");
q2();

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role.
 With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

let q31st = first;
let q32nd = second;

const checkDuplicates = new Set();
let q3 = () => {
  q31st.forEach((e) => {
    if (!checkDuplicates.has(e.uuid)) {
      checkDuplicates.add(e.uuid);
    }
  });
  q32nd.forEach((e1) => {
    if (!checkDuplicates.has(e1.uuid)) {
      e1.name = null;
    } else {
      q31st.forEach((a) => {
        if (e1.uuid == a.uuid) {
          e1.name = a.name;
          checkDuplicates.delete(a.uuid);
        }
      });
    }
  });
  q31st.forEach((a2) => {
    if (checkDuplicates.has(a2.uuid)) {
      a2 = { uuid: a2.uuid, role: null, name: a2.name };
      q32nd.push(a2);
    }
  });

  var output = q32nd.sort(function (a, b) {
    return a.uuid - b.uuid;
  });
  console.log(output);
};

console.log("Q3:");
q3();
