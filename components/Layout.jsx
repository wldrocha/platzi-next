import Navbar from './Navbar'
const Layout = ({componentChild}) => {
    return (
        <div>
            <Navbar />
            {componentChild}
        </div>
    )
}

export default Layout
