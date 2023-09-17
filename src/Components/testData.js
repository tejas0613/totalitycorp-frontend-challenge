const api_url = 'https://dummyjson.com/products';

async function getapi(url){
    const response = await fetch(url);
    const testData = await response.json();
    console.log(testData);
    return testData;
}

const testData = getapi(api_url);



// const testData = fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// export { testData };
