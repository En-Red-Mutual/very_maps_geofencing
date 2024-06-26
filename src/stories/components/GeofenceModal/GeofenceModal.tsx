import React from 'react';
import { IconEdit, IconMapPinFilled, IconX } from '@tabler/icons-react';
import Switch from '../Switch/Switch';
import { GeofenceModalProps } from './type';


const GeofenceModal = ({ geofence, onClose }:GeofenceModalProps) => {
    return (
        <div className='absolute top-1/4 right-[200px] w-[200px] flex flex-col gap-2'>
            <div className='bg-black text-white rounded-2xl text-center'>
                <h2 className='font-bold'>Nombre</h2>
                <p className='text-[13px]'>{geofence.geofenceName}</p>
            </div>
            <div className='flex gap-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center h-[30px]'>
                <IconMapPinFilled size={22} />
                <p>{geofence.geofenceLocation}</p>
            </div>
            <div className='bg-black rounded-2xl text-white text-center'>
                <h2 className='font-bold'>Tarifa inicial</h2>
                <p className='text-[13px]'>${geofence.initialRate}.00</p>
            </div>
            <div className='bg-black text-white rounded-2xl text-center'>
                <h2 className='font-bold'>Tarifa dinamica</h2>
                <p className='text-[13px]'>${geofence.dynamicRateMinPrice} <span>{'->'}</span> {geofence.dynamicRateMaxDistance} km</p>
                <p className='text-[13px]'>$50 MXN - 9PM a 5AM</p>
            </div>
            <div className='flex gap-1 justify-between h-[40px]'>
                <div className='bg-black flex items-center p-1 rounded-[60%]'>
                    <Switch initialOn={geofence.on || false} />
                </div>
                <div className='bg-black p-1 rounded-[50%] flex items-center'>
                    <div style={{ backgroundColor: geofence.geofenceColor }} className={`w-[30px] h-[30px] rounded-[50%]`} />
                </div>
                <button className='bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]'>
                    <IconEdit size={24} />
                </button>
                <button className='bg-gray-400/70 w-[40px] rounded-[50%] flex items-center justify-center' onClick={onClose}><IconX /></button>
            </div>
        </div>
    );
};

export default GeofenceModal;
