//package org.launchcode.BackEnd.models;
//
//import org.apache.catalina.filters.CorsFilter;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig
//{
////    @Bean
////    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
////        http
////                .cors(Customizer.withDefaults())
////                .authorizeHttpRequests(authorize -> authorize
////                        .anyRequest().authenticated())
////                .httpBasic(Customizer.withDefaults());
////
////        return http.build();
////    }
//
////    @Bean
////    public CorsConfigurationSource corsConfigurationSource()
////    {
////        CorsConfiguration configuration = new CorsConfiguration();
////
////        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5174"));
////
////        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
////
////        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
////
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////
////        source.registerCorsConfiguration("/**", configuration);
////
////        return source;
////    }
//
//    @Bean
//    public CorsFilter corsFilter()
//    {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//
//        CorsConfiguration config = new CorsConfiguration();
//
//        config.setAllowCredentials(true);
//        config.addAllowedOrigin("http://localhost:5174");
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("*");
//        source.registerCorsConfiguration("/**", config);
//        return new CorsFilter();
//    }
//
//}
