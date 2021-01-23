// Styling Imports
import styled from 'styled-components';

// React Imports
import { useState, useEffect } from 'react';


const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
`;

const EditGuidePage = (props) => {

    const [guide, setGuide] = useState(props.currentGuide);

    useEffect(() => {
        setGuide(props.currentGuide)
    }, [props])

    const handleInputChange = (e) => {
        setGuide(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    function handleSubmit(e) {
        try {
            e.preventDefault();
            props.updateGuide(guide.id, guide);
            props.history.push('/guides');
        } catch (err) {
            console.log(err);
        }
    }

    function isFormInvalid() {
        return !(guide.name && 
                guide.type && 
                guide.role && 
                guide.champion && 
                guide.items && 
                guide.runes && 
                guide.abilities);
    }


    return (
        <StyledPage>
            <header>Edit Guide</header>
            <form
            onSubmit={handleSubmit}
            > 
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="name" 
                    value={guide.name}
                    onChange={handleInputChange}
                    placeholder="Name" 
                    className="form-control"
                    />
                </div>    
                <div className="form-group">                    
                    <select 
                    name="type"
                    value={guide.type}
                    onChange={handleInputChange}
                    className="form-control"
                    >
                        <option value="">Select a Type</option>
                        <option value="Lane">Lane</option>
                        <option value="General">General</option>
                        <option value="Champion">Champion</option>
                    </select> 
                </div> 
                <div className="form-group">                    
                    <select 
                    name="role"
                    value={guide.role}
                    onChange={handleInputChange}
                    className="form-control"
                    >
                        <option value="">Select a Role</option>
                        <option value="Top">Top</option>
                        <option value="Jungle">Jungle</option>
                        <option value="Mid">Mid</option>
                        <option value="Bot">Bot</option>
                        <option value="Sup">Sup</option>
                    </select>
                </div>
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="champion" 
                    value={guide.champion}
                    onChange={handleInputChange} 
                    placeholder="Champion" 
                    className="form-control"
                    />
                </div>    
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="items" 
                    value={guide.items}
                    onChange={handleInputChange} 
                    placeholder="Items" 
                    className="form-control"
                    />
                </div>    
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="runes" 
                    value={guide.runes}
                    onChange={handleInputChange} 
                    placeholder="Runes" 
                    className="form-control"
                    />
                </div>
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="abilities" 
                    value={guide.abilities}
                    onChange={handleInputChange} 
                    placeholder="Abilities" 
                    className="form-control"
                    />
                </div>
                <div>
                    <button 
                    className="btn btn-primary form-control" 
                    disabled={isFormInvalid()}
                    >Update guide</button> 
                    <button 
                    className="btn btn-danger form-control" 
                    onClick={() => {
                        props.setEditing(false);
                        props.history.push('/guides');    
                    }}>Cancel</button>
                </div>
            </form>
        </StyledPage>
    )
}

export default EditGuidePage;