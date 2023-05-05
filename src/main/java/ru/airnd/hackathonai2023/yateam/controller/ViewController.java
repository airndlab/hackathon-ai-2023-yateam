package ru.airnd.hackathonai2023.yateam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
public class ViewController {
    @RequestMapping(value = { "/" })
    public String index() throws IOException {
        return "index.html";
    }

    @RequestMapping(value = { "/practices/**", "/loginreact" })
    public String forward() throws IOException {
        return "/";
    }
}