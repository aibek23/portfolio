import React from "react";
import { useDrop } from "react-dnd";
const Column = ({ children, className, title, words, truue, id, mistakes }) => {

    const cell = [];
    let gridFr = "";
    let gridW = 0;
    let iter = 0;
    for (let a in words) {
        cell[a] = mistakes[a];
        gridFr += " 1fr";
        iter++;
        gridW += 110
    };
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "Our first type",
        drop: () => ({ name: title, idColumn: id }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),

        }),


        canDrop: (item) => {

            let canDropProg = item.currentColumnName;

            return (
                canDropProg
            );

        },
    });

    const getBackgroundColor = () => {
        if (isOver) {
            if (canDrop) {
                return "rgb(188,251,255)";
            } else if (!canDrop) {
                return "rgb(255,188,188)";
            }
        } else {
            return "";
        }
    };

    const getBackgroundColorItem = () => {
        if (!isOver) {
            if (canDrop) {
                return "#422CBDFF)";
            } else if (!canDrop) {
                return "#422CBDFF)";
            }
        } else {
            return "";
        }
    };
    // const gridFr = (n) => {
    //     let a = n.map((name) => { name })
    //     return a
    // }
    // gridFr(cell)

    const truuColor = (e) => {
        if (e === 330) {
            return "red"
        }
    }

    if (title === "secondBoll") {
        return (
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <div className={`secondBoll_item ${truue ? " " : "animbg"}`} style={{ backgroundColor: getBackgroundColor(), gridTemplateColumns: `${gridFr}` }}>
                    {cell.map(function (name) {
                        return <div style={{ backgroundColor: name }}></div>;
                    })}
                </div>
                <div ref={drop}
                    className={className}
                    style={{ gridTemplateColumns: `${gridFr}`, width: `${gridW}px` }}
                >
                    {cell.map(function (name) {
                        return <div style={{ backgroundColor: getBackgroundColorItem() }}> </div>;
                    })}
                    {children}
                    {canDrop === "firstBoll" ? <div className="movable-item" style={{ opacity: '0.8' }} >
                    </div> : ""}

                </div>
            </div>
        );
    } else {
        return (
            <div
                ref={drop}
                className={className}
                style={{ backgroundColor: getBackgroundColor() }}

            >

                {children}

            </div>
        );
    }
};


export default Column;