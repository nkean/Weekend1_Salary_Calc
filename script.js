console.log('Javascript has loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has loaded');
    $('#addEmployeeButton').click(addEmployeeHandler);
}

function addEmployeeHandler() {
    console.log('addEmployeeButton clicked');
    addNewEmployee();
}

function addNewEmployee() {
    let firstName = '<td>' + $('#firstNameInput').val() + '</td>';
    let lastName = '<td>' + $('#lastNameInput').val() + '</td>';
    let employeeId = '<td>' + $('#employeeIdInput').val() + '</td>';
    let employeeTitle = '<td>' + $('#employeeTitleInput').val() + '</td>';
    let employeeSalary = '<td>$ ' + $('#annualSalaryInput').val() + '</td>';

    $('#employeeList').append('<tr>' + firstName + lastName + employeeId + employeeTitle + employeeSalary + '</tr>');
}