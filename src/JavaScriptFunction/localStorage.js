const getDataFromLocalStorage = () => {
    const storedDataString = localStorage.getItem('donationPackagesId')
    // const storedPriceString = localStorage.getItem('price')
    if (!storedDataString) {
        return [];
    }
    const storedDataArray = JSON.parse(storedDataString);

    return storedDataArray;
}

const saveDataToLocalStorage = (id) => {
    const storedDataArray = getDataFromLocalStorage();
    const exist = storedDataArray.includes(id);
    if (!exist) {
        storedDataArray.push(id);
        const newString = JSON.stringify(storedDataArray);
        localStorage.setItem('donationPackagesId', newString);
    }
}

export { getDataFromLocalStorage, saveDataToLocalStorage }