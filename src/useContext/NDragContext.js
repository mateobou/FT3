import React, { useEffect, useState } from "react";

export const DragNDropContext = React.createContext();

const DragNDropProvider = function ({ children }) {
  const [dragItem, setDragItem] = useState();//UseState 1 : Quel élément est entrain d'être drag ?
  const [items, setItems] = useState([]);//Changement de l'etat de la zone de drop

  //UseState 1 : Quel élément est entrain d'être drag ?
  const addDragItem = (NewDragItem)=>setDragItem(NewDragItem);
  const RemoveDragItem = (NewDragItem)=>setDragItem();

  //Changement de l'etat de la zone de drop
  
  const addItem = (dragItem) => {
    //const [itemType, itemName, data] = itemName.split(" - ");
    setItems([...items, dragItem]);
    RemoveDragItem();
  };
  let [DroppedItems, updateDroppedItems] = useState([]);

  return (
    <DragNDropContext.Provider
      value={{ items, addItem  ,addDragItem,dragItem,DroppedItems,setItems,updateDroppedItems}}
    >
      {children}
    </DragNDropContext.Provider>
  );
}

export default DragNDropProvider;