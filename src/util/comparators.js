export function sortRecordsByName(records, order) {
    if (order) {
        records.sort(compareByNameAsc);
    } else {
        records.sort(compareByNameDesc);
    }
    return records;
}

export function sortRecordsByCost(records, order) {
    if (order) {
        records.sort(compareByCostAsc);
    } else {
        records.sort(compareByCostDesc);
    }
    return records;
}

export function sortRecordsByPercents(records, order) {
    if (order) {
        records.sort(compareByPercentsAsc);
    } else {
        records.sort(compareByPercentsDesc);
    }
    return records;
}

export function sortRecordsByGroup(records, order) {
    if (order) {
        records.sort(compareByGroupAsc);
    } else {
        records.sort(compareByGroupDesc);
    }
    return records;
}

function compareByNameAsc(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
}

function compareByNameDesc(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
}

function compareByCostAsc(a, b) {
    if (a.cost > b.cost) return 1;
    if (a.cost < b.cost) return -1;
    return 0;
}

function compareByCostDesc(a, b) {
    if (a.cost > b.cost) return -1;
    if (a.cost < b.cost) return 1;
    return 0;
}

function compareByPercentsAsc(a, b) {
    if (isNaN(parseFloat(a.percents))) {
        return 1;
    }
    if (parseFloat(a.percents) > parseFloat(b.percents)) return 1;
    if (parseFloat(a.percents) < parseFloat(b.percents)) return -1;
    return 0;

}

function compareByPercentsDesc(a, b) {
    if (isNaN(parseFloat(a.percents))) {
        return -1;
    }
    if (parseFloat(a.percents) > parseFloat(b.percents)) return -1;
    if (parseFloat(a.percents) < parseFloat(b.percents)) return 1;
    return 0;

}

function compareByGroupAsc(a, b) {
    const groupA = a.group.toUpperCase();
    const groupB = b.group.toUpperCase();

    if (groupA > groupB) return 1;
    if (groupA < groupB) return -1;
    return 0;
}

function compareByGroupDesc(a, b) {
    const groupA = a.group.toUpperCase();
    const groupB = b.group.toUpperCase();

    if (groupA > groupB) return -1;
    if (groupA < groupB) return 1;
    return 0;
}