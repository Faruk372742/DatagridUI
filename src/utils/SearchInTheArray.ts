type SearchInTheArrayProps = {
  fixedItems: { link: string; name: string; explanation: string }[];
  searchText: string;
};
export function SearchInTheArray({
  fixedItems,
  searchText,
}: SearchInTheArrayProps) {
  const filteredArray = fixedItems.filter(
    (element: { link: string; name: string; explanation: string }) => {
      return (
        (element.link === searchText ||
          element.name === searchText ||
          element.explanation === searchText) &&
        element.link !== "Sosyal Medya Linki"
      );
    }
  );

  if (filteredArray.length === 0) {
    const fetchedItems = localStorage.getItem("items");
    if (fetchedItems != null) {
      return JSON.parse(fetchedItems);
    }
    return [];
  }
  return filteredArray;
}
