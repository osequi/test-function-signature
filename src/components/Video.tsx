import { defaultsDeep } from "lodash";

export interface TVideo {
  prop1: string;
  prop2: string;
}

export const video: TVideo = {
  prop1: null,
  prop2: null,
};

export function Video({ prop1, prop2 }: TVideo = video) {
  return null;
}

export function Video1({ prop1 = "prop1", prop2 = "prop2" }: TVideo) {
  return null;
}

export function Video3(props: TVideo) {
  const { prop1, prop2 } = defaultsDeep(props, video);
}
