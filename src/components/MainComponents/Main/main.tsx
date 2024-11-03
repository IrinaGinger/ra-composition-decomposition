import Categories from '../../ChildrenComponents/Categories/categories'; 

// import Search from '../../ChildrenComponents/Search/search';
import searchСategories from '../../../data/searchCategories';

import './main.css';

// главный раздел страницы (поиск, баннерная реклама)

export default function Main() {
    const srcBanner ='https://img.freepik.com/free-vector/modern-bright-yellow-color-geometric-banner-design_1055-21481.jpg?t=st=1730624940~exp=1730628540~hmac=a6c24f0a014c7c33a38c4ad7cda1feb7185382d3ecc6476e75c40e5860d767d9&w=1380';
    const srcSearch = 'https://upload.wikimedia.org/wikimedia/ru/c/cc/Yandex_logo.svg';
    
    return (
        <>
            <div className="search">
                <nav className="search-nav">
                    <Categories
                        categories={searchСategories}
                    />
                </nav>

                <form className="search-form">
                    <div className='search-img-container'>
                        <img className='search-img' src={srcSearch} alt='Яндекс' />
                    </div>
                    <label className="search-label" htmlFor="search-input">Поиск Яндекса</label>
                    <input className="search-input" id="search-input" type="text" name="search-input" required />
                    <button className="search-button" type="submit">
                        Найти
                    </button>
                </form>

                <p className="search-prompt">
                    Найдётся всё. Например,
                    <span className="search-example">
                        &nbsp;фаза луны сегодня
                    </span>
                </p>
            </div>


                {/* <Search
                    searchСategories={searchСategories}
                    searchPrompt="Найдётся всё. Например,"
                    searchExample="фаза луны сегодня"
                /> */}
            <div className='banner-container'>
                <img className='banner-image' src={srcBanner} alt='banner' />
            </div>
            
        </>
    );
}