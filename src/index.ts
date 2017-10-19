/** A type representing an individual item or an array of items. */
export type OneOrMore<T> = T | T[];

/** A type representing 0 or more of an item. */
export type NoneOrMore<T> = OneOrMore<T> | undefined;

/** Makes sure a NoneOrMore<T> is a T[] */
export const makeArray = <T>(item: NoneOrMore<T>): T[] => {
    if (Array.isArray(item)) return item;
    if(item !== undefined) return [item];
    return [];
}
