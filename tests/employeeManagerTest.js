
let employeeManagerPage = {}

module.exports = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
    pageObject
        .clickEmployee(oldEmployee)
        .editEmployee(newEmployee)
        .click('@saveButton')
        .clickEmployee(otherEmployee)
        .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
    pageObject
        .clickEmployee(newEmployee.name)
        .expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@nameField').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phoneField').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@titleField').value.to.equal(newEmployee.title)
}

//let editTest = require('../testAssets/editTest')


var employeeManagerPage = {}

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.employeeManagerPage()
        employeeManagerPage.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee Q4A-64': browser => {
        employeeManagerPage
            .click('@addButton')
            .clickEmployee('New Employee')
            .expect.element('@cardTitle').text.to.equal('New Employee')
    },
    'It can edit a new employee Q4A-72': browser => {
        employeeManagerPage
            .click('@addButton')
            .clickEmployee('New Employee')
            .editEmployee({ name: 'Hank Hill', phone: '0000000000' })
            .click('@saveButton')
            .expect.element('@cardTitle').text.to.equal('Hank Hill')
        employeeManagerPage
            .clickEmployee('Dollie Berry')
            .expect.element('@cardTitle').text.to.equal('Dollie Berry')
        employeeManagerPage
            .clickEmployee('Hank Hill')
            .expect.element('@cardTitle').text.to.equal('Hank Hill')
    },
    'It can edit an existing employee Q4A-73': browser => {
        employeeManagerPage
            .clickEmployee('Dollie Berry')
            .editEmployee({ title: 'Master and Commander' })
            .click('@saveButton')
            .clickEmployee('Bernice Ortiz')
            .expect.element('@cardTitle').text.to.equal('Bernice Ortiz')
        employeeManagerPage
            .clickEmployee('Dollie Berry')
            .expect.element('@titleField').value.to.equal('Master and Commander')
    }
}
