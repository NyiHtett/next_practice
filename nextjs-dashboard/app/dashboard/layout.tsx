import SideNav from "../ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        //making the options flex-end
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* making the options attached to the left */}
            <div className="w-full flex-none md:w-64"><SideNav/></div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}