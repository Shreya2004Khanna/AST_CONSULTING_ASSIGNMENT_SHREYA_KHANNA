import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ url?: string }>;
}

type Article = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

async function getNews() {
  return {
    status: "ok",
    totalResults: 12,
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
          urlToImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
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
          urlToImage: "https://images.unsplash.com/photo-1427504494786-1707e2e3db02?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T23:30:00Z",
          content: "A new government scholarship program has been launched to support underprivileged students in pursuing higher education and achieving their dreams."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Rohit Verma",
          title: "Technology: AI Startups Scale Rapidly in India",
          description: "AI startups in India raise record funding and expand internationally.",
          url: "https://example.com/article7",
          urlToImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T21:10:00Z",
          content: "Several AI startups in India have reported rapid growth, attracting global investors and expanding their teams across multiple cities."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Suman Rao",
          title: "Politics: State Assembly Passes New Education Bill",
          description: "A new bill aims to increase funding and reforms in the education sector.",
          url: "https://example.com/article8",
          urlToImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T19:40:00Z",
          content: "The state assembly unanimously approved several measures to improve infrastructure, teacher training and scholarships for underprivileged students."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Ayesha Khan",
          title: "Travel: Top Destinations to Visit This Winter",
          description: "A curated list of must-visit destinations for the upcoming winter season.",
          url: "https://example.com/article9",
          urlToImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T17:20:00Z",
          content: "From hill stations to coastal getaways, these destinations offer great experiences for winter travelers."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Dr. Meera",
          title: "Health: New Research Shows Benefits of Mediterranean Diet",
          description: "A large study confirms the long-term health benefits of Mediterranean-style diets.",
          url: "https://example.com/article10",
          urlToImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T15:55:00Z",
          content: "The study shows improved heart health and reduced inflammation among participants following the diet consistently."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Karan Malhotra",
          title: "Science: Breakthrough in Renewable Energy Storage",
          description: "Researchers demonstrate a scalable battery technology with higher efficiency.",
          url: "https://example.com/article11",
          urlToImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T14:30:00Z",
          content: "A team of researchers announced a promising new approach to store renewable energy more efficiently and at lower cost."
        },
        {
          source: { id: null, name: "Live Hindustan" },
          author: "Anita Desai",
          title: "Local: City Announces New Public Park Initiative",
          description: "The city council approves multiple green spaces to improve urban living.",
          url: "https://example.com/article12",
          urlToImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
          publishedAt: "2025-11-27T13:05:00Z",
          content: "An initiative to create several parks in the city aims to increase access to green areas for residents."
        }
      ]
    };
}

