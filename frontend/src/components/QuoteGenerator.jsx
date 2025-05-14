import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

import happy from "../assets/happy.webp";
import sad from "../assets/Sad.webp";
import life from "../assets/Life.webp";
import newbg from "../assets/violetbg.jpg";

const categoryStyles = {
  happy: {
    bgColor: "bg-gradient-to-b from-black to-black ",
    textColor: "text-yellow-600",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    image: happy,
    boxColor:"bg-yellow-50",
  },
  sad: {
    bgColor: "bg-gradient-to-b from-black to-black ",
    textColor: "text-blue-600",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    image: sad,
    boxColor:"bg-blue-100",
  },
  Inspirational: {
    bgColor: "bg-gradient-to-b from-black to-black ",
    textColor: "text-violet-600",
    buttonColor: "bg-violet-500 hover:bg-violet-600",
    image: newbg,
    boxColor:"bg-violet-200",
  },
  life: {
    bgColor: "bg-gradient-to-b from-black to-black ",
    textColor: "text-green-600",
    buttonColor: "bg-green-500 hover:bg-green-600",
    image: life,
    boxColor:"bg-green-100",
  },
};

const QuoteGenerator = ({ category = "happy" }) => {
  const [quote, setQuote] = useState(null);
  const [copied, setCopied] = useState(false);
  const style = categoryStyles[category] || categoryStyles.happy;

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/quotes/category?category=${category}`
      );
      const data = await response.json();
      setQuote(data);
      setCopied(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({
        quote: "Couldn't fetch quote. Try again later.",
        author: "System",
      });
    }
  };

  const handleCopy = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.quote}" — ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [category]);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 ${style.bgColor}`}
    >
     
      <img
        src={style.image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

   
      <motion.div
        className={`relative backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full text-center ${style.boxColor}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className={`text-3xl font-bold mb-4 ${style.textColor}`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)} Quote Generator
        </motion.h1>

        <motion.p
          className="text-lg text-gray-800 italic mb-6 min-h-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {quote ? `“${quote.quote}”` : "Loading..."}
        </motion.p>

        <p className="text-sm font-medium text-gray-600 mb-4">
          — {quote ? quote.author : ""}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            className={`${style.buttonColor} text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-all`}
            whileTap={{ scale: 0.95 }}
            onClick={fetchQuote}
          >
            New Quote
          </motion.button>

          <motion.button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 transition-all"
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuoteGenerator;
