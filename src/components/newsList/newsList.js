import './newsList.css';
import ArticleDate from '../articleDate/articleDate';

export default function NewsList({ articles }) {

    return (
        <div className="itemsListStyle">
            {articles.map((item, index) => (
                <div
                    key={index}
                    className="itemStyle">
                    <img src={item.urlToImage} alt={item.title}></img>
                    <h4>{item.source.name}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h6>{item.author}</h6>
                    <ArticleDate item={item} />
                </div>
            ))}
        </div>

    )
}