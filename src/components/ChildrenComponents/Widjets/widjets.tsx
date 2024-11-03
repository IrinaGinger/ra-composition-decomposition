import { IWidjetChildrenProps } from '../../../interfaces';

import './widjets.css';

// размещает виджеты в нижней части страницы в 3 столбца

export default function Widjets(props: IWidjetChildrenProps) {
    const column1: React.ReactElement[] = [];
    const column2: React.ReactElement[] = [];
    const column3: React.ReactElement[] = [];
    const { children } = props;

    // console.log(typeof children);

    if (!children) {
        return;
    }
    
    children.map((item: React.ReactElement, index: number) => {
        if (index % 3 === 0) {
            column1.push(item);
        } else if (index % 3 === 1) {
            column2.push(item);
        } else {
            column3.push(item);
        }
    })

    return (
        <div className="widjets">
            <div className="widjets-column">
                {column1.map((item, index) => {
                    return (
                        <div className="widjet-container" key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="widjets-column">
                {column2.map((item, index) => {
                    return (
                        <div className="widjet-container" key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="widjets-column">
                {column3.map((item, index) => {
                    return (
                        <div className="widjet-container" key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}