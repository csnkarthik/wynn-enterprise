
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UlDescription from '../utilities/UlDescription';
import CheckBox from '../utilities/progressSteps/CheckBox';
function Step1() {
    // passing a data for reuseable components
    const titl = "get Started";
    const desc = "On the following pages we’re going to ask a few questions to get to know you better. We appreciate your time in providing this information to help serve you better."
    const informationPassForCheckbox = `* I consent to receive automated text messages, including promotions, exclusive offers, marketing and other information from Wynn Resorts and its affiliates at the phone number provided. I understand that I am not required to provide my phone number or consent as a condition of purchasing any goods or services. Message and data rates may apply, up to nine messages per month. Reply “STOP” at any time if you no longer wish to receive text messages from Wynn. Must be at least 21 years old.`

    const [stateSelected, setStateSelected] = useState<string | null>(
        '- select -'
    );
    const router = useRouter();
    function sumithandlerTemp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        router.push("/profile/enrollment/aboutyou")
    }


    const [radioSelected, setRadioSelected] = useState<{
        cell: boolean;
        home: boolean;
    }>({ cell: false, home: true });

    useEffect(() => {
        document.querySelectorAll('.dropdown-item').forEach((item) => {
            item.addEventListener('click', (e) => {
                setStateSelected(() => item?.textContent);
            });
        });
        const init: HTMLElement | null = document.querySelector('#phoneHome');
        init?.click();
    }, []);

    const RemoveType = (event: any) => {
        setRadioSelected({
            cell: event.target.value == 'cell',
            home: event.target.value == 'home',
        });
    };
    return (
        <UlDescription title={titl} description={desc} width=''>
            <form action="" className="">
                <fieldset className="field">
                    <legend className="legends visually-hidden-focusable">
                        get started
                    </legend>
                    <div className="stepField mb-3">
                        <label className="form-label"> Street Address *</label>
                        <input type="text" name="street" className="form-control" />
                    </div>
                    <div className="stepField mb-3">
                        <label className="form-label"> Street Address Line 2</label>
                        <input type="text" name="street" className="form-control" />
                    </div>
                    <div className="stepField mb-3">
                        <label className="form-label"> City *</label>
                        <input type="text" name="street" className="form-control" />
                    </div>

                    <div className="stepField mb-3">
                        <label
                            className="form-label"
                            id="stateLabel"
                            htmlFor="address_stateProvince"
                        >
                            {' '}
                            State *
                        </label>
                        <div className="dropdown">
                            <button
                                className="dropdown-toggle form-control text-start"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="stateSelect"
                                aria-labelledby="stateLabel stateSelect"
                            >
                                {stateSelected}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="stateSelect">
                                <li>
                                    <a className="dropdown-item item-state">Nevada</a>
                                </li>
                                <li>
                                    <a className="dropdown-item item-state">Cal</a>
                                </li>
                                <li>
                                    <a className="dropdown-item item-state">Arz</a>
                                </li>
                                <li>
                                    <a className="dropdown-item item-state">Settle</a>
                                </li>
                                <li>
                                    <a className="dropdown-item item-state">New york</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="stepField mb-3 zip">
                        <label className="form-label"> Zip Code *</label>
                        <input type="text" name="street" className="form-control" />
                    </div>
                    <div className="stepField mb-3 phoneNumber">
                        <label className="form-label"> Phone Number *</label>
                        <input type="text" name="street" className="form-control" />
                    </div>
                    <div className="mb-3 phoneCheck">
                        <div>
                            <input
                                type="radio"
                                name="phone"
                                className="checkCellPhone radioPhone"
                                id="phoneCell"
                                value={'cell'}
                                checked={radioSelected.cell}
                                // onClick={handleCheckboxChange}
                                onChange={RemoveType}
                            />
                            <label
                                htmlFor="phoneCell"
                                className="radioPhone"
                                data-name="checkbox"
                            >
                                <span className="visually-hidden-focusable">Radio button </span>
                                Mobile phone
                                <span className="visually-hidden-focusable sr-cellPhone"></span>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="phone"
                                className="checkHomePhone radioPhone"
                                id="phoneHome"
                                value={'home'}
                                checked={radioSelected.home}
                                // onClick={handleCheckboxChange}
                                onChange={RemoveType}
                            />
                            <label
                                htmlFor="phoneHome"
                                className="radioPhone"
                                data-name="checkbox"
                            >
                                <span className="visually-hidden-focusable">Radio button </span>
                                Home phone
                                <span className="visually-hidden-focusable sr-homePhone"></span>
                            </label>
                        </div>
                    </div>
                    {radioSelected.cell && <CheckBox>{informationPassForCheckbox}</CheckBox>}
                    <div className='submit-buttons' >
                        <button type='submit' className="btn btn-primary btn-submit" onClick={(e) => sumithandlerTemp(e)}>
                            save and continue
                        </button>
                    </div>
                </fieldset>
            </form>
        </UlDescription>

    );
}

export default Step1;
