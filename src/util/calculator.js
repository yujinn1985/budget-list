export function calculatePercentage(salary, cost) {
    const percents = (cost / salary * 100).toFixed(2) + ' %';
    if (parseFloat(percents) > 100) return 'These expenses are over your salary';
    return percents;
}

export function calculatePercentsOfEachRecord(salary, records) {
    records.forEach(record => {
        record.percents = calculatePercentage(salary, record.cost);
    });

    return records.map(record => {
        return record.percents;
    });

}