// React Imports
import { Link } from 'react-router-dom';

// Styling Imports
import styled from 'styled-components';

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232323;
  table {
    thead {
          tr {
              text-align: center;
          }
      }
    tbody {
        tr {
            text-align: center;
            td {
                button {
                    width: 75px;
                }
                a {
                    width: 75px;
                }
            }
        }
    }
  }
`;

const GuideTypePage = (props) => {
    return (
        <StyledPage>
            <table className="table table-light table-striped table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Champion</th>
                        <th scope="col">Items</th>
                        <th scope="col">Runes</th>
                        <th scope="col">Abilities</th>
                        <th scope="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.guides.length > 0 ? 
                        props.guides.map((guide, idx) => 
                    <tr key={guide.name}>
                        <td>{guide.name}</td>
                        <td>{guide.role}</td>
                        <td>{guide.champion}</td>
                        <td>{guide.items}</td>
                        <td>{guide.runes}</td>
                        <td>{guide.abilities}</td>
                        {props.user._id === guide.userId ?
                        
                        <td>
                            <div className="btn-group mr-2">
                                <button
                                    className="btn btn-primary"
                                    onClick={() =>{
                                        props.editRow(guide);
                                        props.history.push(`/editguide/${guide._id}`);
                                    }}
                                >Edit</button>           
                            </div>                  
                            <div className="btn-group mr-2">
                                <Link 
                                className="btn btn-dark"
                                key={guide._id} 
                                to={`/guides/${guide._id}`}   
                                >View</Link>
                            </div>                  
                            <div className="btn-group mr-2">                                
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        props.deleteGuide(guide._id)
                                        props.history.push('/guides')
                                    }}
                                >Delete</button>
                            </div>
                        </td>
                        :                       
                        
                        <td>
                            <Link 
                            className="btn btn-dark mr-2"
                            key={guide._id} 
                            to={`/guides/${guide._id}`}   
                            >View</Link>
                        </td>
                        
                        }
                    </tr>
                        )
                    :
                    <tr>
                        <td>No Guides</td>
                    </tr>
                    }
                </tbody>
            </table>
        </StyledPage>
    )
}

export default GuideTypePage;