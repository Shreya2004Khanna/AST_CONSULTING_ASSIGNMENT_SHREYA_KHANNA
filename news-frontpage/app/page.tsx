import Image from "next/image";
import Link from "next/link";
import BreakingTicker from "../components/BreakingTicker";
import VideoEmbed from "../components/VideoEmbed";

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
        author: "रिपोर्टर टीम",
        title: "दिल्ली में भारी बारिश, कई इलाकों में जलभराव",
        description: "राजधानी दिल्ली में आज सुबह से लगातार बारिश हो रही है, जिससे कई इलाकों में जलभराव की स्थिति बन गई है।",
        url: "https://www.livehindustan.com/delhi/story-heavy-rain-in-delhi-waterlogging-in-many-areas-1234567.html",
        urlToImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
        publishedAt: "2025-11-28T10:30:00Z",
        content: "दिल्ली में लगातार बारिश के कारण यातायात प्रभावित हुआ है और कई इलाकों में जलभराव की समस्या सामने आई है। प्रशासन ने लोगों से सतर्क रहने की अपील की है।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "खेल डेस्क",
        title: "टी20 वर्ल्ड कप: भारत ने पाकिस्तान को हराया",
        description: "टी20 वर्ल्ड कप के रोमांचक मुकाबले में भारत ने पाकिस्तान को 5 विकेट से हराया।",
        url: "https://www.livehindustan.com/sports/cricket/story-india-beats-pakistan-in-t20-world-cup-1234568.html",
        urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        publishedAt: "2025-11-28T09:15:00Z",
        content: "भारत ने शानदार प्रदर्शन करते हुए पाकिस्तान को हराया। विराट कोहली ने नाबाद 82 रन बनाए।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "मनोरंजन टीम",
        title: "बॉलीवुड: नई फिल्म 'जीवन यात्रा' ने तोड़े रिकॉर्ड",
        description: "'जीवन यात्रा' फिल्म ने पहले ही हफ्ते में 100 करोड़ का आंकड़ा पार किया।",
        url: "https://www.livehindustan.com/entertainment/story-bollywood-movie-breaks-records-1234569.html",
        urlToImage: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop",
        publishedAt: "2025-11-28T08:45:00Z",
        content: "मनोरंजन जगत में हलचल, 'जीवन यात्रा' फिल्म ने बॉक्स ऑफिस पर धमाल मचाया।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "राजनीति ब्यूरो",
        title: "संसद में शिक्षा सुधार बिल पारित",
        description: "शिक्षा क्षेत्र में बड़े बदलाव के लिए संसद में नया बिल पास हुआ।",
        url: "https://www.livehindustan.com/national/story-education-reform-bill-passed-in-parliament-1234570.html",
        urlToImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
        publishedAt: "2025-11-28T07:20:00Z",
        content: "शिक्षा सुधार बिल के तहत स्कूलों में नई नीतियां लागू होंगी।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "बिजनेस डेस्क",
        title: "शेयर बाजार में ऐतिहासिक तेजी, सेंसेक्स नई ऊंचाई पर",
        description: "भारतीय शेयर बाजार में आज जबरदस्त तेजी देखने को मिली, सेंसेक्स ने बनाया नया रिकॉर्ड।",
        url: "https://www.livehindustan.com/business/story-stock-market-hits-record-high-1234571.html",
        urlToImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        publishedAt: "2025-11-28T06:00:00Z",
        content: "निवेशकों में उत्साह, बाजार में ऐतिहासिक तेजी दर्ज।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "शिक्षा संवाददाता",
        title: "छात्रवृत्ति योजना: हज़ारों छात्रों को मिलेगा लाभ",
        description: "सरकार ने मेधावी छात्रों के लिए नई छात्रवृत्ति योजना शुरू की।",
        url: "https://www.livehindustan.com/career/story-scholarship-scheme-launched-1234572.html",
        urlToImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T23:30:00Z",
        content: "नई योजना से हज़ारों छात्रों को उच्च शिक्षा में मदद मिलेगी।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "टेक टीम",
        title: "आर्टिफिशियल इंटेलिजेंस: भारतीय स्टार्टअप्स की बड़ी छलांग",
        description: "भारतीय AI स्टार्टअप्स ने अंतरराष्ट्रीय स्तर पर पहचान बनाई।",
        url: "https://www.livehindustan.com/technology/story-indian-ai-startups-make-mark-1234573.html",
        urlToImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T21:10:00Z",
        content: "AI क्षेत्र में भारत की बड़ी उपलब्धि, निवेशकों का बढ़ा रुझान।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "स्वास्थ्य डेस्क",
        title: "स्वास्थ्य: मेडिटेरेनियन डाइट के फायदे",
        description: "नवीन शोध में मेडिटेरेनियन डाइट को स्वास्थ्य के लिए लाभकारी बताया गया।",
        url: "https://www.livehindustan.com/health/story-benefits-of-mediterranean-diet-1234574.html",
        urlToImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T15:55:00Z",
        content: "मेडिटेरेनियन डाइट से हृदय स्वास्थ्य में सुधार और सूजन में कमी।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "यात्रा संवाददाता",
        title: "सर्दी में घूमने के लिए बेस्ट डेस्टिनेशन",
        description: "सर्दियों में घूमने के लिए इन जगहों पर जाएं, मिलेगा शानदार अनुभव।",
        url: "https://www.livehindustan.com/travel/story-best-destinations-to-visit-in-winter-1234575.html",
        urlToImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T17:20:00Z",
        content: "हिल स्टेशन से लेकर बीच तक, सर्दियों में घूमने के लिए बेहतरीन जगहें।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "विज्ञान डेस्क",
        title: "ऊर्जा क्षेत्र में नई खोज, बैटरी तकनीक में सुधार",
        description: "भारतीय वैज्ञानिकों ने ऊर्जा भंडारण के लिए नई बैटरी तकनीक विकसित की।",
        url: "https://www.livehindustan.com/science/story-breakthrough-in-battery-technology-1234576.html",
        urlToImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T14:30:00Z",
        content: "नई बैटरी तकनीक से ऊर्जा भंडारण में क्रांति आने की उम्मीद।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "स्थानीय संवाददाता",
        title: "शहर में नए पार्क की घोषणा",
        description: "नगर निगम ने शहर में कई नए पार्क बनाने की योजना बनाई।",
        url: "https://www.livehindustan.com/local/story-city-announces-new-park-initiative-1234577.html",
        urlToImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T13:05:00Z",
        content: "नए पार्कों से शहरवासियों को मिलेगा हरियाली का लाभ।"
      },
      {
        source: { id: null, name: "Live Hindustan" },
        author: "अंतरराष्ट्रीय डेस्क",
        title: "अंतरराष्ट्रीय: भारत ने संयुक्त राष्ट्र में रखा अपना पक्ष",
        description: "संयुक्त राष्ट्र महासभा में भारत ने वैश्विक मुद्दों पर अपनी बात रखी।",
        url: "https://www.livehindustan.com/world/story-india-at-united-nations-1234578.html",
        urlToImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
        publishedAt: "2025-11-27T12:00:00Z",
        content: "भारत ने संयुक्त राष्ट्र में विकासशील देशों के हितों की बात की।"
      }
    ]
    };
}

