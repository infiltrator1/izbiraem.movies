import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { addWatchedMovie, removeWatchedMovie } from "../../redux/actions"; 

function WatchedButton({movie}) {

    const dispatch = useDispatch();
    const watchedMovies = useSelector(state => state.watchedMovies);

    function isInWatched() {
        return watchedMovies.some(watchMovie => {
            return watchMovie.id === movie.id
        });
    }

    function toggleWatched() {

        if(isInWatched()){
            dispatch(removeWatchedMovie(movie));
            return;
        }
            dispatch(addWatchedMovie(movie));
    }

    return (
        <>
            <FontAwesomeIcon
            className={
                `watched-icon ms-2 ${isInWatched() ? 'active' : ''}`
            }
            size="lg"
            onClick={() => toggleWatched()} 
            icon={faEye} />
        </>
    )
}
export default WatchedButton;