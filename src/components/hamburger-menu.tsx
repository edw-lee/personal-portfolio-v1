import { RouteContext } from "@/pages";
import { faBars, faCross, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function HamburgerMenu() {
    const { currRoute, setCurrRoute } = useContext(RouteContext);
    const [isScrollUp, setIsScrollUp] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        {
            href: "about",
            label: "About"
        }, {
            href: "experience",
            label: "Experience"
        }, {
            href: "projects",
            label: "Projects"
        }
    ];

    useEffect(() => {
        let prevScrollY = 0;
        window.addEventListener("scroll", () => {
            setIsScrollUp(window.scrollY - prevScrollY < 0);
            prevScrollY = window.scrollY;
        });
    }, []);

    useEffect(() => {
        if (!isScrollUp) {
            setIsOpen(false);
        }
    }, [isScrollUp])

    return (
        <nav className={classNames(
            'sticky top-0 flex flex-col md:hidden transition-all duration-500 z-10',
            {
                '-top-24': !isScrollUp,
            }
        )}>
            <div className="absolute top-5 right-5 flex flex-col items-end">
                <FontAwesomeIcon
                    icon={!isOpen ? faBars : faTimes}
                    className="text-tertiary w-min mb-3 bg-surface p-2"
                    fontSize={30}
                    onClick={() => setIsOpen(!isOpen)} />

                <div className={classNames(
                    "container flex flex-col w-min gap-3 text-tertiary transition-opacity items-end",
                    {
                        "opacity-0": !isOpen
                    }
                )}>
                    {
                        routes.map((route, idx) => {
                            const isActive = route.href == currRoute;

                            return (
                                <Link key={idx} className={classNames(
                                    'font-bold text-2xl select-none bg-surface w-min p-2', {
                                    'text-primary': isActive,
                                    'text-tertiary hover:text-secondary': !isActive
                                })} onClick={() => setCurrRoute(route.href)} href={`#${route.href}`}
                                    scroll={false}>
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    );
}