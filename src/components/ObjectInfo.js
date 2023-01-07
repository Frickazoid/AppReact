function ObjectInfo({arrangement, onItemPress, side, style}) {

    function onPress({idbtn, gender:gender }) {
        onItemPress({side, id:idbtn, gender:gender});
    }

    return (
        <li className={'UserInfo'+side} style={style}>
            <div className="Flex-container">
                <div className="Flex-info-container">
                    <div className="UserFName">
                        {arrangement.id}. {arrangement.last_name} {arrangement.first_name}
                    </div>
                    <div className="UserEmail">
                        Email: {arrangement.email}
                    </div>
                    <div className="UserGender">
                        Gender: {arrangement.gender}
                    </div>
                    <div className="UserCity">
                        City: {arrangement.city}
                    </div>
                </div>
                <div className="Flex-btn-container">
                    <button className="MoveBtn"
                            onClick={() => onPress({idbtn: arrangement.id, gender: arrangement.gender})}>
                        Move
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ObjectInfo;