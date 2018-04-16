console.log('Javascript has loaded');

let totalMonthlyCosts = 0;

class Employee {
    constructor ( ) {
        this.firstName = $('#firstNameInput').val();
        this.lastName = $('#lastNameInput').val();
        this.employeeId = $('#employeeIdInput').val();
        this.title = $('#employeeTitleInput').val();
        this.annualSalary = Number($('#annualSalaryInput').val());
        this.monthlySalary = this.annualSalary / 12;
    }
}

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has loaded');
    $('#addEmployeeButton').click(addEmployeeHandler);
    $('#employeeList').on('click', '.removeEmployeeButton',removeEmployeeHandler);
    updateMonthlyCosts();
} // end onReady

function addEmployeeHandler() {
    console.log('addEmployeeButton clicked');
    addNewEmployee();
    updateMonthlyCosts();
    clearInputs();
} // end addEmployeeHander

function addNewEmployee() {
    let firstName = '<td>' + $('#firstNameInput').val() + '</td>';
    let lastName = '<td>' + $('#lastNameInput').val() + '</td>';
    let employeeId = '<td>' + $('#employeeIdInput').val() + '</td>';
    let employeeTitle = '<td>' + $('#employeeTitleInput').val() + '</td>';
    let employeeSalary = '<td>$' + Number($('#annualSalaryInput').val()).toLocaleString('en') + '</td>';
    let removeButton = '<td><button class="removeEmployeeButton">Remove</button>';

    $('#employeeList').append('<tr>' + firstName + lastName + employeeId + employeeTitle + employeeSalary + removeButton + '</tr>');
} // end addNewEmployee

function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIdInput').val('');
    $('#employeeTitleInput').val('');
    $('#annualSalaryInput').val('');   
} // end clearInputs

function updateMonthlyCosts() {
    let newEmployeeSalary = $('#annualSalaryInput').val();
    totalMonthlyCosts += (newEmployeeSalary / 12); // add new employee monthly salary to total monthly costs
    let monthlyCostFormatted = Number(totalMonthlyCosts.toFixed(2)).toLocaleString('en'); // format monthly costs to include commas for large numbers
    $('#totalMonthlyCosts').text('Total Monthly: $' + monthlyCostFormatted);
    if (totalMonthlyCosts > 20000) {
        $('#totalMonthlyCosts').css('color', 'red');
    } // end if
} // end updateMonthlyCosts

function removeEmployeeHandler() {
    console.log('removeEmployeeButton clicked');
    $(this).parent().parent().remove();
} // end removeEmployee

