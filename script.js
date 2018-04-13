console.log('Javascript has loaded');

let totalMonthlyCosts = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has loaded');
    $('#addEmployeeButton').click(addEmployeeHandler);
}

function addEmployeeHandler() {
    console.log('addEmployeeButton clicked');
    addNewEmployee();
    clearInputs();
}

function addNewEmployee() {
    let firstName = '<td>' + $('#firstNameInput').val() + '</td>';
    let lastName = '<td>' + $('#lastNameInput').val() + '</td>';
    let employeeId = '<td>' + $('#employeeIdInput').val() + '</td>';
    let employeeTitle = '<td>' + $('#employeeTitleInput').val() + '</td>';
    let employeeSalary = '<td>$' + $('#annualSalaryInput').val() + '</td>';

    $('#employeeList').append('<tr>' + firstName + lastName + employeeId + employeeTitle + employeeSalary + '</tr>');
}

function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIdInput').val('');
    $('#employeeTitleInput').val('');
    $('#annualSalaryInput').val('');   
}

function updateMonthlyCosts() {
    let newEmployeeSalary = $('#annualSalaryInput').val();
    totalMonthlyCosts += (newEmployeeSalary / 12); // add new employee monthly salary to total monthly costs
}