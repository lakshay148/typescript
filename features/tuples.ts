const drink = {
  color: "blue",
  carbonated: true,
  sugar: 40,
};

//tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

//we can define tuples as type alias:
type Drink = [string, boolean, number];

//now this tuple can be used as :
const sprite: Drink = ["clear", true, 50];
