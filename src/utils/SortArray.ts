type AccountObject = {
  link: string;
  name: string;
  explanation: string;
};
type SortArrayProps = {
  arr: AccountObject[];
  isLinksSorted: boolean;
  isNamesSorted: boolean;
};
export function SortArray({
  arr,
  isLinksSorted,
  isNamesSorted,
}: SortArrayProps) {
  arr = arr.sort((a, b) => {
    if (!isLinksSorted && !isNamesSorted) {
      return 0;
    }
    if (a.link === "" && b.link === "") return 0;
    if (a.link === "") return 1;
    if (b.link === "") return -1;
    if (isLinksSorted && !isNamesSorted) {
      if (a.link < b.link) return -1;
      if (a.link > b.link) return 1;
      return 0;
    }
    if (!isLinksSorted && isNamesSorted) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    if (a.link < b.link) return -1;
    if (a.link > b.link) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return arr;
}
