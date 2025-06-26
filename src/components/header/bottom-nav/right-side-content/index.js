"use client"
import React, { useRef, useState } from 'react';
import { BiSearch } from "react-icons/bi"
import { LuUser2 } from "react-icons/lu"
import { RiBriefcase2Line } from "react-icons/ri"
import SearchModal from '../modal/search-modal';
import BriefcaseModal from '../modal/briefcase-modal';
import { OutSideClickEvent } from '@/lib/utils/OutsideClick';
const icons = [
    {
        icon: <BiSearch />,
        action: "one",
    },
    {
        icon: <LuUser2 />,
        action: "two",
    },
    {
        icon: <RiBriefcase2Line />,
        action: "three",
    },
];
const RightSideContent = () => {
    const [openSearchbar, setOpenSearchbar] = useState(false);
    const [briefcase, setBriefcase] = useState(false);
    const [sticky, setSticky] = useState(false);
    const searchModalRef = useRef(null);
    const briefcaseModalRef = useRef(null);
    OutSideClickEvent(searchModalRef, () => setOpenSearchbar(false));
    OutSideClickEvent(briefcaseModalRef, () => setBriefcase(false));

    const handleOpen = (item) => {
        switch (item?.action) {
            case "one": setOpenSearchbar((prev) => !prev)
                break;
            case "three": setBriefcase((prev) => !prev)
                break;
        }
    }


    const handleClose = (item) => {
        switch (item) {
            case "one": setOpenSearchbar(false)
                break;
            case "two": setBriefcase(false)
                break;
        }

    }
    return (
        <div>
            <div
                className={`flex items-center gap-x-6  ${sticky ? "text-gray-700" : "text-white"
                    }`}
            >
                {icons?.map((item, itemIndex) => (
                    <button
                        onClick={() => handleOpen(item)}
                        key={itemIndex}
                        className={`text-xl hover:text-[#DC2F15] duration-300  ${openSearchbar && item.action === 'one'
                            ? "invisible"
                            : "visible"
                            }`}
                    >
                        {item.icon}
                        <div className="relative group z-10 ">
                            <div
                                className={`${item?.action === "three"
                                    ? "absolute size-4 text-xs -bottom-1.5 group-hover:text-white text-white   -right-1 bg-[#E93314] rounded-full"
                                    : null
                                    } `}
                            >
                                {item?.action === "three" && 0}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <div ref={searchModalRef}
                className={`fixed top-0 left-0 z-40 duration-500  bg-[#121418]  w-full   transition-all  ease-out  ${openSearchbar
                    ? "scale-100 opacity-100  visible"
                    : "scale-95  opacity-0 invisible"
                    }`}
            >
                <SearchModal
                    handleClose={handleClose}
                />
            </div>
            {/* briefcaseModal */}
            <div ref={briefcaseModalRef}
                className={`bg-[#121418] size-80 right-5  shadow-lg  z-40  transition-all transform duration-500 ease-in-out   ${briefcase
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                    }  ${sticky ? "fixed top-[82px] right-0" : "absolute top-[82px]"}`}
            >
                <BriefcaseModal
                    handleClose={handleClose}
                />
            </div>
        </div>
    );
};

export default RightSideContent;