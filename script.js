const btn = document.getElementById('btn');
  let original = document.getElementById('box').outerHTML;//the entire element of the element whose id is box
  let replaced  = '<section id="box">Replaced content! 🎉</section>';

  btn.onclick = () => {
    const el = document.getElementById('box'); //find the one with the id 'box'
    // If current is original div, swap to section, which is what the replaced is;
    if (el.tagName.toLowerCase() === 'div') {
      el.outerHTML = replaced;//outerHTML is like cutting out the entire element (its tag + everything inside) and pasting a new element in its place.
    } else {
      el.outerHTML = original;
      // if the current one that has id box is a section, which means it has been replaced already, replace it with the original
    }
  };