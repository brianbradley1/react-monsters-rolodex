function CardList({ filteredMonsters }) {
  return (
    <div>
      {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default CardList;
