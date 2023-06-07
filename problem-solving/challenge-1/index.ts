export const numbersFractionCalculator = (numbers: number[]): any => {

    let zeros = 0;
    let positives = 0;
    let negatives = 0;

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        if (element === 0) {
            zeros++;
        } else if (element > 0) {
            positives++;
        } else {
            negatives++;
        }
    }

    return {
        'zeros': calculate(numbers.length, zeros),
        'positives': calculate(numbers.length, positives),
        'negative': calculate(numbers.length, negatives),
    };
};

export const calculate = (total: number, qty: number): any => {
    return ( qty / total ).toFixed(6);
}
