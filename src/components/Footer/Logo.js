// export default function Logo ({fillColor, size=400}) {
//     // {width} height={height}
//     return (
//         <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g filter="url(#filter0_d_301_10)">
//                 <path d="M22 327C44.5656 310.2 59.8959 276.603 52.9784 236.567H47.5016V212H105.693C113.029 284.759 87.3191 322.756 22 327Z" fill={fillColor}/>
//                 <ellipse cx="73.8868" cy="153" rx="37.7358" ry="40" fill={fillColor}/>
//                 <path d="M129.327 181.728L125.007 182.016L122.415 173.664C135.855 170.4 145.743 167.136 152.078 163.872C158.415 160.608 161.967 158.784 162.735 158.4C165.231 158.4 166.671 158.592 167.055 158.976C167.823 159.744 168.399 165.888 168.783 177.408C184.143 166.272 198.063 160.704 210.543 160.704C227.055 160.704 238.575 166.464 245.103 177.984C261.231 166.464 276.207 160.704 290.031 160.704C317.871 160.704 331.791 175.008 331.791 203.616V267.552C331.791 271.008 332.655 273.408 334.383 274.752C336.111 275.904 340.335 276.768 347.055 277.344L349.647 288.864L321.423 288L290.319 288.864L288.015 277.344C297.231 276.576 302.703 275.808 304.431 275.04C306.351 274.08 307.311 271.584 307.311 267.552V213.408C307.311 201.12 304.911 192.576 300.111 187.776C295.311 182.784 287.823 180.288 277.647 180.288C267.663 180.288 258.159 183.456 249.135 189.792C250.095 194.592 250.575 199.2 250.575 203.616V267.552C250.575 271.008 251.439 273.408 253.167 274.752C254.895 275.904 259.119 276.768 265.839 277.344L268.431 288.864L240.207 288L209.103 288.864L206.799 277.344C216.015 276.576 221.487 275.808 223.215 275.04C225.135 274.08 226.095 271.584 226.095 267.552V213.408C226.095 201.12 223.695 192.48 218.895 187.488C214.287 182.496 207.375 180 198.159 180C188.943 180 179.343 182.688 169.359 188.064V267.552C169.359 271.008 170.223 273.408 171.951 274.752C173.679 275.904 177.903 276.768 184.623 277.344L187.215 288.864L158.991 288L127.887 288.864L125.583 277.344C134.799 276.576 140.271 275.808 141.999 275.04C143.919 274.08 144.879 271.584 144.879 267.552V200.16C144.879 193.248 143.631 188.448 141.135 185.76C138.639 183.072 134.703 181.728 129.327 181.728Z" fill={fillColor}/>
//             </g>
//             <defs>
//                 <filter id="filter0_d_301_10" x="18" y="113" width="335.646" height="222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//                     <feOffset dy="4"/>
//                     <feGaussianBlur stdDeviation="2"/>
//                     <feComposite in2="hardAlpha" operator="out"/>
//                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_10"/>
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_10" result="shape"/>
//                 </filter>
//             </defs>
//         </svg>
//     );
// }

export default function Logo ({className, size=400}) {
    // {width} height={height}
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 336 323" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_416_3)">
                <path d="M4 289C26.5656 272.2 41.8959 238.603 34.9784 198.567H29.5016V174H87.6931C95.0292 246.759 69.3191 284.756 4 289Z" />
                <ellipse cx="55.8867" cy="115" rx="37.7358" ry="40"/>
                <path d="M109.389 143.728L105.069 144.016L102.477 135.664C115.917 132.4 125.805 129.136 132.141 125.872C138.477 122.608 142.029 120.784 142.797 120.4C145.293 120.4 146.733 120.592 147.117 120.976C147.885 121.744 148.461 127.888 148.845 139.408C164.205 128.272 178.125 122.704 190.605 122.704C207.117 122.704 218.637 128.464 225.165 139.984C241.293 128.464 256.269 122.704 270.093 122.704C297.933 122.704 311.853 137.008 311.853 165.616V229.552C311.853 233.008 312.717 235.408 314.445 236.752C316.173 237.904 320.397 238.768 327.117 239.344L329.709 250.864L301.485 250L270.381 250.864L268.077 239.344C277.293 238.576 282.765 237.808 284.493 237.04C286.413 236.08 287.373 233.584 287.373 229.552V175.408C287.373 163.12 284.973 154.576 280.173 149.776C275.373 144.784 267.885 142.288 257.709 142.288C247.725 142.288 238.221 145.456 229.197 151.792C230.157 156.592 230.637 161.2 230.637 165.616V229.552C230.637 233.008 231.501 235.408 233.229 236.752C234.957 237.904 239.181 238.768 245.901 239.344L248.493 250.864L220.269 250L189.165 250.864L186.861 239.344C196.077 238.576 201.549 237.808 203.277 237.04C205.197 236.08 206.157 233.584 206.157 229.552V175.408C206.157 163.12 203.757 154.48 198.957 149.488C194.349 144.496 187.437 142 178.221 142C169.005 142 159.405 144.688 149.421 150.064V229.552C149.421 233.008 150.285 235.408 152.013 236.752C153.741 237.904 157.965 238.768 164.685 239.344L167.277 250.864L139.053 250L107.949 250.864L105.645 239.344C114.861 238.576 120.333 237.808 122.061 237.04C123.981 236.08 124.941 233.584 124.941 229.552V162.16C124.941 155.248 123.693 150.448 121.197 147.76C118.701 145.072 114.765 143.728 109.389 143.728Z" />
            </g>
            <defs>
                <filter id="filter0_d_416_3" x="0" y="75" width="333.709" height="222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_3" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}