// constructor() {
// this._apiBase = 'https://newsapi.org/v2';
// }

const getNews = async (category, func) => {
    await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=af5a769a964c48aaab7ab0fb9c358cb4`)
        .then(res => {
            if (!res.ok) throw Error(`Could not fetch url, status: ${res.status}`);
            return res.json();
        })
    .then(data => func(data.articles))
    // .catch(error => {
    //     console.log("error", error);
    // });
};

export { getNews };
