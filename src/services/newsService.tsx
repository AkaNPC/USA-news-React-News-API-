import { staticData } from "static/staticData";

const newsKey = staticData.newsKey;

const getNews = async (category, func) => {

    await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsKey}`)
        .then(res => {
            if (!res.ok) throw Error(`Could not fetch url, status: ${res.status}`);
            return res.json();
        })
        .then(data => func(data.articles))
        .catch(error => {
            console.log("error", error);
        });
};

export { getNews };
