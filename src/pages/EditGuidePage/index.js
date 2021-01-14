import { useState, useEffect } from 'react';

const EditGuidePage = (props) => {

    const [guide, setGuide] = useState(props.currentGuide);

    useEffect(() => {
        setGuide(props.currentGuide)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setGuide({ ...guide, [name]: value });
    }

    return (
        <div classname="Page">
            <form
            onSubmit={event => {
                event.preventDefault()

                props.updateGuide(guide.id, guide)
            }}
            > 
                <label>Name</label>
                <input 
                type="text" 
                name="name" 
                value={guide.name}
                onChange={handleInputChange} 
                />
                <label>type</label>
                <select 
                name="type"
                value={guide.type}
                onChange={handleInputChange}
                >
                        <option value="Lane">Lane</option>
                        <option value="General">General</option>
                        <option value="Champion">Champion</option>
                </select>
                <label>Role</label>
                <select 
                name="role"
                value={guide.role}
                onChange={handleInputChange}
                >
                    <option value="Top">Top</option>
                    <option value="Jungle">Jungle</option>
                    <option value="Mid">Mid</option>
                    <option value="Bot">Bot</option>
                    <option value="Sup">Sup</option>
                </select>
                <label>Champion</label>
                <input 
                type="text" 
                name="champion" 
                value={guide.champion}
                onChange={handleInputChange} 
                />
                <label>Items</label>
                <input 
                type="text" 
                name="items" 
                value={guide.items}
                onChange={handleInputChange} 
                />
                <label>Runes</label>
                <input 
                type="text" 
                name="runes" 
                value={guide.runes}
                onChange={handleInputChange} 
                />
                <label>Abilities</label>
                <input 
                type="text" 
                name="abilities" 
                value={guide.abilities}
                onChange={handleInputChange} 
                />
                <button>Update guide</button>
                <button
                    onClick={() => props.setEditing(false)}
                >
                Cancel
                </button>
            </form>
        </div>
    )
}

export default CreateGuidePage;