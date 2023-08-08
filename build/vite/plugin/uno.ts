import { presetTypography, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';

export function configUnoPlugin() {
  return UnoCSS({
    presets: [presetUno(), presetTypography()],
  });
}
