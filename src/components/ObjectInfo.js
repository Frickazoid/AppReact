function ObjectInfo({arrangement, onItemPress, side, style}) {

    function onPress({idbtn, gender }) {
        onItemPress({side, id:idbtn, gender:gender});
    }

    return (
        <li className={`user-info--${side}`} style={style}>
            <div className="flex-container">
                <div className="flex-info-container">
                    <div className="user-name">
                        {arrangement.id}. {arrangement.last_name} {arrangement.first_name}
                    </div>
                    <div className="user-email">
                        Email: {arrangement.email}
                    </div>
                    <div className="user-gender">
                        Gender: {arrangement.gender}
                    </div>
                    <div className="user-city">
                        City: {arrangement.city}
                    </div>
                </div>
                <div className="flex-btn-container">
                    <button className="move-btn"
                            onClick={() => onPress({idbtn: arrangement.id, gender: arrangement.gender})}>
                        Move
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ObjectInfo;