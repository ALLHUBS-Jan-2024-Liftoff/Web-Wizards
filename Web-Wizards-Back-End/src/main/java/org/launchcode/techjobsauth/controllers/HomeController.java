//package org.launchcode.techjobsauth.controllers;
//
//import jakarta.validation.Valid;
//import org.launchcode.techjobsauth.models.Post;
//import org.launchcode.techjobsauth.models.data.PostRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.validation.Errors;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.ui.Model;
//
//import java.util.Optional;
//
///**
// * Created by LaunchCode
// */
//@Controller
//public class HomeController {
//
//    @Autowired
//    private PostRepository postRepository;
//
//    //@RequestMapping("")
//    @GetMapping("/")
//    public String index(Model model) {
//        model.addAttribute("posts", postRepository.findAll());
//        return "index";
//    }
//
//    @GetMapping("add")
//    public String displayAddJobForm(Model model) {
//        model.addAttribute(new Post());
//        return "add";
//    }
//
//    @PostMapping("add")
//    public String processAddJobForm(@ModelAttribute @Valid Post newPost,
//                                    Errors errors) {
//
//        if (errors.hasErrors()) {
//            return "add";
//        }
//
//        postRepository.save(newPost);
//        return "redirect:";
//    }
//
//    @GetMapping("view/{jobId}")
//    public String displayViewJob(Model model, @PathVariable int postId) {
//
//        Optional optPost = postRepository.findById(postId);
//        if (!optPost.isEmpty()) {
//            Post post = (Post) optPost.get();
//            model.addAttribute("post", post);
//            return "view";
//        } else {
//            return "redirect:/";
//        }
//    }
//
//}