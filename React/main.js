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
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

/*
Challenge 3 of 3: Refactor a series of ? : to if and variables 
This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.
*/
function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}