export default async function ArticlePage({ params, searchParams }: ArticlePageProps) {
  const resolvedParams = await params;
  const data = await getNews();
  const articles: Article[] = data.articles || [];
  const idx = parseInt(resolvedParams.id, 10);
  const article = articles[idx];
  if (!article) return notFound();

  return (
    <div data-page="article" className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div>
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex gap-4">
            <span>मौसम</span>
            <span>अपने शहर को चुनें</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="site-header bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link href="/">
            <div className="cursor-pointer flex items-center gap-2">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-sm">
                फ़
              </div>
              <div>
                <h1 className="text-4xl font-black brand leading-none">हिंदुस्तान</h1>
                <div className="text-xs muted font-semibold">ताज़ा खबरें, तुरंत</div>
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 py-3">
        <Link href="/" className="text-red-600 font-semibold hover:underline text-sm">&larr; वापस मुख्य पृष्ठ</Link>
      </div>

      {/* Main Article */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <article>
          {/* Article Header */}
          <div className="mb-6 border-b-4 border-red-600 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded">{article.source.name}</span>
              <span className="text-xs text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString('en-IN')} 
                {" • "} 
                {new Date(article.publishedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <h1 className="text-4xl font-black text-black mb-4 leading-tight">{article.title}</h1>

            <p className="text-xl text-gray-800 font-semibold mb-4 leading-relaxed">{article.description}</p>

            {article.author && (
              <div className="text-sm text-gray-600">
                <span className="font-semibold">लेखक: </span>{article.author}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {article.urlToImage && (
            <div className="image-wrapper relative w-full h-96 mb-8 rounded overflow-hidden shadow-lg">
              <Image
                src={article.urlToImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2">
              <div className="prose max-w-none text-lg text-gray-800 leading-relaxed mb-8">
                <p>{article.content || article.description}</p>
                <p className="mt-4">{article.description}</p>
              </div>

              {/* Share Section */}
              <div className="bg-gray-100 p-6 rounded my-8 border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-3">इस खबर को शेयर करें</h3>
                <div className="flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">Facebook</button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded font-semibold hover:bg-blue-500">Twitter</button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700">WhatsApp</button>
                </div>
              </div>

              {/* Source Link */}
              <div className="bg-red-50 border-2 border-red-600 p-6 rounded mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-red-700">संपूर्ण लेख पढ़ें</h3>
                <p className="text-gray-700 mb-3">अधिक विवरण और पूरी खबर के लिए मूल स्रोत पर जाएं:</p>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition"
                >
                  मूल लेख पढ़ें →
                </a>
              </div>

              {/* Related Articles */}
              <div className="mt-8 pt-8 border-t-4 border-red-600">
                <h3 className="text-2xl font-black text-black mb-4">संबंधित खबरें</h3>
                <div className="space-y-3">
                  {articles.slice(0, 3).map((relatedArticle, idx) => (
                    idx !== parseInt(resolvedParams.id, 10) && (
                      <Link key={idx} href={`/article/${idx}`}>
                        <div className="border border-gray-300 p-3 hover:bg-gray-50 cursor-pointer rounded transition">
                          <p className="font-bold text-black text-sm line-clamp-2 hover:text-red-600">{relatedArticle.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{new Date(relatedArticle.publishedAt).toLocaleDateString()}</p>
                        </div>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              {/* Article Info Box */}
              <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded mb-6 sticky top-4">
                <h4 className="font-bold text-red-600 mb-3">खबर की जानकारी</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-bold text-gray-700">स्रोत:</span>
                    <p className="text-gray-600">{article.source.name}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">प्रकाशित:</span>
                    <p className="text-gray-600">{new Date(article.publishedAt).toLocaleString('en-IN')}</p>
                  </div>
                  {article.author && (
                    <div>
                      <span className="font-bold text-gray-700">लेखक:</span>
                      <p className="text-gray-600">{article.author}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Advertisement Space */}
              <div className="bg-gray-200 p-6 rounded border-2 border-dashed border-gray-400 text-center mb-6">
                <p className="text-gray-600 text-sm font-semibold">विज्ञापन स्थान</p>
              </div>

              {/* Breaking News */}
              <div className="bg-red-600 text-white p-4 rounded space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-black">🔴 तेज खबर</h4>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Live</span>
                </div>
                <div className="space-y-2 text-sm">
                  {articles.slice(0, 4).map((newsItem, idx) => (
                    <Link key={idx} href={`/article/${idx}`}>
                      <div className="flex items-start gap-2">
                        <span className="chip bg-white/20 text-white text-xs">{new Date(newsItem.publishedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                        <p className="cursor-pointer hover:underline font-semibold line-clamp-2">{newsItem.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 py-8 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 text-red-400">सेक्शन</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-red-400">देश</a></li>
                <li><a href="#" className="hover:text-red-400">दिल्ली</a></li>
                <li><a href="#" className="hover:text-red-400">खेल</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-red-400">अन्य</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-red-400">Follow</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-red-400">Facebook</a></li>
                <li><a href="#" className="hover:text-red-400">Twitter</a></li>
                <li><a href="#" className="hover:text-red-400">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-red-400">Download App</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:text-red-400">iOS App</a></li>
                <li><a href="#" className="hover:text-red-400">Android App</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center text-sm">
            <p className="mb-2">© 2025 Live Hindustan. सर्वाधिकार सुरक्षित।</p>
            <p className="text-gray-400">Developed with Next.js | Powered by NewsAPI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
