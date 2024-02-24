import AppHead from "./head"
import Main from "./main"

export const Layout = ({metadata, children}) => {
    return <div>
        <AppHead metadata={metadata}/>
        <Main>{children}</Main>
    </div>
}

export default Layout