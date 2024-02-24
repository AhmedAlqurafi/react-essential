import AppHead from "./head"
import Main from "./main"

export const Layout = ({metadata, children}) => {
    return <div className="w-full h-[100vh] bg-gradient-to-r from-primary_dark to-primary_light">
        <AppHead metadata={metadata}/>
        <Main>{children}</Main>
    </div>
}

export default Layout