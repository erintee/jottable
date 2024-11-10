"use client"
import QuickNote from "@/features/nav/components/QuickNote";



function NavBar() {
    return (
        <nav className="pl-8 pr-8 flex justify-between">
            <h1>Jottable</h1>
            <QuickNote/>
        </nav>
    )
}

export default NavBar;