import React from 'react';

import CityIcon from 'mdi-react/CityIcon';
import BellIcon from 'mdi-react/BellIcon';
import StoreIcon from 'mdi-react/StoreIcon';
import PowerIcon from 'mdi-react/PowerIcon';
import GarageIcon from 'mdi-react/GarageIcon';
import DomainIcon from 'mdi-react/DomainIcon';
import FactoryIcon from 'mdi-react/FactoryIcon';
import MapPlusIcon from 'mdi-react/MapPlusIcon';
import WarehouseIcon from 'mdi-react/WarehouseIcon';
import HandshakeIcon from 'mdi-react/HandshakeIcon';
import ImageFilterHdrIcon from 'mdi-react/ImageFilterHdrIcon';
import OfficeBuildingIcon from 'mdi-react/OfficeBuildingIcon';
import HomeCityOutlineIcon from 'mdi-react/HomeCityOutlineIcon';
import MegaphoneOutlineIcon from 'mdi-react/MegaphoneOutlineIcon';

export const ICON_MAP = {
    homework: <HomeCityOutlineIcon />,
    apartment: <DomainIcon />,
    factory: <FactoryIcon/>,
    store: <StoreIcon/>,
    cityvIcon: <CityIcon/>,
    garage: <GarageIcon/>,
    warehouse: <WarehouseIcon/>,
    ground: <ImageFilterHdrIcon/>,
    various: <MapPlusIcon/>,
    campaign: <MegaphoneOutlineIcon/>,
    handshake: <HandshakeIcon/>,
    bell: <BellIcon/>,
    power: <PowerIcon/>,
    default: <OfficeBuildingIcon/>,
    no: 'i',
};
