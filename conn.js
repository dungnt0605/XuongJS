async function fetchProduct() {
  try {
    const response = await fetch(`http://localhost:3000/product`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}
async function fetchTree() {
  try {
    const response = await fetch(`http://localhost:3000/trees`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}


const dataArrayProduct = await fetchProduct();
const dataArrayTress = await fetchTree();
export {dataArrayProduct, dataArrayTress};
