import {Avatar, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const DreamJob = () => {
    return (
        // Hero section split into marketing copy (left) and visual highlights (right).
        <div className="flex items-center px-20">
            <div className="flex flex-col w-[45%]">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find your <span>dream job</span> with us
                </div>
                <div className="text-lg text-mine-shaft-200">
                    Good life begins with a good company. Start explore thousands of jobs in one place.
                </div>
                <div className={'flex gap-3 mt-5'}>
                    {/* Inputs are currently presentational; they can be wired to search state later. */}
                    <TextInput variant={"unstyled"}
                               className={"bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"}
                               label={"Job Title"} placeholder={"Software Engineer"}/>
                    <TextInput variant={"unstyled"}
                               className={"bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"}
                               label={"Job Type"} placeholder={"Full-time"}/>
                    <div
                        className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg px-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className={"h-[85%] w-[85%]"}/>
                    </div>
                </div>
            </div>

            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy.png" alt="A boy"/>
                    {/* Social proof card over laid on the hero image. */}
                    <div
                        className="absolute -right-10 w-fit border-bright-sun-400 top-[50%] border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">
                            10k+ got job here
                        </div>
                        <Avatar.Group>
                            <Avatar src="image.png"/>
                            <Avatar src="avatar-2.png"/>
                            <Avatar src="avatar-3.png"/>
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    {/* Featured job card overlay with brand logo. */}
                    <div
                        className="absolute -right-50 w-fit border-bright-sun-400 top-[30%] border rounded-lg p-2 backdrop-blur-md flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-12 h-12 p-1 bg-mine-shaft-900 rounded-xl">
                                <img src="/google.png" alt="google logo"/>
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 day ago</span>
                            <span>120 Application</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob;
