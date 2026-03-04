const fruitsPrice: {
  readonly apple: number; //only read key

  orange?: number;
  banana: number;

  [key: string]: number; //generic use
} = {
  apple: 5,
  banana: 6,
  // orange: 3,
};

// fruitsPrice.apple = 4;
fruitsPrice.kiwi = 7;

console.log(fruitsPrice);
