import React from 'react';

const TestimonialDetails = ({ review }) => {

    return (

        <li className="col-span-full lg:col-span-1 relative py-5 px-4 flex flex-col justify-between rounded text-center">

            <p className="z-10 relative mt-2 text-gray-600 font-serif">{review?.reviewText}</p>

            <div className="z-10 relative mt-5 flex flex-col items-center">
                <span className="w-20 h-20 rounded-full border-2 border-indigo-50 overflow-hidden">
                    <img src={review?.img} alt="img"
                        className="object-cover filter grayscale h-full w-full" />
                </span>
                <div className="ml-3 inline-flex flex-col">
                    <h3 className="text-lg font-semibold">{review?.name}</h3>
                </div>
            </div>

            <svg className="absolute top-0 left-1/2 w-56 h-56 text-gray-200 transform -translate-x-1/2" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421.000000 374.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,374.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M100 2769 l0 -901 575 3 c428 2 578 0 586 -8 28 -28 -1 -235 -53 -381 -60 -171 -143 -305 -269 -437 -184 -192 -412 -308 -684 -350 -60 -9 -120 -18 -132 -21 l-23 -4 0 -305 c0 -168 3 -305 8 -305 27 0 277 31 322 40 704 134 1268 689 1416 1394 22 106 26 159 34 426 10 358 13 1599 4 1689 l-7 61 -888 0 -889 0 0 -901z" />
                    <path d="M2370 2776 l0 -894 25 -6 c14 -4 278 -6 587 -6 602 1 581 3 573 -50 -2 -14 -12 -72 -20 -129 -41 -262 -170 -511 -356 -686 -177 -168 -397 -271 -671 -315 -70 -11 -130 -20 -133 -20 -3 0 -5 -135 -5 -300 l0 -300 63 0 c143 0 328 34 499 90 580 193 1021 669 1173 1265 48 189 48 192 52 1248 l4 997 -895 0 -896 0 0 -894z" />
                </g>
            </svg>

        </li>

    );
};

export default TestimonialDetails;