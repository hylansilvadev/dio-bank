import { Footer } from './Footer'
import { Header } from './Header/Header'

export const Layout = ({children}:any) =>{
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}