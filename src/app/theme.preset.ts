import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const FridgeTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#FFF1A0',   // Lightest
            100: '#F7D25D',
            200: '#F6C12A',
            300: '#F5B600',
            400: '#F5A100',
            500: '#EDC976',   // Middle
            600: '#D4B65B',
            700: '#C1A13F',
            800: '#A88C24',
            900: '#8F7710',  
            950: '#EEAD13'    // Darkest
        }
    }
});

export default FridgeTheme;