package com.labweb.WebDanya.controller;

import com.labweb.WebDanya.entity.SolarEntity;
import com.labweb.WebDanya.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/solar")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class SolarController {

    @Autowired
    private Repository Repository;

    @PostMapping
    public ResponseEntity<SolarEntity> createSolar(@RequestBody SolarEntity solar) {
        SolarEntity savedSolar = Repository.save(solar);
        return new ResponseEntity<>(savedSolar, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SolarEntity>> getAllSolar() {
        List<SolarEntity> solars = Repository.findAll();
        return new ResponseEntity<>(solars, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SolarEntity> getSolarById(@PathVariable Long id) {
        Optional<SolarEntity> solar = Repository.findById(id);
        return solar.map(solarEntity -> new ResponseEntity<>(solarEntity, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSolar(@PathVariable Long id) {
        if (Repository.existsById(id)) {
            Repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<SolarEntity> updateSolar(@PathVariable Long id, @RequestBody SolarEntity solar) {
        if (Repository.existsById(id)) {
            solar.setId(id);
            SolarEntity savedSolar = Repository.save(solar);
            return new ResponseEntity<>(savedSolar, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
