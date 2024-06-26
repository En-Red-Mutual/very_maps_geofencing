import { Meta} from '@storybook/react';
import SearchMap from './SearchMap';

const meta ={
    title: 'Atomes/SearchMap',
    component: SearchMap,
    argTypes: {
        onSearch: { action: 'search' },
    },
} as Meta<typeof SearchMap>;

export default meta;
export const Default ={};