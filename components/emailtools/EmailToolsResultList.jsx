import ResultCard from '../cards/ResultCard'
export default function EmailToolsResultList(items) {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.index} className="">
          <ResultCard text={item.text} />
        </li>
      ))}
    </ul>
  );
}