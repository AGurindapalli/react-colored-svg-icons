import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const Ticket = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
     <G transform="matrix(0.408266,0,0,0.408266,4.75525,1.4605)">
        <Path d="M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z" style={{fillRule:'nonzero'}}/>
    </G>
    <G id="Ticket" transform="matrix(1.19674,0,0,1.21146,-5.40811,-3.02647)">
        <G transform="matrix(0.280712,0,0,0.280712,12.6753,4.17187)">
            <Path d="M30.2,26.4L30.8,24L26.8,22.9L26.1,25.3L30.2,26.4ZM42.8,29.9L43.4,27.5L39.4,26.4L38.7,28.8L42.8,29.9ZM56.8,22.9L34.1,56.6L32.7,58.8L32.6,58.8C28.5,57.7 24.4,60.2 23.2,64.2L22.9,65.4L12.4,62.5L27.9,5.8L38.4,8.7L38.1,9.9C37.6,11.9 37.8,14 38.8,15.7C39.8,17.5 41.5,18.8 43.5,19.3C45.5,19.8 47.5,19.6 49.3,18.6C51.1,17.6 52.4,15.9 52.9,14L53.2,12.8L63.7,15.7L60.9,26L56.8,22.9ZM37.2,25.8L33.2,24.7L32.5,27.1L36.5,28.2L37.2,25.8ZM45.9,28.2L45.2,30.6L49.2,31.7L49.9,29.3L45.9,28.2Z" style={{fill:'rgb(56,170,86)',fillRule:'nonzero'}}/>
        </G>
        <Path d="M18.349,11.486L17.308,15.294L16.759,15.409L16.918,15.951L17.141,15.904L15.31,22.604L17.36,23.17C17.057,23.552 16.957,24.122 17.122,24.701L17.21,24.967L15.143,25.395L11.224,12.692L13.291,12.264L13.379,12.53C13.524,12.974 13.798,13.371 14.157,13.612C14.528,13.873 14.958,13.968 15.345,13.876C15.733,13.784 16.04,13.554 16.224,13.184C16.407,12.814 16.427,12.354 16.293,11.93L16.205,11.664L18.272,11.236L18.349,11.486ZM13.959,16.55L13.784,16.018L12.997,16.182L13.156,16.724L13.959,16.55ZM15.047,15.764L14.26,15.928L14.419,16.469L15.206,16.306L15.047,15.764ZM16.441,16.041L16.266,15.509L15.479,15.673L15.638,16.214L16.441,16.041Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        <G transform="matrix(1.07133,0,0,1.07133,-2.35035,-2.76871)">
            <Path d="M36.873,38.818L17.455,37.63L17.669,34.035L18.099,34.054C18.767,34.087 19.434,33.855 19.941,33.41C20.447,32.965 20.764,32.325 20.797,31.656C20.831,30.988 20.599,30.321 20.154,29.815C19.709,29.309 19.068,28.992 18.4,28.958L17.999,28.923L18.212,25.328L33.916,26.295L37.63,26.516L37.581,27.422L37.542,28.017L37.515,28.299L37.388,30.128L37.019,30.15C36.351,30.116 35.684,30.348 35.178,30.793C34.672,31.238 34.355,31.879 34.321,32.547C34.287,33.215 34.503,33.853 34.964,34.388C35.409,34.894 36.05,35.211 36.718,35.245L37.12,35.28L36.873,38.818ZM30.568,37.346L31.4,37.4L31.497,36.047L30.664,35.993L30.568,37.346ZM25.25,35.715L25.25,34.439L22.699,34.439L22.699,35.715L25.25,35.715ZM30.69,35.178L31.522,35.231L31.618,33.879L30.786,33.825L30.69,35.178ZM28.271,33.164L28.271,31.888L22.699,31.888L22.699,33.164L28.271,33.164ZM30.856,33.021L31.688,33.075L31.785,31.722L30.953,31.669L30.856,33.021ZM30.978,30.853L31.81,30.907L31.906,29.554L31.074,29.5L30.978,30.853ZM28.271,30.68L28.271,29.404L22.699,29.404L22.699,30.68L28.271,30.68ZM31.931,28.738L32.028,27.385L31.196,27.332L31.099,28.685L31.931,28.738Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        </G>
        <Path d="M37.378,17.506L28.255,31.289L25.7,29.604L25.897,29.296C26.206,28.818 26.318,28.229 26.206,27.667C26.093,27.106 25.756,26.601 25.279,26.292C24.802,25.983 24.213,25.871 23.651,25.983C23.09,26.096 22.584,26.432 22.276,26.91L22.079,27.19L19.525,25.506L26.907,14.362L28.648,11.723L29.293,12.144L29.715,12.425L29.911,12.565L31.202,13.435L31.062,13.716C30.753,14.193 30.641,14.783 30.753,15.344C30.865,15.906 31.202,16.411 31.68,16.72C32.157,17.028 32.718,17.141 33.308,17.028C33.869,16.916 34.374,16.579 34.683,16.102L34.88,15.821L37.378,17.506ZM26.509,22.49C27.389,22.49 28.103,23.204 28.103,24.084C28.103,24.964 27.389,25.678 26.509,25.678C25.629,25.678 24.915,24.964 24.915,24.084C24.915,23.204 25.629,22.49 26.509,22.49ZM30.321,21.718L27.402,19.683L26.826,20.509L29.745,22.544L30.321,21.718ZM33.616,21.52L34.009,20.93L33.055,20.285L32.662,20.874L33.616,21.52ZM32.073,20.509L32.466,19.92L31.511,19.274L31.118,19.864L32.073,20.509ZM30.557,19.471L30.95,18.881L29.995,18.236L29.602,18.825L30.557,19.471ZM29.013,18.46L29.406,17.871L28.451,17.225L28.058,17.814L29.013,18.46ZM27.862,16.86L26.907,16.214L26.514,16.804L27.469,17.45L27.862,16.86Z" style={{fill:'rgb(90,130,194)'}}/>
    </G>
</Svg>

);

export default Ticket