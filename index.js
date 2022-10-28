// Write your solution in this file!
const employee = { 
    johnG: "1 Mission Cir",
    lienL: "2 Mission Cir",
    sassyN: "3 Mission Cir",
    vinnyN: "8223 Kingsbrook",
    amyN: "123 Baltimore",
}
employee

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, [key]: value}
}

const updateEmployee = updateEmployeeWithKeyAndValue(employee, lienL, "4 Mission Cir");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, sassyN, "2308 Mission");

 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 }



