package com.employees.employeesback.Repository;

import com.employees.employeesback.Entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeesRepository extends JpaRepository<Employees, Integer> {

}
