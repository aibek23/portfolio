import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { COLUMN_NAMES } from "./ItemTypes";
const MovableItem = ({
    name,
    items,
    currentColumnName,
    setItems,
    id
}) => {
    items.sort(function (a, b) {
        if (a.column > b.column) {
            return 1;
        }
        if (a.column < b.column) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    }).reverse();
    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {
            return prevState.map((e) => {
                return {
                    ...e,
                    column: e.id === currentItem.id ? columnName : e.column,



                };
            });
        });
    };

    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
        type: "Our first type",

        item: { name, currentColumnName, id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                const { id, name } = dropResult;
                const { column__start, PROGRESS } = COLUMN_NAMES;
                switch (id, name) {
                    case PROGRESS:
                        changeItemColumn(item, PROGRESS);
                        break;
                    case column__start:
                        changeItemColumn(item, column__start);
                        break;
                    default:
                        break;
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(ref);
    if (isDragging) {
        return <div className="movable-item"  > {name} </div>
    } else {
        return <div ref={ref} className="movable-item" >
            {name}
        </div >
    }


};
export default MovableItem;