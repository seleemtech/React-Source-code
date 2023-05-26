import { Link } from "react-router-dom";

const TechnologyList = () => {
    return (  <div className="recent-posts mb-50">
    <h3 className="widget-title">Technologies</h3>
    <ul>
        <li><Link to="/Liferay">Liferay</Link></li>
        <li><Link to="/BigData">Big Data</Link></li>
        <li><Link to="/Android">Android</Link></li>
        <li><Link to="/Magneto">Magneto</Link></li>
        <li><Link to="/Drupal">Drupal</Link></li>
        <li><Link to="/Alfresco">Alfresco</Link></li>
        <li><Link to="/Joomla">Joomla</Link></li>
        <li><Link to="/PHP-Framework">PHP Framework</Link></li>
    </ul>
</div> );
}
 
export default TechnologyList;