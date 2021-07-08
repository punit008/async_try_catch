async function errorhandling() {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}

async function main() {
  const [data, error] = await errorhandling();
  const [data2, error2] = await errorhandling();
 }
