export default function Filter(data, filteredValue) {
    let results = [];
    // eslint-disable-next-line array-callback-return
    data.filter(function (value) {
        if(value.skills.includes(filteredValue)) {
            results.push(value);
        }
    });
    return results
}