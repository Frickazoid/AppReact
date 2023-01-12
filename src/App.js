import './App.css';
import {useEffect, useState} from 'react';
import './disign.css';
import ObjectInfo from "./components/ObjectInfo";

function App() {

    const [leftArr, setLArr] = useState([]);
    const [rightArr, setRArr] = useState([]);
    const [ backgroundColor, setBackgroundColor ] = useState('#50e3e3');

    useEffect(() => {
        const dataJSON = require('./MOCK_DATA.json');
        setLArr(dataJSON);
        //console.log(leftArr.length);
    }, [])

    useEffect(() => {
        if(rightArr.length >= 10){
            setBackgroundColor('#db6fe8');
        }else{
            setBackgroundColor('#50e3e3');
        }

    }, [rightArr])

    function onItemPress({side, id, gender}) {
        if (side === 'left') {
            if (conditionCheck(gender)) {
                const from = {arr: leftArr, setArr: setLArr};
                const to = {arr: rightArr, setArr: setRArr};
                moveElement({id, from, to});
            } else {
                //in this case we have gender only male/female
                if (gender === 'Male') {
                    alert('Max 5 male on right side')
                } else {
                    alert('Max 5 female on right side')
                }
            }
        } else {
            const from = {arr: rightArr, setArr: setRArr};
            const to = {arr: leftArr, setArr: setLArr};
            moveElement({id, from, to});
        }
    }

    function conditionCheck(gender) {
        if (gender === 'Male' || gender === 'Female') {
            const checkArr = rightArr.filter(item => item.gender === gender);
            return checkArr.length !== 5
        }
        return true
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
        <ul className="list" id="LList">
            {leftArr.map(item=> <ObjectInfo arrangement={item} onItemPress={onItemPress} side='left' />)}
        </ul>
        <ul className="list" id="RList">
            {rightArr.map(item=> <ObjectInfo arrangement={item} onItemPress={onItemPress} side='right' style={{'background':backgroundColor}}/>)}
        </ul>
    </div>
}

export default App;
