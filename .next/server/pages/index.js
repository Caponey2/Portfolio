"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function About({ pageInfo  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col relative h-screen md:text-left max-w-7xl px-10 justify-evenly p-20 mx-auto items-center xl:flex-row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "absolute pb-20 top-24 uppercase tracking-[20px] text-blue-200 text-2xl ",
                children: "About"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "flex md:mb-0 flex-shrink-0 justify-center pt-10 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 ",
                initial: {
                    x: -200,
                    opacity: 0
                },
                transition: {
                    duration: 1.2
                },
                whileInView: {
                    x: 0,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "flex-shrink-0 w-[150px] h-[150px] rounded-lg object-cover sm:w-[175px] sm:h-[175px] md:w-[175px] md:h-[175px] lg:h-[260px] lg:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px]",
                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(pageInfo?.profilePic).url(),
                    width: 500,
                    height: 500,
                    alt: "2ndme"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex text-center mx-2 justify-center flex-col space-y-1 xs:space-y-2 lg:space-y-5 px-0 md:px-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: "text-sm font-semibold md:text-base lg:text-4xl",
                        children: [
                            "Here is a ",
                            "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "underline decoration-blue-400/50",
                                children: "little"
                            }),
                            " ",
                            "",
                            "background"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-[9.5px] xs:text-[11px] sm:text-[13px] md:text-base lg:text-xl xl:text-left",
                        children: [
                            pageInfo?.backgroundInfo,
                            " "
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function BackgroundCircles({}) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0
        },
        animate: {
            scale: [
                1,
                1.2,
                1.5,
                2,
                1
            ],
            opacity: [
                0.1,
                0.2,
                0.4,
                0.8,
                0.1,
                1.0
            ],
            borderRadius: [
                "20%",
                "20%",
                "50%",
                "80%",
                "20%"
            ]
        },
        transition: {
            duration: 2.5
        },
        id: "BackgroundCircles Top",
        className: "relative flex justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border-blue-100 border rounded-lg h-[150px] w-[150px] mt-52 animate-squarePing1 md:invisible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border-blue-100 border rounded-lg h-[150px] w-[150px] mt-52 animate-squarePing1Rev "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-200 rounded-lg h-[300px] w-[300px] mt-52 animate-squarePing2 invisible md:visible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-300 rounded-lg h-[450px] w-[450px] mt-52 animate-squarePing3 invisible lg:visible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-400 rounded-lg h-[600px] w-[600px] mt-52 animate-squarePing4 invisible 3xl:visible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-300 rounded-lg h-[300px] w-[300px] mt-52 animate-pulse "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-400 rounded-lg h-[450px] w-[450px] mt-52 animate-pulse invisible md:visible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-500 rounded-lg h-[600px] w-[600px] mt-52 animate-pulse invisible lg:visible"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute border border-blue-600 rounded-lg h-[750px] w-[750px] mt-52 invisible lg:visible"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundCircles);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Contact({}) {
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onSubmit = (data)=>window.location.href = `mailto:tannerhebert20xx@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-screen flex relative flex-col justify-center text-center px-10 mx-auto items-center",
        id: "ContactScreen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl",
                children: "Contact"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full h-3/5 items-center justify-end mx-auto ",
                id: "ContactContainer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center py-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                className: "flex items-center text-sm md:text-base lg:text-3xl font-semibold text-center",
                                id: "TopText",
                                children: [
                                    "I have got what you need.",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex items-center text-sm md:text-base lg:text-lg decoration-[#3b82f6]/50 underline",
                                children: "Lets Chat about it!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-start text-sm w-4/5 md:items-center md:text-md ",
                        id: "ContactInfo",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-2 text-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon, {
                                        className: "text-[#3b82f6] h-5 w-5 animate-pulse"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm md:text-base lg:text-lg",
                                        children: "+541-531-9205"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.EnvelopeIcon, {
                                        className: "text-[#3b82f6] h-5 w-5 animate-pulse"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm md:text-base lg:text-lg",
                                        children: "tannerhebert20xx@gmail.com"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.MapPinIcon, {
                                        className: "text-[#3b82f6] h-5 w-5 animate-pulse"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm md:text-base lg:text-lg",
                                        children: "Portland, OR"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        id: "ContactForm",
                        onSubmit: handleSubmit(onSubmit),
                        className: "flex flex-col w-full py-2 my-1 space-y-1 h-3/5 items-center md:w-[500px] md:pt-20 md:h-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("name"),
                                type: "text",
                                className: "contactInput w-4/5",
                                placeholder: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("email"),
                                type: "email",
                                className: "contactInput w-4/5",
                                placeholder: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("subject"),
                                type: "text ",
                                className: "contactInput w-4/5",
                                placeholder: "Subject"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ...register("message"),
                                className: "contactInput w-4/5",
                                placeholder: "Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "bg-[#3b82f6] py-4 px-10 rounded-md text-black font-bold text-lg w-4/5",
                                children: "Submit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _sanity__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _sanity__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ExperienceCard({ experience  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "Experience Card Container",
        className: "flex w-full flex-shrink-0 rounded-lg snap-center justify-center bg-[#292929] 2xl:bg-[#292929] lg:w-4/5 xl:w-3/5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-hidden overflow-y-scroll",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            initial: {
                y: -100,
                opacity: 0
            },
            transition: {
                duration: 1.2
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true
            },
            className: "flex flex-col mx-1 p-5 items-center rounded-lg",
            id: "Motion Container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(experience?.companyImage).url(),
                    width: 400,
                    height: 400,
                    alt: "me",
                    className: "flex justify-center items-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full ",
                    id: "Image"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "flex font-light tracking-wide text-blue-400 text-md md:text-2xl",
                    children: experience.jobTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "flex font-bold text-center text-md text-blue-400/50 md:text-2xl",
                    children: experience.company
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex space-x-2 my-2",
                    children: experience.technologies.map((technology)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(technology.image).url(),
                            alt: technology._id,
                            width: 100,
                            height: 100,
                            className: "rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
                        }, technology._id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "flex upper-case py-5 text-blue-300 text-md md:text-xl",
                    children: [
                        new Date(experience.dateStarted).toDateString(),
                        " to",
                        " ",
                        experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col items-start justify-center list-disc space-y-2 ml-5 text-sm md:text-lg",
                    children: experience.points.map((point, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: point
                        }, i))
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3468);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Header({ socials  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "sticky p-5 top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                initial: {
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                },
                animate: {
                    x: 0,
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1.5
                },
                className: "flex flex-row items-center",
                children: socials.map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_2__.SocialIcon, {
                        url: social.url,
                        fgColor: "#3b82f6",
                        bgColor: "transparent"
                    }, social._id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "#contact",
                passHref: true,
                legacyBehavior: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    initial: {
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    },
                    animate: {
                        x: 0,
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 1.5
                    },
                    className: "flex flex-row items-center ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_2__.SocialIcon, {
                            className: "cursor-pointer",
                            network: "email",
                            fgColor: "#3b82f6",
                            bgColor: "transparent"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "uppercase hidden md:inline-flex text-sm text-[#3b82f6]",
                            children: "Get in Touch"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9537);
/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(806);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _sanity__WEBPACK_IMPORTED_MODULE_7__]);
([_BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _sanity__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 







function Hero({ pageInfo  }) {
    const [text, count] = (0,react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter)({
        words: [
            `Howdy, name's ${pageInfo?.name}`,
            "Developer",
            "Jiujiteiro",
            "Problem Solver",
            "Small Business Owner",
            "Lover of books",
            "Dungeon Master",
            "Teller of stories"
        ],
        loop: true,
        delaySpeed: 2000
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "HeroTop",
        className: "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        1
                    ]
                },
                transition: {
                    delay: 2.5,
                    duration: 3
                },
                id: "Motion1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    // loader={() => src}
                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_7__/* .urlFor */ .uH)(pageInfo.heroImage).url(),
                    width: 150,
                    height: 150,
                    alt: "",
                    id: "Selfie",
                    className: "relative rounded-lg h-[150px] w-[150px] mx-auto object-cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        1
                    ]
                },
                transition: {
                    delay: 2,
                    duration: 3
                },
                id: "Motion2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-small uppercase text-blue-200 pb-2 mx-10 tracking-[15px] z-3 pt-[40px]",
                        children: pageInfo?.role
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "text-3xl md:text-5xl lg:text-6xl font-semibold px-10 z-3 h-[48px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-3 max-w-4/5 max-h-[96px] min-h-[96px]",
                                children: text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.Cursor, {
                                cursorColor: "#3b82f6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "#about",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "heroButton",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "#experience",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "heroButton",
                                    children: "Experience"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "#skills",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "heroButton",
                                    children: "Skills"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "#projects",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "heroButton",
                                    children: "Projects"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _sanity__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _sanity__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Projects({ projects  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-screen w-full relative flex overflow-hidden overflow-y-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ",
        id: "ProjectScreen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl",
                children: "Projects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-full flex overflow-x-scroll snap-x snap-x-center snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80 h-4/5",
                id: "ProjectContainer",
                children: projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full flex-shrink-0 snap-center lg:flex-col flex-col space-y-1 items-center justify-center p-20 md:p-44 mx-5 overflow-y-hidden overflow-y-scroll hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80",
                        id: `Project ${i + 1}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row w-full p-0 my-0 lg:flex-col",
                                id: "IphoneFlexRow Option",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    initial: {
                                        y: -200,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 1.2
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "flex lg:flex-col w-full mx-1 p-5 items-center rounded-lg",
                                    id: "Motion Container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(project?.image).url(),
                                            width: 400,
                                            height: 400,
                                            alt: `${i}`,
                                            className: "flex flex-shrink-0 h-[150px] w-[170px] md:mb-5 md:w-[300px] md:h-[270px] lg:h-[360px] lg:w-[420px] rounded-lg"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "text-lg md:text-2xl font-semibold text-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "underline decoration-[#3b82f6]/50",
                                                    children: [
                                                        "Case Study ",
                                                        i + 1,
                                                        " of ",
                                                        projects.length,
                                                        ":"
                                                    ]
                                                }),
                                                " ",
                                                project?.title
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-2 justify-center",
                                children: [
                                    project?.technologies.map((technology)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(technology.image).url(),
                                            width: 52,
                                            height: 52,
                                            alt: technology._id,
                                            className: "h-10 w-10 rounded-full"
                                        }, technology._id)),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "flex text-sm md:text-lg justify-center text-center md:text-left lg:w-3/5",
                                children: project?.summary
                            })
                        ]
                    }, `${i}`))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full absolute top-[30%] bg-[#3b82f6]/10 left-0 h-[500px] -skew-y-12 "
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Skill({ directionLeft , skill  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            x: directionLeft ? -100 : 100,
            opacity: 0
        },
        transition: {
            duration: 1
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        className: "group relative flex cursor-pointer ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__/* .urlFor */ .uH)(skill?.image).url(),
                width: 100,
                height: 100,
                alt: "sanity",
                className: "rounded-full border-gray-500 bg-transparent object-cover h-[48px] w-[48px] md:w-[100px] md:h-[100px] filter group-hover:grayscale transition group-click:grayscale duration-300 ease-in-out"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute opacity-0 group-hover:opacity-80 group-click:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 h-[48px] w-[48px] md:w-[100px] md:h-[100px] rounded-full ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xl font-bold text-gray-700 opacity-100% md:text-3xl",
                        children: [
                            " ",
                            skill.progress,
                            "%"
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skill);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Skill__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Skill__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Skills({ skills  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0
        },
        transition: {
            duration: 1.5
        },
        whileInView: {
            opacity: 1
        },
        className: "flex relative flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto overflow-x-hidden items-center",
        id: "SkillsContainer ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl",
                children: "Skills"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "absolute top-36 uppercase tracking-[3x] text-gray-500 text-sm",
                children: "Hover over a skill for current proficieny"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-4 gap-4",
                id: "SkillGrid",
                children: [
                    skills?.slice(0, skills.length / 2).map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skill__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            skill: skill
                        }, skill._id)),
                    skills?.slice(skills.length / 2, skills.length).map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skill__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            skill: skill,
                            directionLeft: true
                        }, skill._id))
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _ExperienceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _ExperienceCard__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _ExperienceCard__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function WorkExperience({ experiences  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            duration: 1.5
        },
        id: "Experience Screen",
        className: "h-screen mx-30 flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                id: "Experience Header Title",
                className: "absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl",
                children: "Experience"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "Experience Container",
                className: " h-4/6 w-full relative flex py-5 space-x-9 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80",
                children: experiences?.map((experience)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExperienceCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        experience: experience
                    }, experience._id))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkExperience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3505);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1547);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1079);
/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6572);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6471);
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(694);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5822);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_fetchPageInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1958);
/* harmony import */ var _utils_fetchExperiences__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2882);
/* harmony import */ var _utils_fetchSkills__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5178);
/* harmony import */ var _utils_fetchProjects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2238);
/* harmony import */ var _utils_fetchSocials__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4824);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_About__WEBPACK_IMPORTED_MODULE_4__, _components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__, _components_Skills__WEBPACK_IMPORTED_MODULE_6__, _components_Projects__WEBPACK_IMPORTED_MODULE_7__, _components_Contact__WEBPACK_IMPORTED_MODULE_8__, _sanity__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_About__WEBPACK_IMPORTED_MODULE_4__, _components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__, _components_Skills__WEBPACK_IMPORTED_MODULE_6__, _components_Projects__WEBPACK_IMPORTED_MODULE_7__, _components_Contact__WEBPACK_IMPORTED_MODULE_8__, _sanity__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-unescaped-entities */ 
















const Home = ({ pageInfo , experiences , skills , projects , socials  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Tanner's Portfolio"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                socials: socials
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "hero",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pageInfo: pageInfo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "about",
                className: "snap-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    pageInfo: pageInfo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "experience",
                className: "snap-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    experiences: experiences
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "skills",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    skills: skills
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "projects",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    projects: projects
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "contact",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                href: "#hero",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                    className: "sticky bottom-5 w-full cursor-pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                            className: "h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer",
                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_11__/* .urlFor */ .uH)(pageInfo.heroImage).url(),
                            width: 100,
                            height: 100,
                            alt: "imgur"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const pageInfo = await (0,_utils_fetchPageInfo__WEBPACK_IMPORTED_MODULE_12__/* .fetchPageInfo */ .R)();
    const experiences = await (0,_utils_fetchExperiences__WEBPACK_IMPORTED_MODULE_13__/* .fetchExperiences */ .c)();
    const skills = await (0,_utils_fetchSkills__WEBPACK_IMPORTED_MODULE_14__/* .fetchSkills */ .T)();
    const projects = await (0,_utils_fetchProjects__WEBPACK_IMPORTED_MODULE_15__/* .fetchProjects */ .b)();
    const socials = await (0,_utils_fetchSocials__WEBPACK_IMPORTED_MODULE_16__/* .fetchSocials */ .R)();
    return {
        props: {
            pageInfo,
            skills,
            projects,
            experiences,
            socials
        },
        revalidate: 30
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uH": () => (/* binding */ urlFor)
/* harmony export */ });
/* unused harmony exports config, sanityClient */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const config = {
    dataset: "production" || 0,
    projectId: "8swovckc",
    apiVersion: "2023-01-01",
    useCdn: "production" === "production"
};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);
const urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ fetchExperiences)
/* harmony export */ });
const fetchExperiences = async ()=>{
    const res = await fetch(`${"http://localhost:3000"}/api/getExperience`);
    const data = await res.json();
    const experiences = data.experiences;
    console.log("fetching", experiences);
    return experiences;
};


/***/ }),

/***/ 1958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ fetchPageInfo)
/* harmony export */ });
const fetchPageInfo = async ()=>{
    const res = await fetch(`${"http://localhost:3000"}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo = data.pageInfo;
    console.log("fetching", pageInfo);
    return pageInfo;
};


/***/ }),

/***/ 2238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ fetchProjects)
/* harmony export */ });
const fetchProjects = async ()=>{
    const res = await fetch(`${"http://localhost:3000"}/api/getProjects`);
    const data = await res.json();
    const projects = data.projects;
    console.log("fetching", projects);
    return projects;
};


/***/ }),

/***/ 5178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ fetchSkills)
/* harmony export */ });
const fetchSkills = async ()=>{
    const res = await fetch(`${"http://localhost:3000"}/api/getSkills`);
    const data = await res.json();
    const skills = data.skills;
    console.log("fetching", skills);
    return skills;
};


/***/ }),

/***/ 4824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ fetchSocials)
/* harmony export */ });
const fetchSocials = async ()=>{
    const res = await fetch(`${"http://localhost:3000"}/api/getSocials`);
    const data = await res.json();
    const socials = data.socials;
    console.log("fetching", socials);
    return socials;
};


/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9537:
/***/ ((module) => {

module.exports = require("react-simple-typewriter");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-social-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();