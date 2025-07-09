function demoTryCatchFinally() {
  try {
    console.log("Trying to execute risky code...");

    // Forzamos un error
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Division by zero detected!");
    }

    console.log("This line will not execute if error thrown above");
  } catch (error) {
    console.log("Caught an error: " + error.message);
  } finally {
    console.log("Finally block: This code always runs (cleanup, closing connections, etc.)");
  }
}

// Ejecutar
demoTryCatchFinally();
