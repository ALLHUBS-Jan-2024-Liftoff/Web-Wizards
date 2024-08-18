package org.launchcode.BackEnd.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedOrigins("http://localhost:5173") // Allow frontend origin
                .allowedMethods("*") // Allow specific methods
                .allowedHeaders("*")
                .allowCredentials(true); // Allow credentials such as cookies
    }

}