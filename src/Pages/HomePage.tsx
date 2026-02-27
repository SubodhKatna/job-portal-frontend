import Header from "../Components/Header/Header";
import DreamJob from "../Components/LandingPage/DreamJob";

const HomePage = () => {
    return (
        // Page shell: global background + top navigation + hero section.
        <div className={"min-h-[100vh] bg-mine-shaft-900 font-[poppins ]"}>
            <Header/>
            <DreamJob/>
        </div>
    )
}

export default HomePage
