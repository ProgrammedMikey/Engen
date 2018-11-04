import Link from 'next/link'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div></div>
            <Link href="/"><a className="toolbar_logo" >THE LOGO</a></Link>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li> <a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
        <style jsx>{`
      .toolbar {
    position: fixed;
    width: 100%;
    background: royalblue;
    height: 56px;
    top: 0;
    left: 0;
}
.toolbar_logo{
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
}
.toolbar_nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
}
.toolbar_nav-items ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
.toolbar_nav-items li{
    padding: 0 0.5rem;
}
.toolbar_nav-items a{
    color: white;
    text-decoration: none;
}
.toolbar_nav-items a:hover,
.toolbar_nav-items a:active {
    color: #fa923f;
}
.spacer {
    flex: 1;
}
    `}</style>
    </header>
);

export default toolbar;