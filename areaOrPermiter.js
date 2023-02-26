const areaOrPerimeter = function(l , w) {
   if(l===w) return l*w;
   return (l*2)+(w*2);
};

// Best soluction

const areaOrPerimeterr = (l , w) => l === w ? l*w : 2*(l+w);

console.log(areaOrPerimeter(10,6));