const API_KEY = '2f2c60c78ba342ebbacd2e626ef792e7';

export const fetchArticles = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
};
