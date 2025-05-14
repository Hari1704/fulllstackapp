package com.example.Quote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/quotes")
public class QuoteController {
    @Autowired
   private QuoteService qs;
    @GetMapping("/random")
    public Quote QuoteGenerator(){
       return qs.QuoteGenerator();
    }
    @GetMapping("/all")
    public Quote getQuote(){
        return qs.getAll();

    }
    @PostMapping("/add")
    public void AddQuote(@RequestBody Quote quote){
        qs.addQuote(quote);
    }
    @GetMapping("/category")
    public Quote quoteByCategory(@RequestParam String category ){
        return qs.findByCategory(category);

    }


}