export default async function Home() {
  const data = await getNews();
  const articles: Article[] = data.articles || [];

  const mainCategories = ["होम", "राज्य", "देश", "क्रिकेट", "लाइव स्कोर", "मनोरंजन", "बिजनेस", "करियर", "विदेश", "धर्म", "राशिफल", "लाइफस्टाइल", "ऑटो", "मेजेजेस"];

  const trendingTopics = [
    "चीफ जस्टिस सुप्रीमकोर्ट",
    "SIR",
    "अनुच्छेद 240",
    "दिल्ली कार धमाका",
    "क्रिप बॉल 19",
    "मोहम्मद",
    "आज का राशिफल",
    "शीर्ष समाचार"
  ];

  // Breaking news headlines (Hindi)
  const breakingNews = [
    "ब्रेकिंग: भारत में नई तकनीक का आविष्कार",
    "खेल: भारत ने अंतरराष्ट्रीय टूर्नामेंट में स्वर्ण पदक जीता",
    "राजनीति: संसद में शिक्षा बिल पारित",
    "मनोरंजन: बॉलीवुड फिल्म ने बॉक्स ऑफिस रिकॉर्ड तोड़ा",
    "मौसम: दिल्ली में भारी बारिश की संभावना",
    "बिजनेस: शेयर बाजार ने बनाया नया रिकॉर्ड",
    "स्वास्थ्य: मेडिटेरेनियन डाइट के फायदे",
    "यात्रा: इस सर्दी घूमने के लिए टॉप डेस्टिनेशन"
  ];

  // breakingNews rendered by client `BreakingTicker` component

  return (
    <div className="min-h-screen bg-white">
      {/* Breaking News Ticker (client) */}
      <BreakingTicker headlines={breakingNews} />
      {/* Top Navigation Bar */}
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

      {/* Header with Logo and Search */}
      <header className="site-header bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md">
                  हि
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-black brand leading-tight">हिंदुस्तान</h1>
                  <div className="text-xs muted font-semibold">ताज़ा खबर तुरंत</div>
                </div>
              </div>
            </Link>

            {/* Right Icons and Search */}
              <div className="flex gap-3 md:gap-6 items-center">
              <button className="text-2xl hover:scale-110 transition">📸</button>
              <button className="text-2xl hover:scale-110 transition">🎬</button>
              <button className="text-2xl hover:scale-110 transition">📄</button>
              <button className="text-2xl hover:scale-110 transition">👤</button>
              
              {/* Search: show full input on md+; show compact button on small screens */}
              <div className="flex items-center gap-2">
                <div className="top-search hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 w-64">
                  <input
                    type="text"
                    placeholder="खोजें..."
                    className="bg-transparent flex-1 text-sm outline-none text-gray-700 placeholder-gray-500 min-w-0"
                  />
                  <button className="text-gray-500 hover:text-red-600 transition">🔍</button>
                </div>

                {/* small screen: open search page or action */}
                <Link href="/search" className="md:hidden">
                  <button aria-label="Search" className="p-2 bg-gray-100 rounded-full text-lg">🔍</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="categories flex gap-2 overflow-x-auto pb-2 border-t border-gray-100 pt-3 mt-3 -mx-4 px-4">
            {mainCategories.map((cat, i) => (
              <Link key={i} href="/">
                <button className="text-sm font-semibold text-gray-700 hover:text-red-600 transition whitespace-nowrap px-3 py-1 hover:bg-red-50 rounded">
                  {cat}
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Advertisement Banner */}
      <div className="bg-yellow-50 border-b-4 border-yellow-300 py-2 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-300 rounded p-2 text-center">
            <p className="text-xs text-gray-800 font-semibold">विज्ञान - शैक्षणिक विषय पर विज्ञापन</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white border-b border-gray-200 py-2 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-600 font-bold text-lg">🎥</span>
            <h3 className="font-bold text-sm brand">वीडियो: आज की बड़ी खबरें</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <VideoEmbed 
              src="https://www.youtube.com/embed/5qap5aO4i9A" 
              title="Live Hindustan News Video"
              width="w-full"
              height="h-48 md:h-56"
            />
            <VideoEmbed 
              src="https://www.youtube.com/embed/21X5lGlDOfg" 
              title="Live Hindustan News Video 2"
              width="w-full"
              height="h-48 md:h-56"
            />
            <VideoEmbed 
              src="https://www.youtube.com/embed/aqz-KE-bpKQ" 
              title="Live Hindustan News Video 3"
              width="w-full"
              height="h-48 md:h-56"
            />
            <VideoEmbed 
              src="https://www.youtube.com/embed/ScMzIvxBSi4" 
              title="Live Hindustan News Video 4"
              width="w-full"
              height="h-48 md:h-56"
            />
          </div>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="bg-white border-b border-gray-300 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {trendingTopics.map((topic, i) => (
              <button key={i} className="px-4 py-2 bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full text-sm font-semibold whitespace-nowrap transition">
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Featured Story */}
        {articles.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-black brand mb-4 border-b-4 border-red-600 pb-2">विज्ञापन</h2>
            <Link href={`/article/0`}>
              <div className="grid grid-cols-3 gap-4 cursor-pointer transition">
                {/* Large Featured */}
                <div className="col-span-2 md:col-span-2 card relative overflow-hidden rounded-lg">
                  {articles[0].urlToImage && (
                    <div className="relative h-64 md:h-96 w-full image-wrapper">
                      <Image
                        src={articles[0].urlToImage}
                        alt={articles[0].title}
                        fill
                        priority
                        className="object-cover"
                        sizes="66vw"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h2 className="text-2xl md:text-3xl font-extrabold line-clamp-3">{articles[0].title}</h2>
                    <p className="mt-2 text-sm muted">{articles[0].description}</p>
                  </div>
                </div>

                {/* Side News Items */}
                <div className="col-span-1 space-y-2">
                  {articles.slice(1, 5).map((article, idx) => (
                    <div key={idx} className="card p-2 flex gap-2 items-center hover:shadow-md transition card-hover">
                      {article.urlToImage && (
                        <div className="relative h-12 w-20 md:h-16 md:w-24 rounded overflow-hidden">
                          <Image
                            src={article.urlToImage}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="100px"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-sm brand line-clamp-2">{article.title}</h4>
                        <div className="text-xs muted">{article.source.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Section Divider */}
        <div className="border-t-4 border-red-600 my-6"></div>

        {/* Top Hindi News Section */}
        <section className="mb-8">
          <div className="bg-white border-b-4 border-red-600 mb-4">
            <div className="flex items-center gap-2 pb-2">
              <div className="w-1 h-6 bg-red-600"></div>
              <h2 className="text-2xl font-black brand">Top Hindi News</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {articles.slice(0, 4).map((article, idx) => (
              <Link href={`/article/${idx}`} key={idx}>
                <div className="card card-hover p-0 overflow-hidden cursor-pointer group">
                    {article.urlToImage && (
                    <div className="relative h-24 md:h-32 w-full overflow-hidden rounded-t">
                      <Image
                        src={article.urlToImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="25vw"
                      />
                    </div>
                  )}
                  <div className="p-3">
                      <h4 className="font-bold text-sm brand line-clamp-2">{article.title}</h4>
                      <p className="text-xs muted mt-2">{article.source.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Grid Layout with Main and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main News Column */}
          <div className="lg:col-span-2">
            <div className="bg-white border-b-4 border-red-600 mb-4">
              <div className="flex items-center gap-2 pb-2">
                <div className="w-1 h-6 bg-red-600"></div>
                <h2 className="text-2xl font-black brand">समाचार</h2>
              </div>
            </div>
            <div className="space-y-4">
              {articles.slice(4).map((article, idx) => (
                <Link href={`/article/${idx + 4}`} key={idx}>
                  <div className="flex flex-col md:flex-row gap-4 card hover:shadow-md transition cursor-pointer p-3 group card-hover items-center">
                    {article.urlToImage && (
                      <div className="relative h-40 md:h-32 w-full md:w-48 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={article.urlToImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="300px"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-xs text-red-600 font-bold mb-1">{article.source.name}</div>
                      <h3 className="text-base font-bold brand leading-tight mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm brand line-clamp-2">{article.description}</p>
                      <div className="text-xs muted mt-2">
                        {new Date(article.publishedAt).toLocaleString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:space-y-6">
            {/* Breaking News */}
            <div className="bg-red-600 text-white p-3 rounded border-2 border-red-700">
              <h3 className="text-lg font-black mb-3">🔴 तेज खबर</h3>
              <div className="space-y-3 text-sm">
                {articles.slice(0, 4).map((article, idx) => (
                  <Link key={idx} href={`/article/${idx}`}>
                    <p className="cursor-pointer hover:underline font-semibold line-clamp-2">{article.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="bg-gray-200 p-4 rounded border-2 border-dashed border-gray-400 text-center">
              <p className="text-gray-700 text-sm font-bold">विज्ञापन</p>
              <p className="text-gray-600 text-xs">Advertisement Space</p>
            </div>

            {/* Important Links */}
            <div className="bg-gray-100 p-4 rounded border-2 border-gray-400">
              <h4 className="font-bold text-black mb-3">महत्वपूर्ण</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="text-red-600 hover:underline">About Us</a></li>
                <li><a href="#" className="text-red-600 hover:underline">Contact Us</a></li>
                <li><a href="#" className="text-red-600 hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-red-600 hover:underline">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer bg-gray-900 text-white mt-8 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mb-6">
            <div className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg">हि</div>
                <div>
                  <h3 className="text-xl font-extrabold brand">हिंदुस्तान</h3>
                  <p className="text-xs muted mt-1">ताज़ा खबर, विस्तृत कवरेज और गहरा विश्लेषण।</p>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-300 space-y-2">
                <p>News portal with latest updates, e-paper and mobile apps.</p>
                <div className="flex gap-2 mt-2">
                  <a className="px-3 py-1 bg-white text-red-600 rounded text-xs font-semibold" href="#">ई-पेपर</a>
                  <a className="px-3 py-1 bg-white text-red-600 rounded text-xs font-semibold" href="#">ऐप डाउनलोड</a>
                </div>
              </div>
            </div>

            <div className="footer-col text-sm">
              <h4 className="font-bold text-red-400 mb-2">समाचार</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-red-400">देश</a></li>
                <li><a href="#" className="hover:text-red-400">राज्य</a></li>
                <li><a href="#" className="hover:text-red-400">अंतरराष्ट्रीय</a></li>
                <li><a href="#" className="hover:text-red-400">धर्म</a></li>
              </ul>
            </div>

            <div className="footer-col text-sm">
              <h4 className="font-bold text-red-400 mb-2">मनोरंजन</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-red-400">बॉलीवुड</a></li>
                <li><a href="#" className="hover:text-red-400">टीवी</a></li>
                <li><a href="#" className="hover:text-red-400">मूवी रिव्यू</a></li>
              </ul>
            </div>

            <div className="footer-col text-sm">
              <h4 className="font-bold text-red-400 mb-2">संपर्क</h4>
              <ul className="space-y-1 text-xs text-gray-300">
                <li>Email: <a href="mailto:contact@livehindustan.local" className="hover:text-red-400">contact@livehindustan.local</a></li>
                <li>Phone: <a href="#" className="hover:text-red-400">0123-456-789</a></li>
                <li><a href="#" className="hover:text-red-400">Advertise with us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 pb-2 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400">© 2025 Hindustan News. सर्वाधिकार सुरक्षित।</div>
            <div className="flex items-center gap-4">
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
                <a href="#" className="text-gray-300 hover:text-white">Terms</a>
                <a href="#" className="text-gray-300 hover:text-white">Sitemap</a>
              </div>

              <div className="flex items-center gap-2">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
