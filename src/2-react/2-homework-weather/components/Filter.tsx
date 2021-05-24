/* Core */
import {FC} from "react";
import {useForm} from "react-hook-form";
import {FilterFormDataModel} from "../types/FilterFormDataModel";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const Filter: FC<FilterProps> = (props) => {

    const schema = yup.object().shape({
        minTemperature: yup.number().min(-60, 'температура не может быть меньше ${min}'),
        maxTemperature: yup.number()
            .max(50, 'температура не может быть больше ${max}')
            .nullable()
            .moreThan(yup.ref('minTemperature'), 'минимальное значение должно быть меньше максимального'),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<FilterFormDataModel>({
        resolver: yupResolver(schema)
    });

    const doFiltering = (data: FilterFormDataModel) => {
        props.handleFiltering(data);
    }

    return (
        <div className="filter">
            <form onSubmit={handleSubmit(doFiltering)}>
                <div>
                    <label>Облачно</label>
                    <input className='checkmark' type='checkbox' {...register('cloudy')}/>
                </div>
                <div>
                    <label>Солнечно</label>
                    <input type='checkbox' {...register('sunny')}/>
                </div>
                <div>
                    <label>Минимальная температура</label>
                    <input type='text' {...register('minTemperature')}/>
                    <p>{errors.minTemperature?.message}</p>
                </div>
                <div>
                    <label>Максимальная температура</label>
                    <input type='text' {...register('maxTemperature')}/>
                    <p>{errors.maxTemperature?.message}</p>
                </div>
                <input type='submit' value='Отфильтровать'/>
            </form>
        </div>
    )
}

interface FilterProps {
    handleFiltering: (formData: FilterFormDataModel) => void;
}