import React from 'react';
import {Svg,Path,G,Rect,Circle,Defs,linearGradient} from 'react-native-svg';

const Projects = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
       <G transform="matrix(0.408266,0,0,0.408266,4.75525,1.4605)">
        <Path d="M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z" style={{fillRule:'nonzero'}}/>
    </G>
    <G id="Projects">
        <G transform="matrix(0.558165,0,0,0.176263,11.415,19.515)">
            <Path d="M45.017,8.981C45.017,7.25 44.574,5.845 44.027,5.845L6.808,5.845C6.261,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.261,45.045 6.808,45.045L44.027,45.045C44.574,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z" style={{fill:"rgb(233,74,60)"}}/>
        </G>
        <G transform="matrix(0.700955,0,0,0.176263,14.4449,28.6993)">
            <Path d="M45.017,8.981C45.017,7.25 44.664,5.845 44.229,5.845L6.606,5.845C6.171,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.171,45.045 6.606,45.045L44.229,45.045C44.664,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z" style={{fill:"rgb(90,130,194)"}}/>
        </G>
        <G transform="matrix(0.306122,0,0,0.816327,0.219206,3.22838)">
            <Path d="M45.017,7.021C45.017,6.372 43.612,5.845 41.881,5.845L8.953,5.845C7.222,5.845 5.817,6.372 5.817,7.021L5.817,43.869C5.817,44.518 7.222,45.045 8.953,45.045L41.881,45.045C43.612,45.045 45.017,44.518 45.017,43.869L45.017,7.021Z" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(0.407353,0,0,0.176263,4.40699,10.3306)">
            <Path d="M45.017,8.981C45.017,7.25 44.409,5.845 43.66,5.845L7.174,5.845C6.425,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.425,45.045 7.174,45.045L43.66,45.045C44.409,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z" style={{fill:"rgb(246,187,26)"}}/>
        </G>
    </G>
</Svg>
);
export default Projects