import React from 'react';

interface IconProperties {

    className?: string;

    viewBox?: string;

    title?: string;

    style?: any;

    role?: string;

    size?: '16' | '24' | '32' | '40';

    name: string;
    fill?:boolean;
}


const Icon: React.FC<IconProperties> = ({ name, className, style,fill, ...props }) => {
    const iconPath = require(`../public/svgs/${name}.svg`);

    return (
        <svg
            className={className}
            style={style}
            {...props}
            dangerouslySetInnerHTML={{ __html: iconPath }}
        />
    );
};

export default Icon;
