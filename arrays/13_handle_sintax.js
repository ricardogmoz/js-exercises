function parseJSON(jsonString) {
  try {
    const result = JSON.parse(jsonString);
    console.log('Parsed JSON:', result);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('SyntaxError caught:', error.message);
    } else {
      console.log('Other error:', error.message);
    }
  }
}

parseJSON('{"name":"John","age":30}');

parseJSON('{"name": "John", "age": 30,,}');
