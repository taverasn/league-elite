// Styling Components
import styled from 'styled-components';

// React Imports
import { useState } from 'react';

const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232323;
`;

const CreateGuidePage = (props) => {
    
    const [guide, setGuide] = useState({
        userId: "",
        name: "", 
        type: "",
        role: "",
        champion: "",
        items: "",
        runes: "",
        abilities: "",
    });

    const handleInputChange = (e) => {
        setGuide(prevState => ({
            ...prevState,
            userId: props.user._id,
            [e.target.name] : e.target.value
        }));
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.createGuide(guide);
        props.history.push('/guides');
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
            <header>Create Guide</header>
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
                    <select
                    name="champion" 
                    value={guide.champion}
                    onChange={handleInputChange} 
                    className="form-control"
                    >
                        <option value="">Select a Champion</option>
                        {props.champions.map((champion, idx) =>
                            <option key={idx} value={champion.id}>{champion.id}</option>
                        )}
                    </select>
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
                <div className="form-group">    
                        <button className="btn btn-primary form-control" disabled={isFormInvalid()}>Add new guide</button>          
                        <button className="btn btn-danger form-control">
                            Cancel
                        </button>
                </div>      
            </form>
        </StyledPage>
    )
}

export default CreateGuidePage;