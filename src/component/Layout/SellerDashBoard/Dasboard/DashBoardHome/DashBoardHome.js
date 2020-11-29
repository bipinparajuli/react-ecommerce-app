import React from 'react'
import {useStateValue} from '../../../../../container/StateProvider'


const DashBoardHome = () => {
    const [{login}]=useStateValue();
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:"10%"}}>Dear {login.email}🦹‍♂️ Working on Seller DashBoardHome Page !!!</h1>
        </div>
    )
}

export default DashBoardHome
