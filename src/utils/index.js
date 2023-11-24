export const CALCULATE_SUB_TOTAL = (products) => {
    let total = 0;
    for (let c of products) {
        if(c.selected) {
            total += c.qty * c.price
        }
    }
    return total;
};