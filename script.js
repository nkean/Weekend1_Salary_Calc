console.log('Javascript has loaded');

let totalMonthlyCosts = 0;
let currentEmployees = [];

class Employee {
    constructor () {
        this.firstName = $('#firstNameInput').val();
        this.lastName = $('#lastNameInput').val();
        this.employeeId = $('#employeeIdInput').val();
        this.title = $('#employeeTitleInput').val();
        this.annualSalary = Number($('#annualSalaryInput').val()).toFixed(2);
        this.monthlySalary = (this.annualSalary / 12).toFixed(2);
    }
}

$(document).ready(onReady);

function onReady () {
    console.log('jQuery has loaded');
    $('#addEmployeeButton').click(addEmployeeHandler);
    $('#employeeList').on('click', '.removeEmployeeButton',removeEmployeeHandler);
    updateMonthlyCosts();
} // end onReady

function addEmployeeHandler () {
    console.log('addEmployeeButton clicked');
    addNewEmployee();
    updateMonthlyCosts();
    clearInputs();
} // end addEmployeeHander

function addNewEmployee () {
    let firstName = '<td>' + $('#firstNameInput').val() + '</td>';
    let lastName = '<td>' + $('#lastNameInput').val() + '</td>';
    let employeeId = '<td>' + $('#employeeIdInput').val() + '</td>';
    let employeeTitle = '<td>' + $('#employeeTitleInput').val() + '</td>';
    let employeeSalary = '<td>$' + Number($('#annualSalaryInput').val()).toLocaleString('en') + '</td>';
    let removeButton = '<td><button class="removeEmployeeButton">Remove</button>';
    currentEmployees.push(new Employee);
    let monthlySalary = currentEmployees[currentEmployees.length - 1].monthlySalary;
    $('#employeeList').append('<tr>' + firstName + lastName + employeeId + employeeTitle + employeeSalary + removeButton + '</tr>');
    $('#employeeList tr:last').data("monthlyCost", monthlySalary);
    console.log($('#employeeList tr:last').data("monthlyCost"));
} // end addNewEmployee

function clearInputs () {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIdInput').val('');
    $('#employeeTitleInput').val('');
    $('#annualSalaryInput').val('');   
} // end clearInputs

function updateMonthlyCosts () {
    let newEmployeeSalary = $('#annualSalaryInput').val();
    totalMonthlyCosts += (newEmployeeSalary / 12); // add new employee monthly salary to total monthly costs
    let monthlyCostFormatted = Number(totalMonthlyCosts.toFixed(2)).toLocaleString('en'); // format monthly costs to include commas for large numbers
    $('#totalMonthlyCosts').text('Total Monthly: $' + monthlyCostFormatted);
    if (totalMonthlyCosts > 20000) {
        $('#totalMonthlyCosts').css('color', 'red');
    } // end if
    else {
        $('#totalMonthlyCosts').css('color', 'black');
    }
} // end updateMonthlyCosts

function removeEmployeeHandler () {
    console.log('removeEmployeeButton clicked');
    let monthlyCostSaved = $(this).parent().parent().data("monthlyCost");
    $(this).parent().parent().remove();
    totalMonthlyCosts -= monthlyCostSaved;
    updateMonthlyCosts();
} // end removeEmployeeHandler

