import News from '../../ChildrenComponents/News/news';
import Widjet from '../../ChildrenComponents/Widjet/widjet';
import ListThreeCol from '../../ChildrenComponents/ListThreeCol/list3col';

import newsCategories from '../../../data/newsCategories';
import newsContent from '../../../data/newsContent';
import exchangeRates from '../../../data/exchangeRates';

import { IListThreeColItems } from '../../../interfaces';

import './header.css';

// верхний раздел страницы (новости, курсы валют, боковая реклама)

export default function Header() {    
    let exchangeRatesListItem: IListThreeColItems;
    const exchangeRatesList: IListThreeColItems[] = [];

    for (let i = 0; i < exchangeRates.length; i++) {
        exchangeRatesListItem = {
            col1: exchangeRates[i].currency,
            col2: exchangeRates[i].rate,
            col3: exchangeRates[i].rateСhange,
        }
        exchangeRatesList.push(exchangeRatesListItem);
    }
    exchangeRatesList.push({
        col1: '...',
        col2: '',
        col3: '',
    });

    return (
        <>
            <div className="header-main">
                <News newsCategories={newsCategories} newsContent={newsContent} />

                <ListThreeCol
                    listItems={exchangeRatesList}
                    classList='class-list-flex'
                    classLiItem='list-nomark'
                    styleCol1='col1-link'
                    styleCol2='col2'
                    styleCol3='col3-grey'
                />
            </div>

            <aside className="header-aside">                                                                     
                <div className="aside-img-container">
                    <img className="aside-img" src="https://img.icons8.com/?size=100&id=igZtE3bPQxyp&format=png&color=000000" alt="Yandex" />
                </div>  
                <Widjet title="Работа над ошибками">
                    <div className="children-wrapper">
                    <p>Смотрите на Яндексе и запоминайте</p>
                    </div>
                </Widjet>
            </aside>
        </>
    );
}