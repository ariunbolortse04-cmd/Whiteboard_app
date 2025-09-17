import { useState } from "react";
import { Tldraw, TLStore, createTLStore } from "@tldraw/tldraw";
import '@tldraw/tldraw/tldraw.css'

const Whiteboard = () =>{
    const [store] = useState<TLStore>(()=> createTLStore())

    return (
        <div className="w-screen h-screen">
            <Tldraw store = {store}/>
        </div>
    )
}

export default Whiteboard