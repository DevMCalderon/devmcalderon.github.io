import clsx from 'clsx';
import React from 'react';

import navIcon1 from '@/assets/img/icons/nav-icon1.svg';
import navIcon2 from '@/assets/img/icons/nav-icon2.svg';
import navIcon3 from '@/assets/img/icons/nav-icon3.svg';
import navIcon4 from '@/assets/img/icons/nav-icon4.svg';
import  RightArrowCircle from '@/components/uI/icons/RightArrowCircleSVG';

// reuseable types
type SpanIconProps = React.HTMLAttributes<HTMLSpanElement>;
type ImgIconProps = React.ImgHTMLAttributes<HTMLImageElement>;
type SVGIconProps = React.SVGProps<SVGSVGElement>;

// <span> icon generator
const createSpanIcon = (emoji: string) => ({ className, ...props }: SpanIconProps) =>
  <span className={ clsx("span-icon", className) } { ...props }>{ emoji }</span>

// <img> icon generator
const createImageIcon = (src: string, defaultAlt: string) => ({ className, alt = defaultAlt, ...props}: ImgIconProps) => (
  <div className={ clsx("image-icon", className) }>
    <img src={ src } alt={ alt } { ...props } />
  </div>
)

// <svg> icon generator
const createSvgIcon = (SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, defaultTitle: string) =>
({ className, title="defaultTitle", ...props }: SVGIconProps ) =>
  <SvgComponent className={ clsx("svg-icon", className) } title={ title } { ...props } />;

// 🚧 span emojis as icons
export const IconConstruction = createSpanIcon("🚧");
export const IconBuildingConstruction = createSpanIcon("🏗️");
export const IconGlobeWithMeridians = createSpanIcon("🌐");
export const PageFacingUp = createSpanIcon("📄");
export const OpenFileFolder = createSpanIcon("📂");

// img svg as icons
export const IconLinkedIn = createImageIcon(navIcon1, "LinkedIn");
export const IconGitHub = createImageIcon(navIcon2, "GitHub");
export const IconYouTube = createImageIcon(navIcon3, "YouTube");

// svg as icons
export const IconRightArrowCircle = createSvgIcon(RightArrowCircle, "IconRightArrowCircle");