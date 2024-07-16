export const formatDateDDMMYY = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
};

export const formatDateDDMMYYYY = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}.${month}.${year}`;
};

export const formatDateTodayYY = () => {
    const today = new Date();
    return formatDateDDMMYY(today);
};

export const formatDateTodayYYYY = () => {
    const today = new Date();
    return formatDateDDMMYYYY(today);
};

export const addOneYear = (dateString) => {
    const dateNew = dateString.split('.');
    const year = dateNew.pop();
    let yearNew = +year + 1;
    if (String(yearNew).length === 1) {
        yearNew = '0' + yearNew;
    }
    dateNew.push(yearNew)
    return dateNew.join('.')
};

export const formatDate = () => {
    const today = new Date();
    const months = [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
        'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
    ];

    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${day} ${month} ${year}`;
};