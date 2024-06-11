import React from 'react'
import ClientRightInfo from '../clientrightinfo'
import ServerRightInfoSub from '../serverrightInfoSub'

const RigthColumn = () => {
    return (
        <div className="rightcolumn">
            <div className="card">
                <h2>About Me</h2>
                <div className="fakeimg" style={{ height: 100 }}>Image</div>
                <ClientRightInfo num={3} >
                    <ServerRightInfoSub />
                </ClientRightInfo>

            </div>
            <div className="card">
                <h3>Popular Post</h3>
                <div className="fakeimg"><p>Image</p></div>
                <div className="fakeimg"><p>Image</p></div>
                <div className="fakeimg"><p>Image</p></div>
            </div>
            <div className="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
            </div>
        </div>

    )
}

export default RigthColumn