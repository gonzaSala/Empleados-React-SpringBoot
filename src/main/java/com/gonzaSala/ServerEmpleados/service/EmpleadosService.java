package com.gonzaSala.ServerEmpleados.service;

import com.gonzaSala.ServerEmpleados.model.Empleados;
import com.gonzaSala.ServerEmpleados.repository.EmpleadosRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmpleadosService {
    private final EmpleadosRepository empleadosRepository;

    public Empleados postEmpleados(Empleados empleados) {
        return empleadosRepository.save(empleados);
    }

    public List<Empleados> getEmpleadosList() {
        return empleadosRepository.findAll();
    }

    public void eliminarEmpleado(Long id) {
        if (!empleadosRepository.existsById(id)) {
            throw new EntityNotFoundException("Empleado con ID" + id + " no encontrado");
        }

        empleadosRepository.deleteById(id);
    }

    public Empleados getEmpleadoById(Long id) {
        return empleadosRepository.findById(id).orElse(null);
    }

    public Empleados editarEmpleado(Long id, Empleados empleados) {
        Optional<Empleados> optionalEmpleados = empleadosRepository.findById(id);
        if (optionalEmpleados.isPresent()) {
            Empleados empleados1 = optionalEmpleados.get();

            empleados1.setEmail(empleados.getEmail());
            empleados1.setName(empleados.getName());
            empleados1.setPhone(empleados.getPhone());
            empleados1.setDepartment(empleados.getDepartment());

            return empleadosRepository.save(empleados1);
        }

        return null;
    }
}