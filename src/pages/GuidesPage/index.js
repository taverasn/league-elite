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
              text-align: center
          }
      }
    tbody {
        tr {
            text-align: center
        }
    }
  }
`;

const GuidesPage = (props) => {
    return (
        <StyledPage>
            <table className="table table-light table-striped table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Guide</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
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
                    <tr key={guide._id}>
                        <th scope="row">{idx + 1}</th>
                        <td>{guide.name}</td>
                        <td>{guide.type}</td>
                        <td>{guide.role}</td>
                        <td>{guide.champion}</td>
                        <td>{guide.items}</td>
                        <td>{guide.runes}</td>
                        <td>{guide.abilities}</td>
                        <td>                  
                            <button
                                onClick={() =>{
                                    props.editRow(guide);
                                    props.history.push('/editguide');
                                }}
                            >Edit</button>
                            <button
                                onClick={() => {
                                    props.deleteGuide(guide._id)
                                    props.history.push('/guides')
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
        </StyledPage>
    )
}

export default GuidesPage;