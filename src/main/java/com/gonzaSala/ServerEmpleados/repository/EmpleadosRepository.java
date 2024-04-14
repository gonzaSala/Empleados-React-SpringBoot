package com.gonzaSala.ServerEmpleados.repository;

import com.gonzaSala.ServerEmpleados.model.Empleados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadosRepository extends JpaRepository<Empleados,Long> {

}
