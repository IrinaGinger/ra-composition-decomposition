import { ICategoriesProps } from '../../../interfaces';

import './categories.css';

// выводит список категорий
// используется в новостях, поиске

export default function Categories(props: ICategoriesProps) {
    const { categories } = props;

    return (
        <ul className="menu">
            {categories.map((category, index) => {
                return (
                    <li
                        className={`menu-item ${index === 0 ? 'active' : ''}`}
                        key={index}
                    >
                        <a href="#0" className="menu-item-link">
                            {category}
                        </a>
                    </li>
                );
            })}
        </ul>
    )
}