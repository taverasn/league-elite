import ChampionsCard from '../../components/ChampionsCard';
import SearchBar from '../../components/SearchBar';
import './ChampionsPage.css'




const ChampionsPage = (props) => {



    return (
        <div className="Page ChampionsPage">
            <div className="SearchBar">
            <SearchBar
            Champions={props.Champions}
            />
            </div>
            <div className="ChampionsCard">             
                <ChampionsCard
                Champions={props.Champions}
                getChampionData={props.getChampionData}
                />
            </div>
        </div>
    )
}

export default ChampionsPage;