import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const FridgeTheme = definePreset(Aura, {
    semantic: {
        colorScheme:{
            light:{
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
                },
                surface: {
                    100: '#C9C9C9',   // Lightest surface
                    200: '#B6B6B6',
                    300: '#A3A3A3',
                    400: '#919191',
                    500: '#C4C4C4',   // Middle surface
                    600: '#8F8F8F',
                    700: '#7D7D7D',
                    800: '#6B6B6B',
                    900: '#595959',
                    950: '#808080'    // Darkest surface
                }
            }
        }
    }
});

export default FridgeTheme;