import Taskbar from "../Taskbar"


const Windows = () => {
    return (
        <div className="h-screen overflow-hidden">
            <div className="hidden lg:block">
                <img src="/img/xp.webp" alt="" />
            </div>

            <div className="lg:hidden">
                <img src="/img/iphone.webp" alt="" />
            </div>
            <Taskbar />
        </div>
    )
}

export default Windows