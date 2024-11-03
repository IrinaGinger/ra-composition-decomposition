import { IWidjetProps } from '../../../interfaces';

import './widjet.css';

// Компонент Виджет, состоящий из заголовка-ссылки и различного содержимого
// применяется в разделах:
// - боковой раздел в верхней части (реклама и ссылки на материалы Яндекса)
// - погода
// - карта
// - телепрограмма
// - посещаемое
// - эфир

export default function Widjet({ title, children }: IWidjetProps) {
    return (
        <div className="widget">
            <h3 className="widget-title">
                <a href="#0" className="widget-title-link">
                    {title}
                </a>
            </h3>
            {children}
        </div>
    )
}