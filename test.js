const SORTED_ARRAY = [1, 5, 8, 45, 98, 101, 154, 155, 156, 200];
const KEY = 178;

const binarySearch = (arr, key, start, end) => {
    const middle = Math.round((end - start) / 2) + start;
    if (key === arr[middle])
        return `Искомое значение: ${key}; Индекс: ${middle}`;
    if (end - start === 1) {
        if (Math.abs(key - arr[end]) > Math.abs(key - arr[start]))
            return `Искомое значение: ${key}; Ближайшее значение: ${arr[start]}; Индекс: ${start}`;
        return `Искомое значение: ${key}; Ближайшее значение: ${arr[end]}; Индекс: ${end}`;
    }
    if (key > arr[middle])
        return binarySearch(arr, key, middle, end);
    else return binarySearch(arr, key, start, middle);
};

const result = binarySearch(SORTED_ARRAY, KEY, 0, SORTED_ARRAY.length);

console.log(result);