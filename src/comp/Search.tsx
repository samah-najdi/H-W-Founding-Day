



 import React from 'react'
// // import { CUIAutoComplete } from 'chakra-ui-autocomplete'


// export interface Item {
//   label: string;
//   value: string;
// }
// const countries = [
//   { value: "ghana", label: "Ghana" },
//   { value: "nigeria", label: "Nigeria" },
//   { value: "kenya", label: "Kenya" },
//   { value: "southAfrica", label: "South Africa" },
//   { value: "unitedStates", label: "United States" },
//   { value: "canada", label: "Canada" },
//   { value: "germany", label: "Germany" }
// ];

// export default function Search() {
//   const [pickerItems, setPickerItems] = React.useState(countries);
//   const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

//   const handleCreateItem = (item: Item) => {
//     setPickerItems((curr) => [...curr, item]);
//     setSelectedItems((curr) => [...curr, item]);
//   };

//   const handleSelectedItemsChange = (selectedItems?: Item[]) => {
//     if (selectedItems) {
//       setSelectedItems(selectedItems);
//     }
//   };

//   return (
//         <CUIAutoComplete
//           label="Choose preferred work locations"
//           placeholder="Type a Country"
//           onCreateItem={handleCreateItem}
//           items={pickerItems}
//           selectedItems={selectedItems}
//           onSelectedItemsChange={(changes: { selectedItems: Item[] | undefined; }) =>
//             handleSelectedItemsChange(changes.selectedItems)
//           }
//         />
//   );
// }
