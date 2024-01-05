import { useState } from "react"

export function CommentForm({loading,error,onSubmit,autoFocus=false,initialValue=""}){
    const [message,setmessage]=useState(initialValue);
    function handlesubmit(e){
        e.preventDefault();
        onSubmit(message)
        .then(()=>setmessage(""));

    }
    return <form onSubmit={handlesubmit}>
        <div className="comment-form-row">
            <textarea autoFocus={autoFocus} value={message} className="message-input" onChange={e=>setmessage(e.target.value)}/>
            <button className="btn" type="submit" disabled={loading}>
                {loading?"Loading...":"Post"}
                </button>
        </div>
        <div className="error-msg">{error}</div>
    </form>
}