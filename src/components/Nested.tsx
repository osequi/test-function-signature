export interface TNested {
  prop1?: {
    prop1a: string;
  };
  prop2?: {
    prop2a: number[];
  };
}

export const nested: TNested = {
  prop1: null,
  prop2: null,
};

export function Nested1({ prop1, prop2 }: TNested) {
  const text = prop1?.prop1a;
  const numbers = prop2?.prop2a?.map((item) => item).join(",");
  return <p>{`${text}: ${numbers}`}</p>; // undefined, undefined
}

export function Nested2(props: TNested) {
  const { prop1, prop2 } = props;

  /**
   * Unhandled Runtime Error
   * TypeError: prop1 is undefined
   */
  const { prop1a } = prop1;
  const { prop2a } = prop2;
  const numbers = prop2a?.map((item) => item).join(",");
  return <p>{`${prop1a}: ${numbers}`}</p>; // undefined, undefined
}
