import Footer from "@/components/footer";
import Link from "next/link";
import { Metadata } from "next";

// Schema markup for Prime Ministers page
const primeMinistersSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Prime Ministers of India - Complete List with Biography",
  "description": "Complete list of all Prime Ministers of India from 1947 to 2024. Get detailed biography, tenure, political party, achievements and key policies of each PM.",
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
    "@id": "https://indiaelects.vercel.app/prime-ministers"
  },
  "articleSection": "Politics",
  "keywords": ["Prime Ministers of India", "Indian PM list", "Narendra Modi", "Manmohan Singh", "Atal Bihari Vajpayee", "Indira Gandhi", "Jawaharlal Nehru", "Indian politics"]
};

const breadcrumbSchema = {
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
      "name": "Prime Ministers of India",
      "item": "https://indiaelects.vercel.app/prime-ministers"
    }
  ]
};

export const metadata = {
  title: "Prime Ministers of India | Complete List with Biography | India Elects",
  description: "Complete list of all Prime Ministers of India from 1947 to 2024. Get detailed biography, tenure, political party, achievements and key policies of each PM.",
  keywords: "Prime Ministers of India, Indian PM list, Narendra Modi, Manmohan Singh, Atal Bihari Vajpayee, Indira Gandhi, Jawaharlal Nehru, Indian politics",
  openGraph: {
    title: "Prime Ministers of India - Complete List | India Elects",
    description: "Comprehensive information about all Prime Ministers of India with their biography, achievements and political career details.",
    type: "website",
  },
  alternates: {
    canonical: "/prime-ministers"
  }
};

