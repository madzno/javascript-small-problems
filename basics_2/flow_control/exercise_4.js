function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// this code will log 'Product2', 'Prodcut3', 'Product not found!' to the
// console because we forgot our break statements and therefore the code falls-through
// and returns multiple values
