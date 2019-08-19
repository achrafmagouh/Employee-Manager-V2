
module.exports = [(pageObject, oldEmployee, newEmployee, otherEmployee) => {
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
]
