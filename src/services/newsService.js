export default class newsService {

    constructor() {
        // Указываем _ для других разработчиков, что это статичные данные и их не нужно трогать
        this._apiBase = 'https://newsapi.org/v2';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        // Обработаем вручную ошибку 404, которую мы получили с сервера
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();

    }
    getTopHeadlinesUSA = async () => {
        const res = await this.getResource("/top-headlines?country=us&apiKey=af5a769a964c48aaab7ab0fb9c358cb4");
        return res.map(this._transformNews)
    }

     _transformNews = (articles) => {
        return {
            author: this.articles.author,
            title: this.articles.title,
            description: this.articles.description,
            url: this.articles.born,
            urlToImage: this.articles.urlToImage,
            publishedAt: this.articles.publishedAt,
            content: this.articles.content
        }
    }

       // isSet(data) {
    //     if(data) {
    //         return data
    //     } else {
    //         return 'no data :('
    //     }
    // }

    // _extractId = (item) => {
    //     const idRegExp = /\/([0-9]*)$/;
    //     return item.url.match(idRegExp)[1];
    // }

    // getCharacter = async (id) => {
    //     const character = await this.getResource(`/characters/${id}`);
    //     return this._transformCharacter(character);
    // }

    // getAllHouses = async () => {
    //     const res = await this.getResource(`/houses/`);
    //     return res.map(this._transformHouse);
    // }

    // getHouse = async (id) => {
    //     const house = await this.getResource(`/houses/${id}/`);
    //     return this._transformHouse(house);
    // }

    // getAllBooks = async () => {
    //     const res = await this.getResource(`/books`);
    //     return res.map(this._transformBook);
    // }

    // getBook = async (id) => {
    //     const book = await this.getResource(`/books/${id}/`);
    //     return this._transformBook(book);
    // }


    // _transformHouse = (house) => {
    //     return {
    //         name: house.name,
    //         region: house.region,
    //         words: house.words,
    //         titles: house.titles,
    //         overlord: house.overlord,
    //         ancestralWeapons: house.ancestralWeapons
    //     }
    // }

    // _transformBook = (book) => {
    //     return {
    //         name: book.name,
    //         numberOfPages: book.numberOfPages,
    //         publisher: book.publisher,
    //         released: book.released
    //     }
    // }

}