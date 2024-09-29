import Item2 from "./Item2";

const Item1 = ({ items }) => {
  return (
    <>
      {items.map((i) => (
        <Item2 key={i.workname} name={i.workname} dat={i.workdate} />
      ))}
    </>
  );
};

export default Item1;
