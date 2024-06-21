import {
    IconChevronLeft, IconCoinFilled, IconCurrentLocation, IconInfoCircle, IconMapPinFilled, IconMapPins, IconStack2, IconTimeline
  } from '@tabler/icons-react';
  import { useEffect, useState } from 'react';
  import Map, { Geofence } from '../Mapa/Map';
  import Switch from '../Switch';
import axios from 'axios';
  
  interface PageEditProps {
    geofences?: Geofence[];
    onSave: () => void;
    onToggleDynamicRate: (enabled: boolean) => void;
    onToggleOnDemand: (enabled: boolean) => void;
    onChangeColor: (color: string) => void;
  }
  
  const PageEdit: React.FC<PageEditProps> = ({
    geofences = [],
    onToggleDynamicRate,
    onToggleOnDemand,
    onChangeColor
  }) => {
    const [priorityZones, setPriorityZones] = useState<number>(geofences[0]?.priorityZone || 4);
    const [selectedGeofence, setSelectedGeofence] = useState<Geofence | null>(geofences[0] || null);
    const [selectedColor, setSelectedColor] = useState<string>(selectedGeofence?.geofenceColor || '#000000');
    const [isDynamicRateChecked, setIsDynamicRateChecked] = useState(false);
    const [isOnDemandChecked, setIsOnDemandChecked] = useState(false);
    const [mode, setMode] = useState<'view' | 'edit' | 'new'>('view');

    console.log('geofences:', geofences);
    console.log('selectedGeofence:', selectedGeofence);
  
    useEffect(() => {
      if (selectedGeofence) {
        loadGeofence(selectedGeofence);
      }
    }, [selectedColor]);
  
    const loadGeofence = (geofence: Geofence) => {
      const loadedGeofence: Geofence = {
        ...geofence,
        geofenceColor: selectedColor,
      };
      setSelectedGeofence(loadedGeofence);
    };
  
    const handleGeofenceCreate = (geofence: Geofence) => {
      setSelectedGeofence(geofence);
    };
  
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const colorValue = e.target.value;
      setSelectedColor(colorValue);
      onChangeColor(colorValue);
    };
  
    const handleToggleDynamicRate = () => {
      setIsDynamicRateChecked(!isDynamicRateChecked);
      onToggleDynamicRate(!isDynamicRateChecked);
    };
  
    const handleToggleOnDemand = () => {
      setIsOnDemandChecked(!isOnDemandChecked);
      onToggleOnDemand(!isOnDemandChecked);
    };
  
    const priorityZoneId = [
      { id: 1, name: 'Principal' },
      { id: 2, name: 'Secundaria' },
      { id: 3, name: 'Terciaria' },
      { id: 4, name: 'None' },
    ];

  
    const getPriorityZoneName = (id: number) => {
      const zone = priorityZoneId.find(zone => zone.id === id);
      return zone ? zone.name : '';
    };

    const updateGeofenceField = (fieldName: string, newValue: any) => {
        setSelectedGeofence(prevState => {
          // Si prevState es null, usamos un objeto Geofence vacío como valor por defecto
          const currentGeofence = prevState || {
            id: '',
            geofenceName: '',
            geofenceColor: '',
            geofenceLocation: '',
            polygons: [], // Asegúrate de proporcionar un valor por defecto para todas las propiedades requeridas
            // ... otros campos de Geofence
          };
      
          return {
            ...currentGeofence,
            [fieldName]: newValue
          };
        });
      };

      const Guardar = async (selectedGeofence:Geofence) => {
        // Preparar los datos a enviar
        console.log('Datos a guardar:', selectedGeofence);
        
        const id = 1;
        console.log('id:', id);
        try {
            // Realizar la petición POST usando axios
            const response = await axios.put(`http://localhost:3000/geofences/${id}`, selectedGeofence);
    
            // Manejar la respuesta del servidor
            console.log('Datos guardados:', response.data);
            // Aquí puedes realizar otras acciones después de guardar, como actualizar estado o notificar al usuario
    
        } catch (error) {
            console.error('Error al guardar:', error);
            // Aquí puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
        }
    }
    
    
  
    return (
      <main className='bg-gray-100 w-auto h-full'>
        <section className='flex gap-2 p-5'>
          <div className='flex flex-col gap-3 min-w-[500px] w-[600px] max-w-[800px]'>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <IconChevronLeft size={30} />
                <div className='flex gap-2 items-center'>
                  <IconMapPins size={20} />
                  <p className='text-[12px]'>Tarifa dinámica</p>
                </div>
              </div>
              <div className='flex'>
                <div className='bg-black flex items-center p-1 px-2 rounded-l-lg'>
                  <IconCoinFilled size={20} color='white' />
                  <p className='text-white text-[12px]'>Tarifa General</p>
                </div>
                <div className='bg-white flex items-center p-1 px-2 rounded-r-lg'>
                  <p className='text-black text-[12px]'>$ 15.00 Km</p>
                </div>
              </div>
            </div>
            <div className='flex gap-2 justify-center'>
              <article className='bg-white rounded-lg p-2 flex flex-col gap-2'>
                <p className='text-[14px] font-bold'>Nombre</p>
                <hr className='mx-1' />
                <input type="text" onChange={e => updateGeofenceField('geofenceName',e.target.value)} value={selectedGeofence?.geofenceName || ''} className='bg-gray-100 rounded-lg h-[30px] text-[13px] text-center focus:outline-none' />
              </article>
              <article className='bg-white rounded-lg p-2 flex flex-col gap-2'>
                <p className='text-[14px] font-bold'>Ubicación</p>
                <hr className='mx-1' />
                <div className='relative'>
                  <IconMapPinFilled size={20} className='absolute top-1 left-1' />
                  <input type="text" onChange={e => updateGeofenceField('geofenceLocation',e.target.value)} value={selectedGeofence?.geofenceLocation || ''} className='bg-gray-100 rounded-lg h-[30px] text-[13px] text-center focus:outline-none' />
                </div>
              </article>
              <article className='bg-white rounded-lg p-2 flex flex-col gap-2'>
                <p className='text-[14px] font-bold'>Tarifa Inicial</p>
                <hr className='mx-1' />
                <div className='flex gap-1 items-center'>
                  <p className='text-[14px] font-bold'>$</p>
                  <input type="text" onChange={e => updateGeofenceField('initialRate',e.target.value)} value={selectedGeofence?.initialRate || ''} className='bg-gray-100 rounded-lg h-[30px] w-[100px] text-[13px] text-center focus:outline-none' />
                  <p className='text-[14px] font-bold'>MX</p>
                </div>
              </article>
            </div>
            <div className='flex flex-col'>
              <div className='bg-white w-full flex justify-between p-2 items-center rounded-t-lg'>
                <p className='text-[12px] font-bold'>Ubicación</p>
                <div className='flex gap-2 items-center'>
                  <IconTimeline size={20} color={mode === 'edit' ? 'orange' : 'black'} onClick={() => setMode('edit')} />
                  <IconCurrentLocation size={20} color={mode === 'view' ? 'orange' : 'black'} onClick={() => setMode('view')} />
                </div>
              </div>
              <Map geofences={[selectedGeofence!]} mode={mode} onGeofenceCreate={handleGeofenceCreate} />
            </div>
          </div>
          <div className='flex flex-col gap-2 px-3 w-auto'>
            <button className='bg-black text-white p-1 rounded-2xl text-[12px] h-[30px]' onClick={Guardar}>Guardar</button>
            <article className='bg-white p-2 rounded-lg flex flex-col gap-2'>
              <div className="flex items-center">
                <Switch initialOn={isDynamicRateChecked} />
                <div className="ml-3 text-gray-700 font-medium flex items-center">
                  <p className='text-[13px]'>Tarifa Dinámica</p>
                  <IconInfoCircle size={15} />
                </div>
              </div>
              <hr />
              <div className='flex gap-1 items-center'>
                <p className='text-[12px]'>Precio sobre kilómetro</p>
                <IconInfoCircle size={15} />
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-[14px] font-bold'>$</p>
                <input type="text" onChange={e=>updateGeofenceField('dynamicRateMinPrice',e.target.value)} value={selectedGeofence?.dynamicRateMinPrice || ''} className='bg-gray-100 rounded-lg w-[50px] h-[30px] text-[13px] text-center focus:outline-none' />
                <p className='text-[14px] font-bold'>{'>'}</p>
                <input type="text" onChange={e=>updateGeofenceField('dynamicRateMaxDistance',e.target.value)} value={selectedGeofence?.dynamicRateMaxDistance || ''} className='bg-gray-100 rounded-lg w-[50px] h-[30px] text-[13px] text-center focus:outline-none' />
                <p className='text-[14px] font-bold'>km</p>
              </div>
              <hr />
              <div className='flex gap-1 items-center'>
                <p className='text-[12px]'>Horario</p>
                <IconInfoCircle size={15} />
              </div>
              <div className='flex justify-between items-center'>
                <input type="text" value={selectedGeofence?.schedule?.startHour || '9'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
                <input type="text" value={selectedGeofence?.schedule?.startMinute || '00'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
                <p className='text-[14px] font-bold'>-</p>
                <input type="text" value={selectedGeofence?.schedule?.startPeriod || 'PM'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
              </div>
              <div className='flex justify-between items-center'>
                <input type="text" value={selectedGeofence?.schedule?.endHour || '5'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
                <input type="text" value={selectedGeofence?.schedule?.endMinute || '00'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
                <p>-</p>
                <input type="text" value={selectedGeofence?.schedule?.endPeriod || 'AM'} className='bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none' />
              </div>
              <div className='flex justify-start items-center gap-2'>
                <p className='text-[14px] font-bold'>$</p>
                <input type="text" onChange={e=>updateGeofenceField('rateForHour',e.target.value)} value={selectedGeofence?.rateForHour || ''} className='bg-gray-100 rounded-lg w-[100px] h-[30px] text-[13px] text-center focus:outline-none' />
                <p className='text-[14px] font-bold'>MXN</p>
              </div>
              <hr />
              <div className="flex items-center">
                <Switch initialOn={isOnDemandChecked} />
                <div className="ml-3 text-gray-700 font-medium flex items-center">
                  <p className='text-[13px]'>Sobre demanda</p>
                  <IconInfoCircle size={15} />
                </div>
              </div>
            </article>
            <article className='bg-white flex flex-col gap-2 p-2 rounded-lg'>
              <div className='flex gap-1 text-[12px] items-center'>
                <p>Color</p>
                <IconInfoCircle size={15} />
              </div>
              <hr />
              <div className='flex gap-1 text-[14px] items-center'>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => {handleColorChange(e); updateGeofenceField('geofenceColor',e.target.value)}}
                  className='border border-gray-400 rounded-md'
                />
                <p>{selectedColor}</p>
              </div>
            </article>
            <article className='bg-white flex flex-col gap-2 p-2 rounded-lg'>
              <div className='flex gap-1 text-[12px] items-center'>
                <p>Prioridad de zona</p>
                <IconInfoCircle size={15} />
              </div>
              <hr />
              <div className='flex gap-2 items-center text-[12px]'>
                <div className='flex gap-1 bg-gray-100 rounded-2xl p-1 items-center relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                    <IconStack2 className="h-5 w-5" />
                  </div>
                  <select
                    name="priorityZone"
                    id="priorityZone"
                    className='block bg-gray-100 appearance-none w-full px-2 py-1 pl-6 rounded-2xl leading-tight focus:outline-none'
                    value={priorityZones}
                    onChange={(e) => {setPriorityZones(parseInt(e.target.value)); updateGeofenceField('priorityZone',parseInt(e.target.value))}}
                  >
                    {priorityZoneId.map((item) => (
                      <option key={item.id} value={item.id}>{item.id}</option>
                    ))}
                  </select>
                </div>
                <p>{getPriorityZoneName(priorityZones)}</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  }
  
  export default PageEdit;
  