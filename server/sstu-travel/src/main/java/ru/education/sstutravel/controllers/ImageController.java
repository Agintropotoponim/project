package ru.education.sstutravel.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {

    private static final String IMAGE_FOLDER = "src/main/resources/static/";

    @GetMapping(value = "/images/{imageName}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE, "image/svg+xml"})
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) throws IOException {
        Path imagePath = Paths.get(IMAGE_FOLDER + imageName);
        if (Files.exists(imagePath)) {
            ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(imagePath));

            String contentType = Files.probeContentType(imagePath);
            MediaType mediaType;
            if (contentType != null) {
                mediaType = MediaType.parseMediaType(contentType);
            } else {
                mediaType = MediaType.APPLICATION_OCTET_STREAM;
            }

            return ResponseEntity.ok().contentLength(resource.contentLength())
                    .contentType(mediaType).body(resource);
        }
        return ResponseEntity.notFound().build();
    }
}