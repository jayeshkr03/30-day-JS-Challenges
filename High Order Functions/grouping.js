// Group items by reduce()

const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Potato', category: 'Vegetable' },
  { name: 'Banana', category: 'Fruit' },
];

const groupedItems =  items.reduce ( function(p,q) {
    const groupKey = items.category;
    if (!p[groupKey])
        { p[groupKey] = []};
    p[groupKey].push(items);
    return p;
}, {});

console.log(groupedItems);
