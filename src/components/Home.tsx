import { Simple1, Simple2 } from "./Simple";
import { Nested1, Nested2 } from "./Nested";

export function Home() {
  return (
    <ul>
      <li key={1}>
        Simple1: <Simple1 />
      </li>
      <li key={2}>
        Simple2: <Simple2 />
      </li>
      <li key={3}>
        Nested1: <Nested1 />
      </li>
      <li key={4}>
        Nested2: <Nested2 />
      </li>
    </ul>
  );
}