const primeMinistersData = [
  {
    id: 1,
    name: "Pandit Jawaharlal Nehru",
    tenure: "15 August 1947 – 27 May 1964",
    party: "Indian National Congress",
    birthDate: "14 November 1889",
    deathDate: "27 May 1964",
    birthPlace: "Allahabad, United Provinces, British India",
    education: "Trinity College, Cambridge; Inner Temple, London",
    keyAchievements: [
      "First Prime Minister of Independent India",
      "Architect of Modern India",
      "Non-Aligned Movement founder",
      "Established democratic institutions",
      "Five-Year Plans implementation"
    ],
    biography: "Jawaharlal Nehru was the first Prime Minister of India and a central figure in Indian politics. A leader of the Indian independence movement, he was a close associate of Mahatma Gandhi and played a crucial role in shaping modern India's political landscape.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jawaharlal_Nehru%2C_1947.jpg"
  },
  {
    id: 2,
    name: "Gulzarilal Nanda",
    tenure: "27 May 1964 – 9 June 1964 (Acting)",
    party: "Indian National Congress",
    birthDate: "4 July 1898",
    deathDate: "15 January 1998",
    birthPlace: "Sialkot, Punjab, British India",
    education: "Forman College, Lahore; Allahabad University",
    keyAchievements: [
      "Served as Acting PM twice",
      "Labor rights advocate",
      "Social reformer",
      "Bharat Ratna recipient (1997)"
    ],
    biography: "Gulzarilal Nanda served as the acting Prime Minister of India twice, following the deaths of Jawaharlal Nehru and Lal Bahadur Shastri. He was known for his work in labor rights and social reform.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Gulzarilal_Nanda_1.jpg"
  },
  {
    id: 3,
    name: "Lal Bahadur Shastri",
    tenure: "9 June 1964 – 11 January 1966",
    party: "Indian National Congress",
    birthDate: "2 October 1904",
    deathDate: "11 January 1966",
    birthPlace: "Mughalsarai, United Provinces, British India",
    education: "Kashi Vidyapith",
    keyAchievements: [
      "Led India during 1965 Indo-Pak War",
      "Coined 'Jai Jawan Jai Kisan' slogan",
      "Green Revolution promotion",
      "Tashkent Agreement signatory"
    ],
    biography: "Lal Bahadur Shastri was known for his honesty and humility. He led India during the 1965 war with Pakistan and promoted the Green Revolution. His slogan 'Jai Jawan Jai Kisan' became iconic.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lal_Bahadur_Shastri_%28from_stamp%29.jpg/250px-Lal_Bahadur_Shastri_%28from_stamp%29.jpg"
  },
  {
    id: 4,
    name: "Indira Gandhi",
    tenure: "24 January 1966 – 24 March 1977, 14 January 1980 – 31 October 1984",
    party: "Indian National Congress",
    birthDate: "19 November 1917",
    deathDate: "31 October 1984",
    birthPlace: "Allahabad, United Provinces, British India",
    education: "Visva-Bharati University, Oxford University",
    keyAchievements: [
      "First female Prime Minister of India",
      "Led India during 1971 Indo-Pak War",
      "Bangladesh Liberation War",
      "Operation Blue Star",
      "Emergency Period (1975-1977)"
    ],
    biography: "Indira Gandhi was the first and only female Prime Minister of India. Known as the 'Iron Lady of India', she was a central figure in Indian politics for decades and played a crucial role in the creation of Bangladesh.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcK_81YR_C-AbA7xZbgI4lvVyYKI8wBoCjg&s"
  },
  {
    id: 5,
    name: "Morarji Desai",
    tenure: "24 March 1977 – 28 July 1979",
    party: "Janata Party",
    birthDate: "29 February 1896",
    deathDate: "10 April 1995",
    birthPlace: "Bhadeli, Bombay Presidency, British India",
    education: "Wilson College, Mumbai",
    keyAchievements: [
      "First non-Congress Prime Minister",
      "Ended Emergency period",
      "Restored democratic freedoms",
      "Nishan-e-Pakistan recipient"
    ],
    biography: "Morarji Desai was the first non-Congress Prime Minister of India. He came to power after the Emergency and worked to restore democratic institutions and civil liberties.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Morarji_Desai_During_his_visit_to_the_United_States_of_America_%28cropped%29.jpg"
  },
  {
    id: 6,
    name: "Charan Singh",
    tenure: "28 July 1979 – 14 January 1980",
    party: "Janata Party (Secular)",
    birthDate: "23 December 1902",
    deathDate: "29 May 1987",
    birthPlace: "Noorpur, United Provinces, British India",
    education: "Agra University",
    keyAchievements: [
      "Champion of farmers' rights",
      "Land reform advocate",
      "Shortest serving elected PM",
      "Known as 'Champion of farmers'"
    ],
    biography: "Charan Singh was known as the 'Champion of farmers' and advocated for agricultural and rural development. He served the shortest tenure as an elected Prime Minister.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkt7qd_h4SvGJjh7GdjKJLlzhN3pPwTl1AA&s"
  },
  {
    id: 7,
    name: "Rajiv Gandhi",
    tenure: "31 October 1984 – 2 December 1989",
    party: "Indian National Congress",
    birthDate: "20 August 1944",
    deathDate: "21 May 1991",
    birthPlace: "Mumbai, Bombay Presidency, British India",
    education: "Trinity College, Cambridge",
    keyAchievements: [
      "Youngest Prime Minister of India",
      "IT and telecommunications modernization",
      "Computer revolution initiator",
      "Punjab Accord",
      "Anti-defection law"
    ],
    biography: "Rajiv Gandhi became the youngest Prime Minister of India at age 40. He is credited with modernizing India's technology sector and initiating the computer revolution in the country.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Rajiv_Gandhi_%281987%29.jpg"
  },
  {
    id: 8,
    name: "Vishwanath Pratap Singh",
    tenure: "2 December 1989 – 10 November 1990",
    party: "Janata Dal",
    birthDate: "25 June 1931",
    deathDate: "27 November 2008",
    birthPlace: "Allahabad, United Provinces, British India",
    education: "Allahabad University, Pune University",
    keyAchievements: [
      "Mandal Commission implementation",
      "Anti-corruption crusader",
      "Social justice advocate",
      "OBC reservation implementation"
    ],
    biography: "V.P. Singh implemented the Mandal Commission recommendations, providing reservations for Other Backward Classes. He was known for his fight against corruption and commitment to social justice.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Visit_of_Vishwanath_Pratap_Singh%2C_Indian_Minister_for_Trade%2C_to_the_CEC_%28cropped%29.jpg"
  },
  {
    id: 9,
    name: "Chandra Shekhar",
    tenure: "10 November 1990 – 21 June 1991",
    party: "Samajwadi Janata Party (Rashtriya)",
    birthDate: "17 April 1927",
    deathDate: "8 July 2007",
    birthPlace: "Ibrahimpatty, United Provinces, British India",
    education: "Allahabad University",
    keyAchievements: [
      "Young Turk movement leader",
      "Economic liberalization initiator",
      "Gulf War crisis management",
      "Socialist leader"
    ],
    biography: "Chandra Shekhar was a socialist leader and one of the 'Young Turks' in the Congress party. He managed the country during the Gulf War crisis and initiated some economic reforms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7haJYlbjdzQMtHhY1vF_rrPI3lIGM1EahQ&s"
  },
  {
    id: 10,
    name: "P. V. Narasimha Rao",
    tenure: "21 June 1991 – 16 May 1996",
    party: "Indian National Congress",
    birthDate: "28 June 1921",
    deathDate: "23 December 2004",
    birthPlace: "Laknepally, Hyderabad State, British India",
    education: "Osmania University, Nagpur University",
    keyAchievements: [
      "Father of Economic Liberalization",
      "Look East Policy",
      "Nuclear weapons program",
      "IT sector development",
      "Multilingual scholar"
    ],
    biography: "P.V. Narasimha Rao is credited as the father of economic liberalization in India. Under his leadership, India opened up its economy and initiated major economic reforms that transformed the country.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf13o0lxy5Olr3hbHZ7gfVvsb5Ue-4wMIsmw&s"
  },
  {
    id: 11,
    name: "Atal Bihari Vajpayee",
    tenure: "16 May 1996 – 1 June 1996, 19 March 1998 – 22 May 2004",
    party: "Bharatiya Janata Party",
    birthDate: "25 December 1924",
    deathDate: "16 August 2018",
    birthPlace: "Gwalior, Gwalior State, British India",
    education: "Victoria College (now Laxmi Bai College), DAV College",
    keyAchievements: [
      "First non-Congress PM to complete full term",
      "Pokhran-II nuclear tests",
      "Golden Quadrilateral highway project",
      "Kargil War leadership",
      "Bharat Ratna recipient (2015)"
    ],
    biography: "Atal Bihari Vajpayee was a charismatic leader and poet who served as Prime Minister three times. He was known for his oratory skills and played a key role in India's nuclear program and infrastructure development.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Atal_Bihari_Vajpayee_%28crop_2%29.jpg/250px-Atal_Bihari_Vajpayee_%28crop_2%29.jpg"
  },
  {
    id: 12,
    name: "Dr. Manmohan Singh",
    tenure: "22 May 2004 – 26 May 2014",
    party: "Indian National Congress",
    birthDate: "26 September 1932",
    deathDate: null,
    birthPlace: "Gah, Punjab, British India (now Pakistan)",
    education: "Panjab University, Cambridge University, Oxford University",
    keyAchievements: [
      "Father of Economic Reforms (1991)",
      "First Sikh Prime Minister",
      "Nuclear Deal with USA",
      "MGNREGA implementation",
      "Right to Information Act"
    ],
    biography: "Dr. Manmohan Singh, an economist by profession, served as Prime Minister for two consecutive terms. He was the architect of India's economic liberalization in 1991 and continued reforms during his tenure as PM.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Official_Portrait_of_the_Prime_Minister_Dr._Manmohan_Singh.jpg"
  },
  {
    id: 13,
    name: "Narendra Modi",
    tenure: "26 May 2014 – Present",
    party: "Bharatiya Janata Party",
    birthDate: "17 September 1950",
    deathDate: null,
    birthPlace: "Vadnagar, Bombay State, India",
    education: "Gujarat University",
    keyAchievements: [
      "Digital India initiative",
      "Goods and Services Tax (GST)",
      "Swachh Bharat Mission",
      "Make in India campaign",
      "JAM Trinity (Jan Dhan-Aadhaar-Mobile)",
      "Article 370 abrogation"
    ],
    biography: "Narendra Modi is the current Prime Minister of India, serving since 2014. He previously served as Chief Minister of Gujarat for nearly 13 years. He is known for his development-focused governance and various social and economic initiatives.",
    image: "https://cdn.britannica.com/07/171607-050-1967B34C/Narendra-Modi.jpg"
  }
];

