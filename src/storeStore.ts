import { map } from "nanostores";

export interface StoreItem {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}
export const storeItems = map<Record<string, StoreItem>>({});
