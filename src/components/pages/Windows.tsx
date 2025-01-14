import Taskbar from "../Taskbar"


const Windows = () => {
    return (
        <div className="h-screen overflow-hidden">
            <div className="hidden lg:block">
                <img src="/img/xp.jpg" alt="" />
            </div>

            <div className="lg:hidden">
                <img src="/img/iphone.jpg" alt="" />
            </div>
            <Taskbar />
        </div>
    )
}

export default Windows