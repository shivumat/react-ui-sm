import newStyled from '@emotion/styled';
import { useStyleSystem } from '../../Mixins/context';
import { getTextColor } from '../../Mixins/Color';

export type LoadingSpinnerProps = {
    loaderWidth?: number
    width?: string
    height?: string
    color?: string
}

const LoadingSpinnerContainer = newStyled.div<LoadingSpinnerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: relative;

    >.loading-spinner {
        width: ${({width, loaderWidth}) => width ?? `calc(1em - ${loaderWidth}px)`};
        height: ${({height, loaderWidth}) => height ?? `calc(1em - ${loaderWidth}px)`};
        max-width: 100%; /* Prevent exceeding container width */
        max-height: 100%; /* Prevent exceeding container height */
        aspect-ratio: 1 / 1; /* Maintain square dimensions */
        border: ${({loaderWidth}) => `${loaderWidth}`}px solid transparent;
        border-top: ${({loaderWidth, color}) => `${loaderWidth}px solid ${color}`} ; /* Customize the color as needed */
        border-radius: 50%;
        animation: rotate 1s linear infinite;
    }


    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const LoadingSpinner = (props : LoadingSpinnerProps) => {

    const colorConfig = useStyleSystem().colors

    const {loaderWidth = 2, width , height, color = getTextColor(colorConfig)} = props

    return (
        <LoadingSpinnerContainer width={width} height={height} loaderWidth={loaderWidth} color={color}>
            <div className="loading-spinner"></div>
        </LoadingSpinnerContainer>
    )
}

export default LoadingSpinner
