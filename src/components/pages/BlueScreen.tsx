import { NavLink } from "react-router"
const BlueScreen = () => {
    return (
        <div id="bluescreen" className="bg-[#000887] min-h-screen">
            <div className="font-[Lucida] text-[13.4px] lg:text-[1.5rem]">
                <p>
                    A problem has been detected and Windows has been shut down to prevent damage <br />to your computer.
                </p>
                <br />
                <h2>UNMOUNTABLE_BOOT_VOLUME</h2>
                <br />
                <p>If this is the first time you've seen this Stop error screen, restart your computer, If this screen appears again, follow <br />these steps:</p>
                <br />
                <p>Check to make sure any new hardware or software is properly installed. </p>
                <p>If this is a new installation, ask your hardware or software manufacturer <br />for any Windows updates you might need.</p>
                <p>If problems continue, disable or remove any newly installed hardware <br />or software. Disable BIOS memory options such as caching or shadowing.</p>
                <p> If you need to use Safe Mode to remove or disable components, restart <br />your computer, press F8 to select Advanced Startup Options, and then <br />select Safe Mode.</p>
                <br />
                <p>Technical Information:</p>
                <br />
                <p>*** STOP: 0x0000008E(0xC0000005, 0x8062C234, 0xA8CCF8B4, 0x00000000)</p>
            </div>
            <div className="mt-[2rem] text-[1.2rem]">
                <NavLink to="/" className="">Restart your device</NavLink>
            </div>
        </div>
    )
}

export default BlueScreen