export function ChatEnd({chat,time}) {

    return <div className="d-flex flex-row justify-content-end">
        <div>
            <p className="small p-2 ms-sm-2 me-md-3 me-10 ms-md-3 ms-lg-5 mb-1 text-white text-wrap rounded-3 bg-primary">{chat}</p>
            <p className="small me-3 mb-3 rounded-3 text-muted text-wrap">{time}</p>
        </div>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1" style={{ width: "45px", height: "100%" }} />
    </div>
}