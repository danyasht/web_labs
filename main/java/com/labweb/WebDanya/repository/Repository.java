package com.labweb.WebDanya.repository;

import com.labweb.WebDanya.entity.SolarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<SolarEntity, Long> {
}