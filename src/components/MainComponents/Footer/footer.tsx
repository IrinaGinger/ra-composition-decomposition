// компоненты
import Widjets from '../../ChildrenComponents/Widjets/widjets';
import Widjet from '../../ChildrenComponents/Widjet/widjet';
import Weather from '../../ChildrenComponents/Weather/weather';
import ListThreeCol from '../../ChildrenComponents/ListThreeCol/list3col';

import { IListThreeColItems } from '../../../interfaces';

// данные для отрисовки
import temperature from '../../../data/temperature';
import air from '../../../data/air';
import TVPrograms from '../../../data/TVPrograms';
import visitedPages from '../../../data/visited';

// стили
import './footer.css';

// нижний раздел страницы (виджеты погоды, телепрограммы и пр.)

export default function Footer() {

    let listItem: IListThreeColItems;
    const airItemList: IListThreeColItems[] = [];
    const programItemList: IListThreeColItems[] = [];
    const visitedItemList: IListThreeColItems[] = [];

    for (let i = 0; i < air.length; i++) {
        listItem = {
            col1: air[i].link,
            col2: '',
            col3: air[i].source,
        }
        airItemList.push(listItem);
    }

    for (let i = 0; i < TVPrograms.length; i++) {
        listItem = {
            col1: TVPrograms[i].time,
            col2: TVPrograms[i].name,
            col3: TVPrograms[i].source,
        }
        programItemList.push(listItem);
    }

    for (let i = 0; i < visitedPages.length; i++) {
        listItem = {
            col1: visitedPages[i].name,
            col2: ' - ',
            col3: visitedPages[i].description,
        }
        visitedItemList.push(listItem);
    }

    return (
        <>
            <Widjets>
                <Widjet title="Погода">
                    <div className="children-wrapper">
                        <Weather
                            pic={''}
                            average={temperature.average}
                            morning={temperature.morning}
                            daytime={temperature.daytime}
                        />
                    </div>
                </Widjet>

                <Widjet title="Карта Германии">
                    <div className="children-wrapper">
                        <div>Расписания</div>
                    </div>
                </Widjet>

                <Widjet title="Эфир">
                    <div className="children-wrapper">
                        <ListThreeCol
                            listItems={airItemList}
                            classList='class-list-vertical'
                            classLiItem='mark-list-arrow'
                            styleCol1='col1-link'
                            styleCol2='col2'
                            styleCol3='col3-grey'
                        />
                    </div>
                </Widjet>

                <Widjet title="Посещаемое">
                    <div className="children-wrapper">
                        <ListThreeCol
                            listItems={visitedItemList}
                            classList='class-list-vertical'
                            classLiItem='list-nomark'
                            styleCol1='col1-link'
                            styleCol2='col2'
                            styleCol3='col3-black'
                        />
                    </div>
                </Widjet>

                <Widjet title="Телепрограмма">
                    <div className="children-wrapper">
                        <ListThreeCol
                            listItems={programItemList}
                            classList='class-list-vertical'
                            classLiItem='list-nomark'
                            styleCol1='col1-link'
                            styleCol2='col2'
                            styleCol3='col3-grey'
                        />
                    </div>
                </Widjet>

            </Widjets>
        </>
    );
}