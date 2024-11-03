import { IListThreeColProps } from '../../../interfaces';

import './list3col.css';

// Выводит список (вертикальный или горизонтальный), каждый элемент которого состоит из 3 частей
// применяется в разделах:
// - курсы валют
// - телепрограмма
// - посещаемое
// - эфир

export default function ListThreeCol(props: IListThreeColProps) {
    const { listItems, classList, classLiItem, styleCol1, styleCol2, styleCol3 } = props;
    let firstCol: React.ReactElement;
    
    return (
        <div className="list-container">
            <ul className={classList}>
                {listItems.map((item, index) => {
                    return (
                        <li className={classLiItem} key={`${classLiItem}-${index}`}>
                            <a href="#0" className={styleCol1}>
                                {item.col1}
                            </a>
                            {firstCol}
                            <span className={styleCol2}>
                                {item.col2}
                            </span>
                            <span className={styleCol3}>
                                {item.col3}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}