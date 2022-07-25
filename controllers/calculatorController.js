const sum = (req, res) => {
    let nums = req.body.nums;
    let array = nums.split(' ');
    let sum = 0;
    array.forEach(num => {
        sum += +num;
    });
    res.status(200).json("sum = " + sum);
}

const sub = (req, res) => {
    let nums = req.body.nums;
    let array = nums.split(' ');
    let sub = 0;
    array.forEach(num => {
        sub -= +num;
    });
    res.status(200).json("subtraction = "+ sub);
}

const mul = (req, res) => {
    let nums = req.body.nums;
    let array = nums.split(' ');
    let mul = 1;
    array.forEach(num => {
        mul *= num;
    });
    res.status(200).json("multiplication = "+ mul);
}

export {
    sum,
    mul,
    sub
}