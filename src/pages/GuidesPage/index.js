import { Link } from 'react-router-dom';

import styles from './GuidesPage.module.css';

const GuidesPage = (props) => {
    return (
        <div className="Page">
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Role</th>
                        <th>Champion</th>
                        <th>Items</th>
                        <th>Runes</th>
                        <th>Abilities</th>
                    </tr>
                </thead>
                <tbody>
                    {props.guides.length > 0 ? 
                        props.guides.map((guide) => 
                    <tr key={guide._id}>
                        <td>{guide.name}</td>
                        <td>{guide.type}</td>
                        <td>{guide.role}</td>
                        <td>{guide.champion}</td>
                        <td>{guide.items}</td>
                        <td>{guide.runes}</td>
                        <td>{guide.abilities}</td>
                        <td>Actions</td>
                        <td>
                            <Link to="/editguide">                       
                                <button
                                    onClick={() =>{
                                        props.editRow(guide)
                                    }}
                                >Edit</button>
                            </Link>
                            <button
                                onClick={() => {
                                    props.deleteGuide(guide._id)
                                    props.history.push('/guides')
                                    console.log('Deleted')
                                }}
                            >Delete</button>
                        </td>
                    </tr>
                        )
                    :
                    <tr>
                        <td>No Guides</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GuidesPage;