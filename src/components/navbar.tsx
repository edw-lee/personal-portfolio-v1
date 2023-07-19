import { RouteContext } from "@/pages";
import classNames from "classnames";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);
    const [isScrollUp, setIsScrollUp] = useState(false);
    const { currRoute, setCurrRoute } = useContext(RouteContext);

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
            setScrollY(window.scrollY);
            prevScrollY = window.scrollY;
        });
    }, []);

    return (
        <nav className={classNames(
            'sticky top-0 hidden md:block py-5 transition-all duration-500 z-10',
            {
                '-top-20': !isScrollUp,
                'bg-surface shadow-2xl': scrollY != 0
            }            
            
        )}>
            <div className="container flex gap-14 text-tertiary justify-end">
                {
                    routes.map((route, idx) => {
                        const isActive = route.href == currRoute;

                        return (
                            <Link key={idx} className={classNames(
                                'font-bold select-none', {
                                'text-primary': isActive,
                                'text-tertiary': !isActive                                
                            })} onClick={() => setCurrRoute(route.href)} href={`#${route.href}`}
                                scroll={false}>
                                {route.label}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}