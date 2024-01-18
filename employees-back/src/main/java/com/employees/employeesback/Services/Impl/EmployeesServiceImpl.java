package com.employees.employeesback.Services.Impl;

import com.employees.employeesback.Entity.Employees;
import com.employees.employeesback.Repository.IEmployeesRepository;
import com.employees.employeesback.Services.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeesServiceImpl implements EmployeesService {

    /**
     * the employees repository
     */
    @Autowired
    private IEmployeesRepository employeesRepository;

    @Override
    public List<Employees> getAll() {
        return employeesRepository.findAll();
    }

    @Override
    public Optional<Employees> getById(Integer id) {
        return employeesRepository.findById(id);
    }

    @Override
    public Employees save(Employees employee) {
        return employeesRepository.save(employee);
    }

    @Override
    public Employees updateEmployee(Integer id, Employees employee) {
        Employees employeeEdit = employeesRepository.findById(id).get();

        employeeEdit.setEmail(employee.getEmail());
        employeeEdit.setName(employee.getName());
        employeeEdit.setPhone(employee.getPhone());

        return employeeEdit;
    }

    @Override
    public boolean detelete(Integer id) {
        try {
            employeesRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
