package com.gonzaSala.ServerEmpleados.controller;

import com.gonzaSala.ServerEmpleados.model.Empleados;
import com.gonzaSala.ServerEmpleados.service.EmpleadosService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ControllerEmpleados {
    private final EmpleadosService empleadosService;



    @PostMapping("/empleados")
    public Empleados postEmpleados(@RequestBody Empleados empleados) {
        return empleadosService.postEmpleados(empleados);
    }

    @GetMapping("/listaEmpleados")
    public List<Empleados> getEmpleadosList(){
        return empleadosService.getEmpleadosList();
    }

    @DeleteMapping("empleados/{id}")
    public ResponseEntity<?> deleteEmpleado(@PathVariable  Long id){
        try {
            empleadosService.eliminarEmpleado(id);
            return new ResponseEntity<>("Empleado con ID" + id+ " eliminado con éxito", HttpStatus.OK);
        }catch (EntityNotFoundException e){
                return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/empleados/{id}")
    public ResponseEntity<?> getEmpleadoById (@PathVariable Long id){
        Empleados empleados = empleadosService.getEmpleadoById(id);
        if(empleados == null ) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(empleados);
    }

    @PatchMapping("/empleados/{id}")
    public ResponseEntity<?> editarEmpleado(@PathVariable Long id, @RequestBody Empleados empleados){

        Empleados editarEmpleados = empleadosService.editarEmpleado(id,empleados);

        if(editarEmpleados == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.ok(editarEmpleados);

    }
 }
