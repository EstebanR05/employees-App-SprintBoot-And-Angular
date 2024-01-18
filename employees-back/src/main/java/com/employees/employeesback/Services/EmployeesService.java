package com.employees.employeesback.Services;

import com.employees.employeesback.Entity.Employees;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EmployeesService {
    List<Employees> getAll();

    Optional<Employees> getById(Integer id);

    Employees save(Employees employee);

    Employees updateEmployee(Integer id, Employees employee);

    boolean detelete(Integer id);

}
