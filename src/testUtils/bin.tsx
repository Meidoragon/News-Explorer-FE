type FilterCallback<T> = (item: T, idx?: number, arr?: T[]) => boolean;

/*
 * Filters an array of elements by React prop
 */
export default function filterElementsByProp<T>(
  elements: HTMLElement[],
  prop: string,
  callback: FilterCallback<T>
): HTMLElement[] {
  return elements.filter((element) => {
    const keys = Object.keys(element);
    const key = keys.find((k) => k.includes('Prop'));
    if (key) {
      const props = element[key as keyof HTMLElement];
      // @ts-expect-error: props should never be undefined due to how it acquired
      return callback(props[prop]);
    }
    return false;
  });
}
