import { IWeatherProps } from '../../../interfaces';

import './weather.css';

// выводит содержимое виджета Погода

export default function Weather(props: IWeatherProps) {
    const {
        pic,
        average,
        morning,
        daytime,
    } = props;

    return (
        <div className="weather">
            <div className="weather-image-container">
                <img className="weather-image" src={pic} alt="weather" />
            </div>
            <div className="weather-widget-degrees__average">
                {average}&deg;
            </div>
            <div className="weather-widget-degrees__in-detail">
                <div className="weather-widget-degrees__in-detail-morning">
                    Утром {morning},
                </div>
                <div className="weather-widget-degrees__in-detail-afternoon">
                    днём {daytime}
                </div>
            </div>
        </div>
    )
}