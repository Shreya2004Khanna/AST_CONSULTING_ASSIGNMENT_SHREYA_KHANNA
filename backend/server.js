import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Mock news data for demonstration
const mockNews = {
  status: "ok",
  totalResults: 6,
  articles: [
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Shreya Khanna",
      title: "Breaking: New Tech Innovation in India",
      description: "India leads the world in technology innovation with new startup ecosystem developments.",
      url: "https://example.com/article1",
      urlToImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      publishedAt: "2025-11-28T10:30:00Z",
      content: "India's tech industry is booming with new innovations and startup ecosystems growing rapidly. This marks a significant milestone for the country's digital transformation."
    },
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Rajesh Kumar",
      title: "Sports: India Wins Gold Medal at International Tournament",
      description: "Indian athletes achieved outstanding performance at the international sports event.",
      url: "https://example.com/article2",
      urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      publishedAt: "2025-11-28T09:15:00Z",
      content: "Indian sports team has made the nation proud by winning multiple gold medals at the international tournament. The performance was outstanding."
    },
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Priya Singh",
      title: "Climate Action: India Pledges to Reduce Carbon Emissions",
      description: "Government announces ambitious climate action plan to achieve net-zero emissions by 2050.",
      url: "https://example.com/article3",
      urlToImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
      publishedAt: "2025-11-28T08:45:00Z",
      content: "India has announced a comprehensive climate action plan to reduce carbon emissions and achieve net-zero status by 2050, joining global climate initiatives."
    },
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Amit Patel",
      title: "Business: Stock Market Reaches All-Time High",
      description: "The Indian stock market demonstrated strong performance with record-breaking indices.",
      url: "https://example.com/article4",
      urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      publishedAt: "2025-11-28T07:20:00Z",
      content: "The Indian stock market has reached an all-time high with strong investor confidence and robust economic fundamentals driving the growth."
    },
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Neha Sharma",
      title: "Entertainment: Bollywood Movie Breaks Box Office Records",
      description: "A blockbuster Bollywood film has shattered box office records, becoming the highest-grossing film.",
      url: "https://example.com/article5",
      urlToImage: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop",
      publishedAt: "2025-11-28T06:00:00Z",
      content: "A new Bollywood film has broken all box office records, becoming the highest-grossing film in Indian cinema history with exceptional audience response."
    },
    {
      source: { id: null, name: "Live Hindustan" },
      author: "Vikram Desai",
      title: "Education: New Scholarship Program Launched for Students",
      description: "Government launches a comprehensive scholarship program to support deserving students.",
      url: "https://example.com/article6",
      urlToImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      publishedAt: "2025-11-27T23:30:00Z",
      content: "A new government scholarship program has been launched to support underprivileged students in pursuing higher education and achieving their dreams."
    }
  ]
};

app.get("/news", (req, res) => {
  res.json(mockNews);
});

app.listen(5000, () => console.log("Backend running on port 5000 (using mock data)"));
