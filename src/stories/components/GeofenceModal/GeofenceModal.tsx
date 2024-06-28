import React from 'react';
import { IconEdit, IconMapPinFilled, IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import Switch from '../Switch/Switch';
import { GeofenceModalProps } from './type';

const GeofenceModal = ({ geofence, onClose }: GeofenceModalProps) => {
    return (
        <article className={clsx('w-[200px]', 'flex', 'flex-col', 'gap-2')}>
            <div className={clsx('bg-black', 'text-white', 'rounded-[84px]', 'text-center', 'py-2')}>
                <h2 className={clsx('font-bold', 'text-[13px]')}>Nombre</h2>
                <p className={clsx('text-[12px]')}>{geofence.geofenceName}</p>
            </div>
            <div className={clsx('flex', 'gap-4', 'py-1', 'justify-center', 'bg-black', 'text-white', 'text-[13px]', 'rounded-2xl', 'text-center', 'items-center')}>
                <IconMapPinFilled size={22} />
                <p className={clsx('text-[14px]')}>{geofence.geofenceLocation}</p>
            </div>
            <div className={clsx('bg-black', 'rounded-2xl', 'py-2', 'text-white', 'text-center')}>
                <h2 className={clsx('font-bold', 'text-[13px]')}>Tarifa inicial</h2>
                <p className={clsx('text-[12px]')}>${geofence.initialRate} MXN km</p>
            </div>
            <div className={clsx('bg-black', 'py-2', 'text-white', 'rounded-[1.5rem]', 'text-center', 'flex', 'flex-col', 'gap-1')}>
                <h2 className={clsx('font-bold', 'text-[13px]')}>Tarifa dinámica</h2>
                <p className={clsx('text-[12px]')}>${geofence.dynamicRateMinPrice} MXN <span>{'->'}</span> {geofence.dynamicRateMaxDistance} km</p>
                <p className={clsx('text-[12px]')}>$50 MXN - 9PM a 5AM</p>
            </div>
            <div className={clsx('flex', 'gap-1', 'justify-between', 'h-[40px]', 'w-full')}>
                <div className={clsx('bg-black', 'flex', 'items-center', 'justify-center', 'w-[60px]', 'rounded-[50px]')}>
                    <Switch initialOn={geofence.on || false} />
                </div>
                <div className={clsx('bg-black', 'p-1', 'rounded-full', 'flex', 'items-center')}>
                    <div
                        className={clsx('w-[30px]', 'h-[30px]', 'rounded-full')}
                        style={{ backgroundColor: geofence.geofenceColor }}
                    />
                </div>
                <button className={clsx('bg-black', 'w-[40px]', 'text-white', 'flex', 'items-center', 'justify-center', 'rounded-full')}>
                    <IconEdit size={24} />
                </button>
                <button className={clsx('bg-gray-900/60', 'w-[40px]', 'rounded-full', 'flex', 'items-center', 'justify-center', 'text-white')} onClick={onClose}>
                    <IconX />
                </button>
            </div>
        </article>
    );
};

export default GeofenceModal;
