package com.example.Quote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class QuoteService {
    @Autowired
    private QuoteRepository qr;

    public Quote QuoteGenerator() {
        List<Quote> quotes= qr.findAll();
        return quotes.isEmpty()? null: quotes.get(new Random().nextInt(quotes.size()));

    }

    public void addQuote(Quote quote) {
        qr.save(quote);
    }

    public Quote getAll() {
        List<Quote> quotes = qr.findAll();
        return quotes.isEmpty()? null:quotes.get(new Random().nextInt(quotes.size()));
    }

    public Quote findByCategory(String category) {
       List<Quote> quotes =  qr.findByCategory(category);
      return quotes.isEmpty() ? null: quotes.get(new Random().nextInt(quotes.size()));
    }
}
