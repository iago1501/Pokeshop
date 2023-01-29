export const split = (array: Iterable<any>, n: number) => {
    const [...arr] = array;
    const res = [];
    while (arr.length) {
        res.push(arr.splice(0, n));
    }
    return res;
};

export const capitalize = (s: unknown) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
