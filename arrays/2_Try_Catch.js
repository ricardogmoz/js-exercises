try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError: Tried to access a property on undefined object.");
  } else {
    throw error;
  }
}