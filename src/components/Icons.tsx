import clsx from 'clsx';

import navIcon1 from '@/assets/img/icons/nav-icon1.svg';
import navIcon2 from '@/assets/img/icons/nav-icon2.svg';
import navIcon3 from '@/assets/img/icons/nav-icon3.svg';
import navIcon4 from '@/assets/img/icons/nav-icon4.svg';

// reuseable types
type SpanIconProps = React.HTMLAttributes<HTMLSpanElement>;
type ImgIconProps = React.ImgHTMLAttributes<HTMLImageElement>;

//  🟨 <span> icon generator
const createSpanIcon = (emoji: string) => ({ className, ...props }: SpanIconProps) =>
  <span className={ clsx("inline-block", className) } { ...props }>{ emoji }</span>

// 🟦 <img> icon generator
const createImageIcon = (src: string, defaultAlt: string) => ({ className, alt = defaultAlt, ...props}: ImgIconProps) =>
  <img className={ clsx("image-icon", className) } src={ src } alt={ alt } { ...props } />

// 🚧 Emojis como íconos
export const IconConstruction = createSpanIcon("🚧");
export const IconBuildingConstruction = createSpanIcon("🏗️");
export const IconGlobeWithMeridians = createSpanIcon("🌐");
export const PageFacingUp = createSpanIcon("📄");

// Imágenes como íconos
export const IconLinkedIn = createImageIcon(navIcon1, "LinkedIn");
export const IconGitHub = createImageIcon(navIcon2, "GitHub");
export const IconYouTube = createImageIcon(navIcon3, "YouTube");