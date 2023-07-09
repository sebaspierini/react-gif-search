import {useFetchGif} from '../hooks/useFetchGif';
import { GifItem } from './GifItem';

export const GiftGrid = ({category}) => {
    const {images, isLoading} = useFetchGif(category);

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
                {images.map((img)=>(<GifItem key={img.id} {...img} />))}
            </div>
        </div>
    );
}
