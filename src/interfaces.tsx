export interface ICategoriesProps {
    categories: string[],
}

export interface ISearchProps {
    searchСategories: string[],
    searchPrompt: string,
    searchExample: string,
    }

export interface INewsProps {
    newsCategories: string[], 
    newsContent: string[],
}

export interface IExchangeRate {
    currency: string,
    rate: string,
    rateСhange: string,
}

export interface IExchangeRates {
    exchangeRates: IExchangeRate[],
}

export interface IWidjetChildrenProps {
    children?: React.ReactNode,
}

export interface IWidjetProps {
    title: string,
    children?: React.ReactNode,
}

export interface IWeatherProps {
    pic: string,
    average: string,
    morning: string,
    daytime: string,
}

export interface IListThreeColItems {
    col1: string,
    col2?: string,
    col3: string,
}

export interface IListThreeColProps {
    listItems: IListThreeColItems[],
    classList: string,
    classLiItem: string,
    styleCol1: string, 
    styleCol2: string,
    styleCol3: string,
}