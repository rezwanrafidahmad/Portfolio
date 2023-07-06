import monte_carlo_cover from 'img/monte_carlo_cover.jpg'
import monte_carlo_1 from 'img/monte_carlo_1.jpg'
import monte_carlo_2 from 'img/monte_carlo_2.jpg'
import monte_carlo_3 from 'img/monte_carlo_3.jpg'

import imdb_cover from 'img/imdb_cover.jpg'
import imdb_1 from 'img/imdb_1.png'
import imdb_2 from 'img/imdb_2.png'
import imdb_3 from 'img/imdb_3.png'

const data = [
  {
    id: 1,
    name: 'Calculating Risks with Monte Carlo Simulation on Zoom Stocks using Cloud Services',

    img0: monte_carlo_cover,
    img1: monte_carlo_1,
    img2: monte_carlo_2,
    img3: monte_carlo_3,

    imgSub1: '1. Warming up AWS Scalable Services - AWS Lambda, EC2 and RDS',
    imgSub2: '2. Calculating the risk and cost associated after warming up',
    imgSub3: '3. Audit page to retrieve the logs from AWS Relational Database',
    skills: ['HTML5/CSS3', 'Python', 'Flask', 'Jinja2', 'AWS Lambda', 'AWS EC2', 'AWS RDS', 'Google App Engine'],
    desc : 'A multi-cloud application was developed to calculate risks using Monte Carlo Simulation on trading signals. The application utilized various cloud services and platforms, including AWS Lambda, EC2, RDS, and Google App Engine, to create a scalable and elastic Software-as-a-Service (SaaS) infrastructure. The aim was to enable efficient risk assessment and analysis for traders. Additionally, a cost analysis was conducted to compare the expenses associated with different cloud services, ensuring optimal resource allocation. The estimated operation costs were evaluated to make informed decisions regarding the selection of cloud services. This approach allowed for flexibility, cost-effectiveness, and reliable performance in the trading risk calculation process. HTML5/CSS3 were used for Front-End, and Python/Flask was used as backend for calculation.',
    category: 'Web Development & Cloud Computing',
    website_link: 'https://static-balm-382414.nw.r.appspot.com/',
    githublink : 'https://github.com/shaikhahmad179/monte_carlo_risk_analysis',
    youtubelink: 'https://www.youtube.com/watch?v=_j7hH_B6wco',
  },
  {
    id: 2,
    name: 'Sentiment Analysis using IMDB Dataset',

    img0: imdb_cover,
    img1: imdb_1,
    img2: imdb_2,
    img3: imdb_3,

    imgSub1: '1. Data Visualization - Frequency of sentiments and number of most common words.',
    imgSub2: '2. System Architecutre/Pipeline of NLP model',
    imgSub3: '3. Comparing performance of models - F1 Score, Precision, Recall and Mean Cross Val Accuracy',
    skills: ['Python', 'Natural Language Processing', 'Data Preprocessing','Pandas/NumPy', 'Sklearn'],
    desc: 'The IMDB Dataset of 50k Movie Reviews was used to understand the performance of Decision Tree (DT), Random Forest (RF), Perceptron (PPN), Multi-layer Perceptron (MLP), K-Nearest Neighbor (KNN) and Support Vector Machine (SVM) models in the case of sentiment analysis (+ve /-ve), and the Randomized Search Cross-validation technique was employed to find the optimal set of parameters. The hypothesis assumes that some model’s performance will be superior to others, with the expectation that the MLP, due to its hidden layers, would outperform the rest in capturing intricate patterns from textual data for this sentiment analysis classification. However, the other models are not dismissed, as they are also expected to perform competitively given that it’s a binary classification problem.',
    category: 'Natural Language Processing (NLP)',
    website_link: null,
    githublink : 'https://github.com/shaikhahmad179/imdb_sentiment_analysis',
    youtubelink: null,
  },
  {
    id: 3,
    name: 'Breast Cancer Binary Classification using Naive Bayes and Logistic Regression',

    img0: imdb_cover,
    img1: imdb_1,
    img2: imdb_2,
    img3: imdb_3,

    imgSub1: '1. Data Visualization - Frequency of sentiments and number of most common words.',
    imgSub2: '2. System Architecutre/Pipeline of NLP model',
    imgSub3: '3. Comparing performance of models - F1 Score, Precision, Recall and Mean Cross Val Accuracy',
    skills: ['Python', 'Binary Classification', 'Data Preprocessing','Pandas/NumPy', 'Sklearn'],
    desc: 'The IMDB Dataset of 50k Movie Reviews was used to understand the performance of Decision Tree (DT), Random Forest (RF), Perceptron (PPN), Multi-layer Perceptron (MLP), K-Nearest Neighbor (KNN) and Support Vector Machine (SVM) models in the case of sentiment analysis (+ve /-ve), and the Randomized Search Cross-validation technique was employed to find the optimal set of parameters. The hypothesis assumes that some model’s performance will be superior to others, with the expectation that the MLP, due to its hidden layers, would outperform the rest in capturing intricate patterns from textual data for this sentiment analysis classification. However, the other models are not dismissed, as they are also expected to perform competitively given that it’s a binary classification problem.',
    category: 'Natural Language Processing (NLP)',
    website_link: null,
    githublink : 'https://github.com/shaikhahmad179/imdb_sentiment_analysis',
    youtubelink: null,
  },

]

export default data