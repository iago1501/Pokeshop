export const split = (array: Iterable<any>, n: number) => {
    const [...arr] = array;
    const res = [];
    while (arr.length) {
        res.push(arr.splice(0, n));
    }
    return res;
};
