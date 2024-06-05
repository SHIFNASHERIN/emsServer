//[id,name,desgination,location,salary,experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//print all employee name -map
//print total number of employee -array length
//print developer employees details -filter
//print employees whose salary > 30000 -filter
//print details of employee laisha
laisha = employee.find(emp=>emp[1]=='Laisha')
console.log("details of employee laisha:",laisha);
console.log("----------------------------");

//sort employee based on their experience in descending order
employee.sort((emp1,emp2)=>emp2[5]-emp1[5])
console.log(employee);
console.log("----------------------------");
//sort employee based on their salary in ascending order
employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(employee);
console.log("----------------------------");

//print employee details with least salary
emplsal = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log("employee details with least salary ; ", emplsal);
console.log("----------------------------");

//print employee details with highest salary
emphsal = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log("employee details with highest salary ; ", emphsal);
console.log("----------------------------");
//Is there any employee having the name Nihaan
nihaan = employee.some(emp=>emp[1]=='Nihaan')
console.log("Is there any employee having the name Nihaan : ", nihaan?'Yes':'No');
console.log("----------------------------");
//total salary
total = employee.map(emp=>emp[4]).reduce((emp1,emp2)=>emp1+emp2)
console.log("total salary : ",total);
console.log("----------------------------");