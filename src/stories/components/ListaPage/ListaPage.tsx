import  { useEffect, useState } from 'react';
import { IconCirclePlusFilled, IconList, IconMapPins, IconTrash } from '@tabler/icons-react';
import axios from 'axios';
import Switch from '../Switch';
import Map, { Geofence } from '../Mapa/Map'; // Asegúrate de ajustar la importación según la ubicación real de tu componente Map

const ListaPage = () => {
    const [mode, setMode] = useState<'list' | 'map'>('list');
    const [geofences, setGeofences] = useState<Geofence[]>([]); // Usar un estado para almacenar las geocercas

    const fetchData = async () => {
        try {
            const response = await axios.get<Geofence[]>('http://localhost:3000/geofences');
            console.log(response.data);
            setGeofences(response.data); // Actualizar el estado con los datos obtenidos
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='bg-gray-100 p-2'>
            <article className='bg-white rounded-lg p-2 flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-[15px] font-bold'>Tarifa dinamica</p>
                    <div className='flex items-center gap-1'>
                        {
                            mode === 'list' ? <IconMapPins size={24} onClick={() => setMode('map')} /> : <IconList size={24} onClick={() => setMode('list')} />
                        }
                        <IconTrash size={24} />
                        <button className='flex items-center justify-center bg-black text-white p-1 px-2 rounded-2xl gap-2'>
                            <p className='text-[12px]'>Agregar</p>
                            <IconCirclePlusFilled size={20} />
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    {
                        mode === 'list' ? (
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th>On/Off</th>
                                        <th>Nombre</th>
                                        <th>Ubicacion</th>
                                        <th>Tarifa Inicial</th>
                                        <th>Tarifa D. / Km</th>
                                        <th>Tarifa / Horario</th>
                                        <th>Color</th>
                                        <th>Creado por</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        geofences.map((geofence, index) => (
                                            <tr className='text-[12px] font-normal text-center' key={index}>
                                                <td>
                                                    <Switch initialOn={geofence.on || false} /> {/* Ajusta esto según la propiedad correcta de tu geofence */}
                                                </td>
                                                <td>{geofence.geofenceName}</td>
                                                <td>{geofence.geofenceLocation}</td>
                                                <td>${geofence.initialRate}</td>
                                                <td>
                                                    <p>$ {geofence.dynamicRateMinPrice} / {geofence.dynamicRateMaxDistance}</p>
                                                </td>
                                                <td>Hola</td>
                                                <td className='flex justify-center'>
                                                    <div style={{ backgroundColor: geofence.geofenceColor }} className={` w-[40px] h-[40px] rounded-[50%]`} />
                                                </td>
                                                <td className='font-bold'>Roberto</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <Map geofences={geofences} zoom={15} height='100vh' mode='view' />
                            </div>
                        )
                    }
                </div>
            </article>
        </section>
    );
};

export default ListaPage;
