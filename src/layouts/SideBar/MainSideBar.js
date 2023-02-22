import {Link} from 'react-router-dom'

const MainSideBar = () => {
    return(
    <div className="side-bar">
        <ul>
            <li><Link to='/pageA'>page A</Link></li>
            <li><Link to='/pageB'>page B</Link></li>
            <li><Link to='/pageC'>page C</Link></li>
        </ul>
    </div>
    )
}

export default MainSideBar;