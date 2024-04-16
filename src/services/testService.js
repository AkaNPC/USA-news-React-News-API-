export default class testService {
    constructor() {
        this._apiBase = 'https://newsapi.org/v2';
    }


    getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        console.log(res);
        

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getArticles = async() => {
        const res = await this.getResource('/top-headlines?country=us&apiKey=af5a769a964c48aaab7ab0fb9c358cb4');
        return res.data.articles.map(this._transformArticles)
       
    }

    _transformArticles = (articles) => {
        return {
            author: articles.author,
            title: articles.title,
            description: articles.description,
            url: articles.born,
            urlToImage: articles.urlToImage,
            publishedAt: articles.publishedAt,
            content: articles.content
        }
    }
}

// const getResource = async (url) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     const some = await res.json();

//     return some;
// };

// getResource('https://newsapi.org/v2/everything?q=keyword&apiKey=af5a769a964c48aaab7ab0fb9c358cb4')
//     .then((res) => console.log('Success', res))
//     .catch(error => console.error(error));