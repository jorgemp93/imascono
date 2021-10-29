import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/" className="text-dark"><FaIcons.FaBorderAll className="me-2"/> Dashboard</Link>
                </li>
                <li>
                    <Link to="/" className="text-dark"><FaIcons.FaChartBar className="me-2"/> Reports</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar