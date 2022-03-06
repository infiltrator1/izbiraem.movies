import {Card, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import NoResults from "./NoResults";
import MovieGridItem from "./MovieGridItem";
import {setWatchedMovies} from "../../redux/actions";

function WatchedList(props) {

    const dispatch = useDispatch();
    const watchedMovies = useSelector(state => state.watchedMovies);
    
    function renderWatchedMovies() {
        if(!watchedMovies.length) {
            return <NoResults title={'Нямате добавени изгледани филми'}/>
        }
        return watchedMovies.map(movie => {
            return <MovieGridItem key={movie.id} movie={movie}/>
        })
    }

    function clearAllFavorites() {
        dispatch(setWatchedMovies([]))
    }

    return (
        <Card>
            <Card.Body>
                Watched list
                <Button 
                    onClick={() => clearAllFavorites()}
                variant="link">Clear all</Button>
                <Row>
                    {renderWatchedMovies()}
                </Row>
            </Card.Body>
        </Card>
    )
}
export default WatchedList;