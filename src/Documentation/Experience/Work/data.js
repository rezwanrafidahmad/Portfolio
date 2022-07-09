const data = [
  {
    id: 1,
    title: 'Software Engineer (Data Analyst)',
    company: 'SEBPO (ServicEngine Ltd.)',
    companyLink: 'https://sebpo.com/',
    projects: [
      {
        id: 1,
        name: 'Project - Moody’s Data Analytics',
        date: '2021 May - 2022 June',
        responsibles: [
          {
            id: 1,
            desc: 'Writing SQL Queries and Python Scripts in HIVE/PySpark as per business logic on financial datasets.',
          },
          {
            id: 2,
            desc: 'Understanding and analyzing data - financial trends of public and private companies.',
          },
          {
            id: 3,
            desc: 'Giving critical feedback and providing recommendations to update business logic where necessary.',
          },
          {
            id: 4,
            desc: 'Generating and publishing dashboards using Microsoft PowerBI, Excel from aggregated data.',
          },
          {
            id: 5,
            desc: 'Updating dashboards and datasets on monthly/quarterly basis, making changes if needed.',
          },
        ],
      },
      {
        id: 2,
        name: 'Project - Moody’s BvD',
        date: '2020 September - 2021 April',
        responsibles: [
          {
            id: 1,
            desc: 'Web/Data Scraping using Python and Selenium on public/private utility websites and documents (balance sheet, income statement etc.).',
          },
          {
            id: 2,
            desc: '2. Automating downloading of files from websites and dumping in shared storage for further processing.',
          },
          {
            id: 3,
            desc: 'Using TesseractOCR and advanced libraries to extract data from images.',
          },
          {
            id: 4,
            desc: 'Writing transformation scripts in Python which transforms and models data from multiple data types/sources (datasets, pdf, image) using pandas, numpy etc.',
          },
          {
            id: 5,
            desc: 'Exporting transformed data in AWS S3 Bucket in the form of CSV, XML etc.',
          },
        ],
      },
      {
        id: 3,
        name: 'Project - Moody’s Web Scraping',
        date: '2020 March - 2020 August',
        responsibles: [
          {
            id: 1,
            desc: 'Scraping data from websites using Java/Groovy on corporate public/private entities.',
          },
          {
            id: 2,
            desc: ' Debgugging code and checking runtime/compilation errors in Groovy scripts (repair scripts).',
          },
          {
            id: 3,
            desc: 'Cross-checking data and further filtering before exporting in CSV, JSON, XML.',
          },
        ],
      },
    ],
  },
]

export default data
