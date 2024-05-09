export default function createIteratorObject(report) {
  const arrayOfEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    arrayOfEmployees.push(...employees);
  }

  return arrayOfEmployees;
}
