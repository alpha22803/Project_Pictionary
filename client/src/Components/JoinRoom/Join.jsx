import { useEffect } from 'react';
import "./Join.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Join() {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");

    const handleJoinRoom = () => {
        if (userName === "" || room === " ") {
            window.alert("Please fill all fields");
            return;
        }
    }

    useEffect(() => {
        localStorage.removeItem("userPresent");
    }, []);

    return (
        <div className='join_main'>
            <h1 className='joinHead' style={{ fontSize: "5rem" }}>Draw & Guess</h1>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div className='joinDiv'></div>
                <div style={{ position: 'relative', zIndex: 3, textAlign: "center", paddingTop: "3rem" }}>
                    <h1 style={{ fontSize: "40px" }}>Join chat</h1>
                    <input onChange={(event) => setUserName(event.target.value)} placeholder='Enter Name' type="text" className='joinInp' />
                    <br />
                    <br />
                    <input onChange={(event) => setRoom(event.target.value)} type="text" placeholder='Join a room' className='joinInp' />
                    <br />
                    <br />
                    <br />
                    <Link
                        className='joinBtn'
                        onClick={handleJoinRoom}
                        style={{
                            color: "black",
                            textDecoration: "none",
                            fontFamily: "Montserrat",
                        }} to={`/room?roomID=${room}&name=${userName}`}>Join Room</Link>
                </div>
            </div>
        </div>
    )
}
