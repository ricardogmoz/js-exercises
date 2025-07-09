function testErrors(type) {
  try {
    if (type === "type") {
      throw new TypeError("This is a TypeError!");
    } else if (type === "range") {
      throw new RangeError("This is a RangeError!");
    } else {
      throw new Error("Generic Error!");
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Caught a TypeError: " + error.message);
    } else if (error instanceof RangeError) {
      console.log("Caught a RangeError: " + error.message);
    } else {
      console.log("Caught a generic Error: " + error.message);
    }
  }
}

testErrors("type");   
testErrors("range");  
testErrors("other"); 
