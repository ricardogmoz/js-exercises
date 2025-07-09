function checkVariable() {
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('ReferenceError caught:', error.message);
    } else {
      console.log('Other error:', error.message);
    }
  }
}

checkVariable();