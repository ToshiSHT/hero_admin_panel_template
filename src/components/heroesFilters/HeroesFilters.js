import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters,} from '../../actions';
import { filterHeroes } from './filtersSlice';


const HeroesFilters = () => {
    const arrFilters = useSelector(state => state.filters.filters)
    const filter = useSelector(state => state.filters.filter)
    console.log(arrFilters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
       dispatch(fetchFilters(request));
    },[])

    const onfilterHeroes = (element) => {
        dispatch(filterHeroes(element));
    }

    const filters = arrFilters.map(({title,className,element},i) => {
         return  <button key ={i} onClick={() => onfilterHeroes(element)} className={`${className} ${element===filter? "active": null}`}>{title}</button>
    });
   
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filters}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;