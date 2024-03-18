import Hero from "./Hero";
const person = () => {
  const heros = {
    hero1: "ayzman",
    hero2: "gouraman",
  };
  const arr = ["apple", "ball", "cat", "dog", 25, "mobile"];
  return (
    <>
      {/* <div>
        <h1>Hello ayz</h1>
        <h3>My name is {heros.hero2} &#123; &#125; and i am learn react</h3>
        <h3>My name is {heros.hero1} and i already know react</h3>
      </div>
      <div>
        <h1>Hello ayz</h1>
        <h3>My name is {heros.hero2} &#123; &#125; and i am learn react</h3>
        <h3>My name is {heros.hero1} and i already know react</h3>
      </div> */}
      <div>
        {arr.map((d) => (
          <h1> {d} </h1>
        ))}
      </div>
      <h1>This data is coming from hero componets</h1>
<Hero/>
    </>
    
    );
};

export default person;
