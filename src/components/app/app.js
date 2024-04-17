import React, { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import NewsList from "../newsList/newsList";
import './app.css';


export default function App() {

    // news = new testService();
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [active, setActive] = useState(1);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=af5a769a964c48aaab7ab0fb9c358cb4`)
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div>
            <h1>World News</h1>
            <NavBar active={active} setCategory={setCategory} setActive={setActive}/>
            <NewsList articles={articles}/>
        </div>
    )
}