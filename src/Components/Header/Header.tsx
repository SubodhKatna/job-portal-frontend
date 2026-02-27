import {IconAnchor, IconBell, IconSettings} from "@tabler/icons-react";
import {Avatar, Indicator} from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        // Main header with brand, navigation links, and user action icons.
        <div className="w-full bg-mine-shaft-90 0 px-6 text-white h-28 flex justify-between items-center">
            <div className="flex gap-3 items-center text-bright-sun-400">
                <IconAnchor className="h-10 w-10" stroke={1.25}/>
                <div className="text-3xl font-semibold">iJobs</div>
            </div>
            <div className="flex gap-3">
                <NavLinks/>
            </div>
            <div className={"flex gap-5 items-center"}>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div>Subodh</div>
                        <Avatar src={"avatar.png"} className="h-10 w-10"/>
                    </div>
                </div>
                <div className="bg-mine-shaft-800 p-1.5 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-800 p-1.5 rounded-full">
                    {/* Processing indicator is used to show unread notifications. */}
                    <Indicator color={"brightSunn.9"} size={9} processing>
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </div>
        </div>

    )
}
export default Header;
