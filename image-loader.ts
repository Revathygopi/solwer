interface ImageLoaderProps {
    src: string; // The original source of the image
    width: number; // The requested width of the image
    quality?: number; // The requested quality of the image (optional, defaults to 75)
}

const loader = ({ src }: ImageLoaderProps) => {
    return src
};

export default loader;