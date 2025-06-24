import Footer from "@/components/footer";
import Link from "next/link";
import { Metadata } from "next";
const neighbouringCountries = [
  {
    id: 1,
    name: "Pakistan",
    capital: "Islamabad",
    borderLength: "3,323 km",
    relationship: "Complex",
    establishedDiplomacy: "1947",
    population: "231.4 million",
    area: "881,913 km²",
    currency: "Pakistani Rupee (PKR)",
    languages: ["Urdu", "English"],
    majorCities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi"],
    tradeVolume: "$2.4 billion (2019-20)",
    keyAgreements: [
      "Shimla Agreement (1972)",
      "Indus Waters Treaty (1960)",
      "Comprehensive Bilateral Agreement on Trade (2011)"
    ],
    currentIssues: [
      "Kashmir dispute",
      "Cross-border terrorism",
      "Water sharing",
      "Trade barriers"
    ],
    keyFacts: [
      "Created during Partition of India in 1947",
      "Shares longest border with India",
      "Four wars fought (1947, 1965, 1971, 1999)",
      "Both are nuclear powers"
    ],
    flag: "🇵🇰",
    description: "Pakistan shares India's longest international border and has a complex relationship marked by political tensions, trade potential, and shared cultural heritage."
  },
  {
    id: 2,
    name: "China",
    capital: "Beijing",
    borderLength: "3,488 km",
    relationship: "Strategic Competition",
    establishedDiplomacy: "1950",
    population: "1.412 billion",
    area: "9,596,961 km²",
    currency: "Chinese Yuan (CNY)",
    languages: ["Mandarin Chinese"],
    majorCities: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"],
    tradeVolume: "$125.7 billion (2021-22)",
    keyAgreements: [
      "Agreement on Peace and Tranquility (1993)",
      "Agreement on Confidence Building Measures (1996)",
      "Protocol on Border Defense Cooperation (2013)"
    ],
    currentIssues: [
      "Border disputes (LAC)",
      "Doklam standoff aftermath",
      "Galwan Valley incident",
      "Trade imbalance"
    ],
    keyFacts: [
      "India's largest trading partner",
      "Disputed border at Line of Actual Control (LAC)",
      "Both are ancient civilizations",
      "Members of BRICS and SCO"
    ],
    flag: "🇨🇳",
    description: "China is India's largest trading partner but relations are complicated by border disputes and strategic competition in the Indo-Pacific region."
  },
  {
    id: 3,
    name: "Nepal",
    capital: "Kathmandu",
    borderLength: "1,751 km",
    relationship: "Friendly",
    establishedDiplomacy: "1947",
    population: "29.7 million",
    area: "147,516 km²",
    currency: "Nepalese Rupee (NPR)",
    languages: ["Nepali"],
    majorCities: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
    tradeVolume: "$8.14 billion (2021-22)",
    keyAgreements: [
      "Treaty of Peace and Friendship (1950)",
      "Trade and Transit Treaty (2009)",
      "India-Nepal Economic Partnership (2019)"
    ],
    currentIssues: [
      "Border demarcation",
      "Water resource management",
      "Trade transit rights",
      "Political influence concerns"
    ],
    keyFacts: [
      "Landlocked country dependent on India for sea access",
      "Open border with India",
      "Hindu majority nation",
      "Home to Mount Everest"
    ],
    flag: "🇳🇵",
    description: "Nepal maintains traditionally close ties with India, sharing an open border and deep cultural connections, though recent years have seen some diplomatic tensions."
  },
  {
    id: 4,
    name: "Bangladesh",
    capital: "Dhaka",
    borderLength: "4,096 km",
    relationship: "Friendly",
    establishedDiplomacy: "1971",
    population: "167.4 million",
    area: "147,570 km²",
    currency: "Bangladeshi Taka (BDT)",
    languages: ["Bengali"],
    majorCities: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
    tradeVolume: "$18.13 billion (2021-22)",
    keyAgreements: [
      "Ganges Water Sharing Treaty (1996)",
      "Land Boundary Agreement (2015)",
      "Comprehensive Economic Partnership Agreement (2021)"
    ],
    currentIssues: [
      "Illegal migration",
      "River water sharing",
      "Border fencing",
      "Rohingya refugee crisis"
    ],
    keyFacts: [
      "Created with India's assistance in 1971",
      "Surrounded by India on three sides",
      "Major textile exporter",
      "Vulnerable to climate change"
    ],
    flag: "🇧🇩",
    description: "Bangladesh has warm relations with India, being created with Indian assistance. Both countries share strong economic ties and cooperate on regional security."
  },
  {
    id: 5,
    name: "Bhutan",
    capital: "Thimphu",
    borderLength: "699 km",
    relationship: "Very Friendly",
    establishedDiplomacy: "1949",
    population: "0.77 million",
    area: "38,394 km²",
    currency: "Bhutanese Ngultrum (BTN)",
    languages: ["Dzongkha"],
    majorCities: ["Thimphu", "Phuntsholing", "Punakha"],
    tradeVolume: "$1.3 billion (2021-22)",
    keyAgreements: [
      "Treaty of Friendship (1949, revised 2007)",
      "Free Trade Agreement",
      "Hydropower Cooperation Agreement"
    ],
    currentIssues: [
      "Limited - generally smooth relations",
      "Hydropower development",
      "Environmental concerns"
    ],
    keyFacts: [
      "India's closest ally in the region",
      "Carbon negative country",
      "Constitutional monarchy",
      "Measures Gross National Happiness"
    ],
    flag: "🇧🇹",
    description: "Bhutan maintains exceptionally close ties with India, guided by the principle of mutual respect and cooperation. India is Bhutan's largest trading partner."
  },
  {
    id: 6,
    name: "Sri Lanka",
    capital: "Colombo (Commercial), Sri Jayawardenepura Kotte (Administrative)",
    borderLength: "0 km (Maritime boundary)",
    relationship: "Friendly",
    establishedDiplomacy: "1948",
    population: "22.2 million",
    area: "65,610 km²",
    currency: "Sri Lankan Rupee (LKR)",
    languages: ["Sinhala", "Tamil"],
    majorCities: ["Colombo", "Kandy", "Galle", "Jaffna"],
    tradeVolume: "$5.5 billion (2021-22)",
    keyAgreements: [
      "Indo-Sri Lanka Accord (1987)",
      "Free Trade Agreement (2000)",
      "Economic and Technology Cooperation Agreement (2019)"
    ],
    currentIssues: [
      "Fishermen's disputes",
      "Tamil minority rights",
      "Chinese influence concerns",
      "Economic crisis support"
    ],
    keyFacts: [
      "Separated by Palk Strait",
      "Island nation in Indian Ocean",
      "Strategic maritime location",
      "Buddhist majority country"
    ],
    flag: "🇱🇰",
    description: "Sri Lanka maintains close ties with India despite occasional tensions. India has been a key supporter during Sri Lanka's recent economic crisis."
  },
  {
    id: 7,
    name: "Myanmar (Burma)",
    capital: "Naypyidaw",
    borderLength: "1,643 km",
    relationship: "Cautious Engagement",
    establishedDiplomacy: "1948",
    population: "54.8 million",
    area: "676,578 km²",
    currency: "Myanmar Kyat (MMK)",
    languages: ["Burmese"],
    majorCities: ["Yangon", "Mandalay", "Naypyidaw"],
    tradeVolume: "$1.75 billion (2021-22)",
    keyAgreements: [
      "Border Trade Agreement (1994)",
      "Kaladan Multi-Modal Transit Transport Project",
      "India-Myanmar-Thailand Trilateral Highway"
    ],
    currentIssues: [
      "Military coup (2021)",
      "Refugee crisis",
      "Border insurgency",
      "Drug trafficking"
    ],
    keyFacts: [
      "Gateway to Southeast Asia for India",
      "Rich in natural resources",
      "Buddhist majority country",
      "Under military rule since 2021"
    ],
    flag: "🇲🇲",
    description: "Myanmar serves as India's gateway to Southeast Asia, but relations have been complicated by internal conflicts and the military coup in 2021."
  },
  {
    id: 8,
    name: "Afghanistan",
    capital: "Kabul",
    borderLength: "106 km (via Pakistan-occupied Kashmir)",
    relationship: "Historical Ties",
    establishedDiplomacy: "1947",
    population: "40.2 million",
    area: "652,864 km²",
    currency: "Afghan Afghani (AFN)",
    languages: ["Dari", "Pashto"],
    majorCities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"],
    tradeVolume: "$1.4 billion (2020-21)",
    keyAgreements: [
      "Strategic Partnership Agreement (2011)",
      "India-Afghanistan Air Freight Corridor",
      "Chabahar Port Agreement (via Iran)"
    ],
    currentIssues: [
      "Taliban rule since 2021",
      "Humanitarian crisis",
      "Terrorism concerns",
      "Refugee situation"
    ],
    keyFacts: [
      "No direct border (disputed territory)",
      "Historical cultural connections",
      "Landlocked country",
      "Rich in minerals"
    ],
    flag: "🇦🇫",
    description: "Afghanistan has historical ties with India but current relations are uncertain due to Taliban rule. India has provided significant development assistance."
  }
];
// Schema markup for SEO
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Neighbouring Countries of India - Complete Guide",
  "description": "Complete information about India's neighboring countries, border relations, diplomatic ties, trade partnerships, and geopolitical significance in South Asia.",
  "author": {
    "@type": "Organization",
    "name": "India Elects",
    "url": "https://indiaelects.vercel.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "India Elects",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaelects.vercel.app/logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/neighbouring-countries"
  },
  "articleSection": "Geography",
  "keywords": ["India neighbours", "Pakistan", "China", "Nepal", "Bangladesh", "Bhutan", "Sri Lanka", "Myanmar", "Afghanistan", "India border countries", "South Asia"],
  "about": [
    {
      "@type": "Place",
      "name": "India",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.5937,
        "longitude": 78.9629
      }
    }
  ],
  "mentions": [
    {
      "@type": "Country",
      "name": "Pakistan",
      "sameAs": "https://en.wikipedia.org/wiki/Pakistan"
    },
    {
      "@type": "Country", 
      "name": "China",
      "sameAs": "https://en.wikipedia.org/wiki/China"
    },
    {
      "@type": "Country",
      "name": "Nepal", 
      "sameAs": "https://en.wikipedia.org/wiki/Nepal"
    },
    {
      "@type": "Country",
      "name": "Bangladesh",
      "sameAs": "https://en.wikipedia.org/wiki/Bangladesh"
    },
    {
      "@type": "Country",
      "name": "Bhutan",
      "sameAs": "https://en.wikipedia.org/wiki/Bhutan" 
    },
    {
      "@type": "Country",
      "name": "Sri Lanka",
      "sameAs": "https://en.wikipedia.org/wiki/Sri_Lanka"
    },
    {
      "@type": "Country",
      "name": "Myanmar",
      "sameAs": "https://en.wikipedia.org/wiki/Myanmar"
    },
    {
      "@type": "Country",
      "name": "Afghanistan", 
      "sameAs": "https://en.wikipedia.org/wiki/Afghanistan"
    }
  ]
};

const faqSchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many countries share borders with India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India shares land borders with 7 countries (Pakistan, China, Nepal, Bangladesh, Bhutan, Myanmar, and Afghanistan via disputed territory) and maritime borders with Sri Lanka and Maldives."
      }
    },
    {
      "@type": "Question", 
      "name": "Which country has the longest border with India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bangladesh has the longest border with India at approximately 4,096 kilometers, followed by China at 3,488 kilometers and Pakistan at 3,323 kilometers."
      }
    },
    {
      "@type": "Question",
      "name": "What is India's relationship with its neighbors?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "India's relationships with its neighbors vary significantly - from very friendly ties with Bhutan to complex relationships with Pakistan and China. Most relationships involve a mix of cooperation and challenges."
      }
    },
    {
      "@type": "Question",
      "name": "Which neighbor is India's largest trading partner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "China is India's largest trading partner among neighboring countries, with bilateral trade exceeding $125 billion, though the relationship faces political challenges."
      }
    }
  ]
};

// Schema markup for countries data
const countriesSchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Neighbouring Countries of India",
  "description": "Complete list of countries sharing borders with India",
  "numberOfItems": 8,
  "itemListElement": neighbouringCountries.map((country, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Country",
      "name": country.name,
      "description": country.description,
      "capital": country.capital,
      "population": country.population,
      "area": country.area,
      "currency": country.currency,
      "language": country.languages,
      "sameAs": `https://en.wikipedia.org/wiki/${country.name.replace(/\s+/g, '_')}`
    }
  }))
};

const breadcrumbSchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://indiaelects.vercel.app"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Neighbouring Countries of India",
      "item": "https://indiaelects.vercel.app/neighbouring-countries"
    }
  ]
};

export const metadata = {
  title: "Neighbouring Countries of India | Border Relations & Diplomacy | India Elects",
  description: "Complete information about India's neighboring countries, border relations, diplomatic ties, trade partnerships, and geopolitical significance in South Asia.",
  keywords: "India neighbours, Pakistan, China, Nepal, Bangladesh, Bhutan, Sri Lanka, Myanmar, Afghanistan, India border countries, South Asia",
  openGraph: {
    title: "Neighbouring Countries of India - Complete Guide | India Elects",
    description: "Comprehensive information about India's neighboring countries, their relations, borders, and diplomatic ties.",
    type: "website",
  },
  alternates: {
    canonical: "/neighbouring-countries"
  }
};



const NeighbouringCountriesPage = () => {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaMarkup)
        }}
      />      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchemaMarkup)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(countriesSchemaMarkup)
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              🌏 Neighbouring Countries of India
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Exploring India's Border Relations & Regional Diplomacy
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-80">
              Discover comprehensive information about India's neighboring countries, their diplomatic relations, 
              trade partnerships, border issues, and the complex geopolitical dynamics of South Asia.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            India's Neighborhood Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Neighboring Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,106</div>
              <div className="text-gray-600">KM Total Border</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">7</div>
              <div className="text-gray-600">Land Borders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600">Maritime Border</div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Regional Context
          </h2>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              India is strategically located in South Asia, sharing borders with eight countries and serving as a bridge 
              between Central Asia, East Asia, and the Indian Ocean region. This geographical position makes India a 
              crucial player in regional geopolitics and trade.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {neighbouringCountries.map((country) => (
                <div key={country.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <div className="font-semibold text-gray-800">{country.name}</div>
                  <div className="text-sm text-gray-600">{country.relationship}</div>
                </div>
              ))}
            </div>
          </div>
        </div>        {/* Countries Detail */}
        <div className="space-y-8" itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="name" content="Neighbouring Countries of India" />
          <meta itemProp="description" content="Detailed information about India's neighboring countries" />
          {neighbouringCountries.map((country, index) => (
            <div key={country.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" itemScope itemType="https://schema.org/Country">
              <meta itemProp="name" content={country.name} />
              <meta itemProp="description" content={country.description} />
              <meta itemProp="capital" content={country.capital} />
              <meta itemProp="population" content={country.population} />
              <meta itemProp="currency" content={country.currency} />
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Country Header */}                    <div className="lg:w-1/4">
                      <div className="text-center lg:text-left">
                        <div className="text-6xl mb-4">{country.flag}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2" itemProp="name">{country.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between lg:block">
                            <span className="text-gray-600">Capital:</span>
                            <span className="font-semibold" itemProp="capital">{country.capital}</span>
                          </div>
                          <div className="flex justify-between lg:block">
                            <span className="text-gray-600">Population:</span>
                            <span className="font-semibold" itemProp="population">{country.population}</span>
                          </div>
                        <div className="flex justify-between lg:block">
                          <span className="text-gray-600">Border Length:</span>
                          <span className="font-semibold">{country.borderLength}</span>
                        </div>
                        <div className="flex justify-between lg:block">
                          <span className="text-gray-600">Relations:</span>
                          <span className={`font-semibold px-2 py-1 rounded-full text-xs ${
                            country.relationship === 'Very Friendly' ? 'bg-green-100 text-green-800' :
                            country.relationship === 'Friendly' ? 'bg-blue-100 text-blue-800' :
                            country.relationship === 'Complex' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {country.relationship}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>                  {/* Main Content */}
                  <div className="lg:w-3/4">
                    <p className="text-gray-700 mb-6 leading-relaxed" itemProp="description">
                      {country.description}
                    </p>

                    {/* Country Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Basic Information</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>Area:</strong> <span itemProp="area">{country.area}</span></div>
                            <div><strong>Currency:</strong> <span itemProp="currency">{country.currency}</span></div>
                            <div><strong>Languages:</strong> <span itemProp="language">{country.languages.join(', ')}</span></div>
                            <div><strong>Diplomacy Since:</strong> {country.establishedDiplomacy}</div>
                          </div>
                        </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Economic Relations</h4>
                        <div className="space-y-1 text-sm">
                          <div><strong>Trade Volume:</strong> {country.tradeVolume}</div>
                          <div><strong>Major Cities:</strong></div>
                          <div className="text-gray-600 ml-2">
                            {country.majorCities.slice(0, 3).join(', ')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Facts</h4>
                        <ul className="space-y-1 text-sm">
                          {country.keyFacts.slice(0, 3).map((fact, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <span className="text-gray-700">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Agreements and Issues */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Agreements</h4>
                        <ul className="space-y-2">
                          {country.keyAgreements.map((agreement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2">✓</span>
                              <span className="text-gray-700 text-sm">{agreement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Current Issues</h4>
                        <ul className="space-y-2">
                          {country.currentIssues.map((issue, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-2">!</span>
                              <span className="text-gray-700 text-sm">{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Organizations */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Regional Organizations & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">SAARC</h3>
              <p className="text-gray-700 text-sm">
                South Asian Association for Regional Cooperation - India is a founding member along with most neighbors.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3">BIMSTEC</h3>
              <p className="text-gray-700 text-sm">
                Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation - Alternative regional platform.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-3">SCO</h3>
              <p className="text-gray-700 text-sm">
                Shanghai Cooperation Organisation - India joined in 2017, China and Pakistan are also members.
              </p>
            </div>
          </div>
        </div>        {/* SEO Content */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions about India's Neighbors
          </h2>
          <div className="space-y-6">
            <div itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-800 mb-2" itemProp="name">
                How many countries share borders with India?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700" itemProp="text">
                  India shares land borders with 7 countries (Pakistan, China, Nepal, Bangladesh, Bhutan, Myanmar, and Afghanistan via disputed territory) 
                  and maritime borders with Sri Lanka and Maldives.
                </p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-800 mb-2" itemProp="name">
                Which country has the longest border with India?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700" itemProp="text">
                  Bangladesh has the longest border with India at approximately 4,096 kilometers, followed by China at 3,488 kilometers 
                  and Pakistan at 3,323 kilometers.
                </p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-800 mb-2" itemProp="name">
                What is India's relationship with its neighbors?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700" itemProp="text">
                  India's relationships with its neighbors vary significantly - from very friendly ties with Bhutan to complex 
                  relationships with Pakistan and China. Most relationships involve a mix of cooperation and challenges.
                </p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold text-gray-800 mb-2" itemProp="name">
                Which neighbor is India's largest trading partner?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700" itemProp="text">
                  China is India's largest trading partner among neighboring countries, with bilateral trade exceeding $125 billion, 
                  though the relationship faces political challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>      <Footer />
      </div>
    </>
  );
};

export default NeighbouringCountriesPage;
