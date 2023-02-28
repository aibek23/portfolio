import React, { useState, useEffect } from "react";
import Aos from 'aos';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { COLUMN_NAMES } from "./ItemTypes";
import Column from "./Column"
import MovableItem from "./MovableItem"
import { tasks } from "./ItemTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import victory from '../../mp3/victory.mp3';

let truue = true;
let once = true;
let n = 0;
export const DranNDrop = ({ props }) => {
    useEffect(() => {
        Aos.init({ duration: 2000, mirror: "false", once: true });
    }, []);
    const [play] = useSound(victory);
    const ItemTypes2 = (n) => {
        return tasks[n] === undefined ? tasks[0] : tasks[n];
    }
    const [items, setItems] = useState(tasks[0]);
    const checkName = items.filter((item) => item.column === "secondBoll");
    const imgURL = items.filter((item) => item.url)[0].url;
    const trueWords = items.filter((item) => item.trueWords)[0].trueWords;
    let truearre = trueWords.split([]);
    let mistakes = []
    let fullName = "";
    for (let i in checkName) {
        fullName += checkName[i].name;
        if (checkName[i].name === truearre[i]) {
            mistakes[i] = "green"
        } else { mistakes[i] = "red" }
    }

    if (once) {
        if (fullName === trueWords) {
            // fuun();
            play();
            truue = false;
            once = false;
            // toast.success(' Wow so easy!', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
            setTimeout(() => { truue = true; once = true; ++n; setItems(ItemTypes2(n)) }, 2000);


        }
    }
    const isMobile = window.innerWidth < 600;
    const moveCardHandler = (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];
        if (dragItem) {
            setItems((prevState) => {
                const coppiedStateArray = [...prevState];
                const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
                coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
                return coppiedStateArray;
            });
        }
    };
    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item) => (
                <MovableItem
                    items={items}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    currentColumnName={item.column}
                    setItems={setItems}
                    moveCardHandler={moveCardHandler}

                />
            ))

    };
    const { column__start, PROGRESS } = COLUMN_NAMES;
    return (<>
        <a className="btn btn-outline-danger mt-3 p-3 rounded-50 " href="#/portfolio" ><h4 className="font-weight-bolder">Back</h4></a>
        <div className="container" data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700">

            <div className="mt-2 mb-5">
                <div className='second-column text-center mb-2' >
                    <img src={imgURL} alt="" style={{ height: "200px" }} />

                </div>
                <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                    <Column title={PROGRESS} className={`column ${PROGRESS}`} words={trueWords} truue={truue} id={items.id} mistakes={mistakes}>
                        {returnItemsForColumn(PROGRESS)}
                    </Column>
                    <Column title={column__start} className={`column ${column__start}`} id={items.id}>
                        {returnItemsForColumn(column__start)}
                    </Column>
                </DndProvider>
            </div>
        </div>
    </>
    );
};