const PrimeMinistersPage = () => {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(primeMinistersSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Prime Ministers of India
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Complete Chronicle of India's Leadership Since Independence
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-80">
              Explore the comprehensive list of all Prime Ministers who have led India since 1947. 
              Discover their backgrounds, achievements, and contributions to the nation's journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Leadership Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Prime Ministers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">77</div>
              <div className="text-gray-600">Years of Democracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-gray-600">Female PM</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Acting PMs</div>
            </div>
          </div>
        </div>

        {/* Prime Ministers List */}
        <div className="space-y-8">
          {primeMinistersData.map((pm, index) => (
            <div key={pm.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image and Basic Info */}
                  <div className="lg:w-1/4">
                    <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <img 
                        src={pm.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(pm.name)}&size=128&background=random`} 
                        alt={pm.name}
                        className="w-full h-full object-cover"
                        
                      />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-blue-600 mb-1">#{pm.id}</div>
                      <div className="text-sm text-gray-600">{pm.party}</div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                        {pm.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          <strong>Tenure:</strong> {pm.tenure}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          <strong>Born:</strong> {pm.birthDate}
                        </span>
                        {pm.deathDate && (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                            <strong>Died:</strong> {pm.deathDate}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {pm.biography}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Key Achievements & Contributions
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pm.keyAchievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-800">Birthplace:</strong>
                        <span className="text-gray-600 ml-2">{pm.birthPlace}</span>
                      </div>
                      <div>
                        <strong className="text-gray-800">Education:</strong>
                        <span className="text-gray-600 ml-2">{pm.education}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            About the Office of Prime Minister
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
            <p>
              The Prime Minister of India is the head of government and exercises most executive power. 
              The office holder leads the executive branch of the Government of India and chairs the Union Cabinet.
            </p>
            <p>
              The Prime Minister is appointed by the President of India and must have the confidence of the 
              Lok Sabha (House of the People), the lower house of the Parliament of India.
            </p>
            <p>
              Since independence in 1947, India has had 15 Prime Ministers, with varying tenures and 
              contributions to the nation's development and progress.
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions about Prime Ministers of India
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Who was the first Prime Minister of India?
              </h3>
              <p className="text-gray-700">
                Pandit Jawaharlal Nehru was the first Prime Minister of India, serving from August 15, 1947, until his death on May 27, 1964.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Who is the current Prime Minister of India?
              </h3>
              <p className="text-gray-700">
                Narendra Modi is the current Prime Minister of India, serving since May 26, 2014. He is from the Bharatiya Janata Party (BJP).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Who was the only female Prime Minister of India?
              </h3>
              <p className="text-gray-700">
                Indira Gandhi was the only female Prime Minister of India, serving two non-consecutive terms from 1966-1977 and 1980-1984.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Who was the youngest Prime Minister of India?
              </h3>
              <p className="text-gray-700">
                Rajiv Gandhi became the youngest Prime Minister of India at the age of 40 years, following his mother Indira Gandhi's assassination in 1984.
              </p>
            </div>
          </div>
        </div>
      </div>      <Footer />
      </div>
    </>
  );
};

export default PrimeMinistersPage;
