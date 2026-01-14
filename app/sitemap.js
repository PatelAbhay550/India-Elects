export default async function sitemap() {
  const baseUrl = 'https://indiaelects.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/loksabha_result_2024',
    '/bihar-election-2025',
    '/stateresults',
    '/stateresults/Andhrapradesh',
    '/stateresults/Sikkim',
    '/prime-ministers',
    '/cheif-ministers-list',
    '/Governors-list',
    '/politician',
    '/blogs',
    '/blogs/categories',
    '/neighbouring-countries',
    '/AboutUs',
    '/ContactUs',
    '/PrivacyPolicy',
    '/Summary',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch Lok Sabha constituencies
  let loksabhaPages = [];
  try {
    const res = await fetch('https://indiaelects.vercel.app/api/e2024', {
      next: { revalidate: 86400 },
    });
    if (res.ok) {
      const data = await res.json();
      const constituencies = [...new Set(data.map((result) => result.constituency))];
      loksabhaPages = constituencies.map((constituency) => ({
        url: `${baseUrl}/loksabha_result_2024/${constituency.replace(/ /g, '%20').replace(/&/g, '%26')}`,
        lastModified: new Date('2024-06-08'),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching Lok Sabha data:', error);
  }

  // Fetch Bihar constituencies
  let biharPages = [];
  try {
    const res = await fetch(
      'https://www.thehindu.com/infographics/2025-11-16/bihar-assembly-election-results-2025/assets/data/2025.json',
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      const constituencySet = new Set();
      Object.values(data).forEach((candidates) => {
        candidates.forEach((candidate) => {
          constituencySet.add(candidate.AC_Name);
        });
      });
      biharPages = Array.from(constituencySet).map((constituency) => ({
        url: `${baseUrl}/bihar-election-2025/${constituency.toLowerCase().replace(/ /g, '-')}`,
        lastModified: new Date('2025-11-23'),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching Bihar data:', error);
  }

  return [...staticPages, ...loksabhaPages, ...biharPages];
}
