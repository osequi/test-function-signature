export interface TSimple {
  prop1?: string;
  prop2?: number[];
}

export const simple: TSimple = {
  prop1: null,
  prop2: null,
};

export function Simple1({ prop1, prop2 }: TSimple) {
  const numbers = prop2?.map((item) => item).join(",");
  return <p>{`${prop1}: ${numbers}`}</p>; // undefined, undefined
}

export function Simple2(props: TSimple) {
  const { prop1, prop2 } = props;
  const numbers = prop2?.map((item) => item).join(",");
  return <p>{`${prop1}: ${numbers}`}</p>; // undefined, undefined
}

export function Simple3({ prop1, prop2 }: TSimple) {
  const numbers = prop2?.map((item) => item).join(",");
  return { prop1, prop2 };
}

export function Simple4({ prop1, prop2 }: TSimple): TSimple {
  const numbers = prop2?.map((item) => item).join(",");
  return { prop1, prop2 };
}
