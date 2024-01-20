package com.employees.employeesback.Controllers;

import com.employees.employeesback.Entity.Employees;
import com.employees.employeesback.Services.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping
    public List<Employees> getAllEmployees() {
        return employeesService.getAll();
    }

    @GetMapping(path ="/{id}")
    public Optional<Employees> getByIdEmployee(@PathVariable("id") Integer id) {
        return employeesService.getById(id);
    }

    @PostMapping
    public Employees saveEmployees(@RequestBody Employees employee) {
        return employeesService.save(employee);
    }

    @PutMapping(path ="/{id}")
    public Employees setEmployees(@PathVariable("id") Integer id, @RequestBody Employees employee) {
        return employeesService.updateEmployee(id, employee);
    }

    @DeleteMapping(path ="/{id}")
    public Boolean deleteEmployee(@PathVariable("id") Integer id) {
        return employeesService.detelete(id);
    }
}
