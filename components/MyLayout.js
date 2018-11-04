import Toolbar from './Toolbar/Toolbar'

const layoutStyle = {
    margin: 20,
    marginTop: 64,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div>
        <Toolbar />
        <main style={layoutStyle}>
        {props.children}
        </main>
    </div>
)

export default Layout