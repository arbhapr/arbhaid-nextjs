import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaGitlab } from "react-icons/fa";
const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/arbhapr",
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://linkedin.com/in/arbhapr",
    },
    {
        icon: <FaTwitter />,
        path: "https://twitter.com/arbhapr",
    },
    {
        icon: <FaGitlab />,
        path: "https://gitlab.com/arbhapr",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
