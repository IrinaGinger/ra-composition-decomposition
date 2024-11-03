import Categories from '../Categories/categories'; 

import { INewsProps } from '../../../interfaces';

import './news.css';

// выводит блок новостей

export default function News(props: INewsProps) {
    const { newsCategories, newsContent } = props;
    return (
        <div className="news-container">
            <nav className="news-nav">
                <Categories
                    categories={newsCategories}
                />                
                <div className="news-current-datetime">31 июля, среда 02:32</div>
            </nav>
            <div className="news-content">
                <ul>
                    {newsContent.map((name, index) => {
                        return (
                            <li className="news-content-item" key={index}>
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}