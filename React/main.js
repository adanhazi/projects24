/*
Challenge 1 of 3: Show an icon for incomplete items with ? : 
Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.
*/
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✅' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

/*
Challenge 2 of 3: Show the item importance with && 
In this example, each Item receives a numerical importance prop. Use the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

Space suit (Importance: 9)
Helmet with a golden leaf
Photo of Tam (Importance: 6)
Don’t forget to add a space between the two labels!
*/