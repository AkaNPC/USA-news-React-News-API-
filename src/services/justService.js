export default class justService {

    getArticles = async () => {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=af5a769a964c48aaab7ab0fb9c358cb4');
        console.log(res);
    }
}