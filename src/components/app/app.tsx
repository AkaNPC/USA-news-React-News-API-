import React, { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import NewsList from "../newsList/newsList";
import './app.css';
import { getNews } from "../../services/newsService";


export default function App() {

    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [active, setActive] = useState(1);
    const [clickedUrl, setClickedUrl] = useState('');

    useEffect(() => {
        const loadData = async () => {
            await getNews(category, setArticles)
        };
        loadData();
    }, [category, clickedUrl]);


    return (
        <div>
            <h1>World News</h1>
            <NavBar active={active} setCategory={setCategory} setActive={setActive} />
            <NewsList articles={articles} setClickedUrl={setClickedUrl} />
        </div>
    )
}