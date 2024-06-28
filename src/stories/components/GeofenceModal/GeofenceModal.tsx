import React from 'react';
import { IconEdit, IconMapPinFilled, IconX } from '@tabler/icons-react';
import Switch from '../Switch/Switch';
import { GeofenceModalProps } from './type';


const GeofenceModal = ({ geofence, onClose }:GeofenceModalProps) => {
    return (
        <article className='w-[200px] flex flex-col gap-2'>
            <div className='bg-black text-white rounded-[5rem] text-center py-2'>
                <h2 className='font-bold text-[13px]'>Nombre</h2>
                <p className='text-[12px]'>{geofence.geofenceName}</p>
            </div>
            <div className='flex gap-4 py-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center'>
                <IconMapPinFilled size={22} />
                <p className='text-[14px]'>{geofence.geofenceLocation}</p>
            </div>
            <div className='bg-black rounded-2xl py-2 text-white text-center'>
                <h2 className='font-bold text-[13px]'>Tarifa inicial</h2>
                <p className='text-[12px]'>${geofence.initialRate} MXN km</p>
            </div>
            <div className='bg-black py-2 text-white rounded-[1.5rem] text-center flex flex-col gap-1 '>
                <h2 className='font-bold text-[13px]'>Tarifa dinamica</h2>
                <p className='text-[12px]'>${geofence.dynamicRateMinPrice} MXN <span>{'->'}</span> {geofence.dynamicRateMaxDistance} km</p>
                <p className='text-[12px]'>$50 MXN - 9PM a 5AM</p>
            </div>
            <div className='flex gap-1 justify-between h-[40px] w-full'>
                <div className='bg-black flex items-center justify-center w-[60px] rounded-[50px]'>
                    <Switch initialOn={geofence.on || false} />
                </div>
                <div className='bg-black p-1 rounded-[50%] flex items-center'>
                    <div style={{ backgroundColor: geofence.geofenceColor }} className={`w-[30px] h-[30px] rounded-[50%]`} />
                </div>
                <button className='bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]'>
                    <IconEdit size={24} />
                </button>
                <button className='bg-gray-900/60 w-[40px] rounded-[50%] flex items-center justify-center text-white' onClick={onClose}><IconX /></button>
            </div>
        </article>
    );
};

export default GeofenceModal;
