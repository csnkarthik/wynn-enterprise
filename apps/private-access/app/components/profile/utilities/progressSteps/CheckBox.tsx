'use client';
import React, { useState } from 'react'

function CheckBox({ children }: { children: React.ReactNode; }) {
    const [radioSelected, setRadioSelected] = useState<{ message: boolean; }>({ message: false });
    const mobileMessageCheck = () => {
        setRadioSelected({
            message: !radioSelected.message,
        });
    }
    return (
        <>
            <div className={`checkTerm mb-3 ${radioSelected.message ? "checked" : ""}`} >
                <input type="checkbox" id="chkTerm1" />
                <label htmlFor="chkTerm1" className="checkterm" onClick={() => mobileMessageCheck()}>
                    <p className="text">
                        {children}
                    </p>
                </label>
            </div>
        </>
    )
}

export default CheckBox;