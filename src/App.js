import './App.css';
import {useEffect, useState} from 'react';
import './disign.css';
import ObjectInfo from "./components/ObjectInfo";

function App() {

    const [leftarr, setlarr] = useState([]);
    const [rightarr, setrarr] = useState([]);
    const [ backgroundColor, setBackgroundColor ] = useState('#50e3e3');

    useEffect(() => {
        const dataJSON = require('./MOCK_DATA.json');
        setlarr(dataJSON);
        console.log(leftarr.length);
    }, [])

    useEffect(() => {
        if(rightarr.length >= 10){
            setBackgroundColor('#db6fe8');
        }else{
            setBackgroundColor('#50e3e3');
        }

    }, [rightarr])

    function onItemPress({side, id, gender}) {
        if (side === 'Left') {
            if (conditionCheck(gender)) {
                const from = {arr: leftarr, setArr: setlarr};
                const to = {arr: rightarr, setArr: setrarr};
                moveElement({id, from, to});
            } else {
                alert('Max 5 male and 5 female on right side');
            }
        } else {
            const from = {arr: rightarr, setArr: setrarr};
            const to = {arr: leftarr, setArr: setlarr};
            moveElement({id, from, to});
        }
    }

    function conditionCheck(gender) {
        let checkState = true;
        if (gender === 'Male' || gender === 'Female') {
            const checkArr = rightarr.filter(item => item.gender === gender);
            if(checkArr.length===5){checkState = false}
        }
        return checkState
    }

    function moveElement({id,from,to}){
        let pressedItem;
        const accarr = from.arr.filter(element => {
            if (element.id === id) {
                pressedItem = element;
            } else {
                return element;
            }
        })
        from.setArr(accarr.sort((a,b) => a.id - b.id));
        to.setArr(to.arr.concat(pressedItem).sort((a,b) => a.id - b.id));
    }

    return <div className="App">
        <ul className="List" id="LList">
            {leftarr.map(item=> <ObjectInfo arrangement={item} onItemPress={onItemPress} side='Left' />)}
        </ul>
        <ul className="List" id="RList">
            {rightarr.map(item=> <ObjectInfo arrangement={item} onItemPress={onItemPress} side='Right' style={{'background':backgroundColor}}/>)}
        </ul>
    </div>
}

export default App;
