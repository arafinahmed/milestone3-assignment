//https://github.com/arafinahmed/milestone3-assignment


//A function that will convert kilometer to meter
//we know that 1 kilometer = 1000 meter
function kilometerToMeter(kilometer) {
    if (typeof kilometer == "number") {
        if (kilometer >= 0) {
            return kilometer * 1000;
        }
        return "Distance can not be negative";
    }
    return "Invalid input";
}


//Watch Price = 50, phone price = 100 and laptop price = 500
//we will calculate the total cost of the three product
//input is the numbers of watch, phone and laptop
function budgetCalculator(watch, phone, laptop) {
    if (typeof watch == "number" && typeof phone == "number" && typeof laptop == "number") {
        if (watch >= 0 && phone >= 0 && laptop >= 0) {
            var cost = watch * 50 + phone * 100 + laptop * 500;
            return cost;
        }
        return "Item can not be negative";
    }
    return "Invalid input";
}


//Hotel cost day 1 to day 10 -> 100 per day
//Hotel cost day 11 to day 20 -> 80 per day
//Hotel cost from day 21 -> 50 per day
//input is the numbers of day
function hotelCost(day) {
    if (typeof day == "number") {
        if (day > 0) {
            var firstTen = day;
            var secondTen = 0;
            var extraDay = 0;
            if (firstTen > 10) {
                firstTen = 10;
            }
            day = day - firstTen;
            secondTen = day;
            if (secondTen > 10) {
                secondTen = 10;
            }
            day = day - secondTen;
            extraDay = day;
            var totalCost = firstTen * 100 + secondTen * 80 + extraDay * 50;
            return totalCost;
        }
        return "Day can not be zero or negative";
    }
    return "Invalid Input";

}

function megaFriend(friend){
    if(typeof friend == "object"){
        if(friend.length == 0){
            return "Array is empty";
        }
        var max = 0;
        var largestName = "";
        for(var i=0; i<friend.length; i++){
            if(friend[i].length > max){
                largestName = friend[i];
                max = friend[i].length;
            }
        }
        return largestName;
    }
    return "Input is not an array";
}

console.log(kilometerToMeter())
console.log(hotelCost(-20))
var arafin = "ahmed";
console.log(typeof 12.8)
console.log(arafin[0])

console.log(typeof [0, "a", 2]);
console.log(megaFriend([]));
console.log(budgetCalculator(5,-1,1));