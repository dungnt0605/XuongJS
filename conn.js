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
async function fetchTreeNew() {
  try {
    const response = await fetch(`http://localhost:3000/treesNew`);
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
async function fetchTreeTop() {
  try {
    const response = await fetch(`http://localhost:3000/treesTop`);
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
const dataArrayTressNew = await fetchTreeNew();
const dataArrayTressTop = await fetchTreeTop();
export {dataArrayProduct, dataArrayTressNew , dataArrayTressTop};
