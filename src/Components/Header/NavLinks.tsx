import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavLinks = () => {
    // Single source of truth for top navigation labels and routes.
    const links = [
        {title: "Find Jobs", url: "/find-jobs"},
        {title: "Find Talent", url: "/find-talent"},
        {title: "Upload Job", url: "/upload-job"},
        {title: "About Us", url: "/about-us"},
    ];

    const location = useLocation();

    return (
        <div className="flex items-center gap-5">
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        // Active route gets highlight color and bottom border.
                        location.pathname === link.url
                            ? "text-bright-sun-400 border-bright-sun-400"
                            : "text-mine-shaft-300 border-transparent"
                    } border-b-[3px] hover:text-bright-sun-400 transition-colors duration-300 flex items-center h-full`}
                >
                    <Link to={link.url}>
                        {link.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
