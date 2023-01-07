
import { Formik, Form, Field} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector} from 'react-redux';
import { createHeroes } from '../../actions';
import { useHttp } from '../../hooks/http.hook';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать +++
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid +++
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST +++
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе +++
// данных из фильтров



const HeroesAddForm = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();
    const arrFilters = useSelector(state => state.filters.filters)

    const onCreateHeroes = (values,id) => {
        dispatch(createHeroes(values,id));
        request('http://localhost:3001/heroes','POST', JSON.stringify({id,...values}))
    }

    const filters = arrFilters.map(({element,title},i) => {
        if (element === 'all'){
            return
        }
        return  <option key={i} value={element}>{title}</option>
   });

    return (
        <Formik
            initialValues = {{
                name: '',
                description: '',
                element: ''
            }}
            onSubmit={values => onCreateHeroes(values,uuidv4())}>
        <Form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <Field 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <Field
                    required
                    name="description" 
                    className="form-control" 
                    id="description" 
                    as ="textarea"
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <Field 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    as="select">
                    <option >Я владею элементом...</option>
                    {filters}
                </Field>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </Form>
        </Formik>
    )
}

export default HeroesAddForm;