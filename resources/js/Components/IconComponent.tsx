import { toPascalCase } from '@/Utils/StringFunctions';
import { createElement, FC, lazy, Suspense } from 'react';

interface IconProps {
    iconName: string;
    height?: number;
    width?: number;
    colour?: string;
}

const IconComponent: FC<IconProps> = ({
    iconName,
    height = 24,
    width = 24,
    colour = 'currentColor',
}) => {
    // convert to PascalCase
    const iconFileName = toPascalCase(iconName);

    // Dynamically import the icon component based on the icon name
    const iconComponent = lazy(() => import(`./Icons/${iconFileName}.tsx`));

    const iconProps = {
        height,
        width,
        colour,
    };
    return (
        <>
            <Suspense>
                {createElement(iconComponent, { ...iconProps })}
            </Suspense>
        </>
    );
};

export default IconComponent;
