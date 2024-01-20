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

    public EmployeesServiceImpl(IEmployeesRepository employeesRepository){
        this.employeesRepository = employeesRepository;
    }

    @Override
    public List<Employees> getAll() {
        return employeesRepository.findAll();
    }
    @Override
    public Optional<Employees> getById(Integer id) {return employeesRepository.findById(id);}
    @Override
    public Employees save(Employees employee) {return employeesRepository.save(employee);}
    @Override
    public Employees updateEmployee(Employees employee) {return employeesRepository.save(employee);}
    @Override
    public void detelete(Integer id) {employeesRepository.deleteById(id);}
}
