import { useState } from 'react';
import styles from './CreateGuidePage.module.css'

const CreateGuidePage = (props) => {


    const [guide, setGuide] = useState({
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
            [e.target.name] : e.target.value
        }));
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.createGuide(guide);
        props.history.push('/guides');
        console.log('created');
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
        <div className="Page">
            <header>Create Guide</header>
            <form
            onSubmit={handleSubmit}
            className={styles.Form}
            >
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="name" 
                    value={guide.name}
                    onChange={handleInputChange}
                    placeholder="Name" 
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
                    />
                </div>    
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="items" 
                    value={guide.items}
                    onChange={handleInputChange} 
                    placeholder="Items" 
                    />
                </div>    
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="runes" 
                    value={guide.runes}
                    onChange={handleInputChange} 
                    placeholder="Runes" 
                    />
                </div>
                <div className="form-group">                    
                    <input 
                    type="text" 
                    name="abilities" 
                    value={guide.abilities}
                    onChange={handleInputChange} 
                    placeholder="Abilities" 
                    
                    />
                </div>    
                <div className="form-group">    
                        <button className="btn btn-primary form-control" disabled={isFormInvalid()}>Add new guide</button>          
                        <button className="btn btn-primary form-control">
                            Cancel
                        </button>
                </div>      
            </form>
        </div>
    )
}

export default CreateGuidePage;