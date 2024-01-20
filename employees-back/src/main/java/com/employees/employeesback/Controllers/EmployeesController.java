package com.employees.employeesback.Controllers;

import com.employees.employeesback.Entity.Employees;
import com.employees.employeesback.Services.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeesController {
    /**
     * the service employees
     */
    @Autowired
    private EmployeesService employeesService;

    public EmployeesController(EmployeesService employeesService) {
        this.employeesService = employeesService;
    }

    @GetMapping
    public ResponseEntity<List<Employees>> getAllEmployees() {
        List<Employees> getAll = employeesService.getAll();

        if(getAll.isEmpty()){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(getAll, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Employees>> getByIdEmployee(@PathVariable("id") Integer id) {
        Optional<Employees> findById = employeesService.getById(id);

        if(findById.equals(null)){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(findById, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employees> saveEmployees(@RequestBody Employees employee) {
        Employees newEmployee = employeesService.save(employee);

        if(newEmployee.equals(null)){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(newEmployee, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Employees> updateEmployees(@RequestBody Employees employee) {
        Employees updatedEmployee = employeesService.updateEmployee(employee);

        if(updatedEmployee.equals(null)){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Integer id) {
        employeesService.detelete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
