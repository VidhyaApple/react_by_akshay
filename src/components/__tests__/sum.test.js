import sum from "../sum"


test("just a string",() => {

    const result = sum(3,4);

    expect(result).toBe(7) 

});