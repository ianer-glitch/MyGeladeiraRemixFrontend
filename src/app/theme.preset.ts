import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const FridgeTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#FFF4A1',   
            100: '#FCE16F',  
            200: '#F8D33C',
            300: '#F6C108',  
            400: '#FDB713',  
            500: '#E8A900',  
            600: '#D69000',
            700: '#C47E00',
            800: '#A96A00',
            900: '#8F5700',  
            950: '#7A4700'
        }
    }
});

export default FridgeTheme;