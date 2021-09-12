const data = {
    name: "rifat",
    age : 20,
    school : "GCPSC",
    knowledge: ["c","c++","javascript","java","react"]
};

const dataString = JSON.stringify(data);
console.log(dataString);
const dataParse = JSON.parse(dataString);
console.log(dataParse.knowledge);