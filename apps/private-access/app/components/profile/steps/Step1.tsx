
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UlDescription from '../utilities/UlDescription';
import CheckBox from '../utilities/progressSteps/CheckBox';
import { useController, useForm } from 'react-hook-form';
import { dataone } from 'apps/private-access/typings';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
function Step1() {
    // passing a data for reuseable components
    const titl = "get Started";
    const desc = "On the following pages we’re going to ask a few questions to get to know you better. We appreciate your time in providing this information to help serve you better."
    const informationPassForCheckbox = `* I consent to receive automated text messages, including promotions, exclusive offers, marketing and other information from Wynn Resorts and its affiliates at the phone number provided. I understand that I am not required to provide my phone number or consent as a condition of purchasing any goods or services. Message and data rates may apply, up to nine messages per month. Reply “STOP” at any time if you no longer wish to receive text messages from Wynn. Must be at least 21 years old.`

    const [stateSelected, setStateSelected] = useState<string | null>(
        '- select -'
    );
    const [stateValue, setStateValue] = useState<string>('- select -');

    const router = useRouter();
    const [radioSelected, setRadioSelected] = useState<{
        cell: boolean;
        home: boolean;
    }>({ cell: false, home: true });


    const { control, register, handleSubmit, formState: { errors }, watch } = useForm({
        values: {
            street: '',
            street2: '',
            city: '',
            state: stateValue,
            zip: '',
            phone: '',
        }
    });


    // console.log(watch())
    console.log(errors, watch())
    // document field for the state change in bootstrap and set default value for the radia button and make foucs state 
    useEffect(() => {
        document.querySelectorAll('.dropdown-item').forEach((item) => {
            item.addEventListener('click', (e) => {
                setStateSelected(() => item?.textContent);
            });
        });
        const init: HTMLElement | null = document.querySelector('#phoneHome');
        init?.click();
        const buttonStateElement = document.querySelector(".buttonState") as HTMLInputElement | null;
        const buttonStateElements = document.querySelector(".inputStateHidden") as HTMLInputElement | null;

        // errors.state?.message && ()
        buttonStateElements?.addEventListener('focus', function () {
            buttonStateElement?.focus()
        })
    }, []);
    // state validation value setup
    useEffect(() => {
        setStateValue(stateSelected !== null ? stateSelected : '- select -')
    }, [stateSelected, errors]);

    // toggle the checkbox
    const RemoveType = (event: any) => { // need a right datatype
        setRadioSelected({
            cell: event.target.value == 'cell',
            home: event.target.value == 'home',
        });
    };
    // submit handler
    const onHandleFormSubmit = (data: dataone) => {
        console.log("testoen ")
        console.log(data)
        router.push("/profile/enrollment/aboutyou")
    };


    return (
        <UlDescription title={titl} description={desc} width=''>
            <form onSubmit={handleSubmit((data) => onHandleFormSubmit(data))} className="">
                <fieldset className="field">
                    <legend className="legends visually-hidden-focusable">
                        get started
                    </legend>
                    <div className="stepField mb-3">
                        <label className="form-label"> Street Address *</label>
                        <input
                            {...register("street", {
                                required: "this street is required",
                            })}
                            className="form-control"
                            type="text"
                            name="street"
                        />
                        <p className='m-0 invalid'>{errors.street?.message}</p>
                    </div>
                    <div className="stepField mb-3">
                        <label className="form-label"> Street Address Line 2</label>
                        <input type="text" name="street-2" className="form-control" />
                    </div>
                    <div className="stepField mb-3">
                        <label className="form-label"> City *</label>
                        <input {...register("city", {
                            required: "this city is required",
                            minLength: {
                                value: 1,
                                message: "min 5 length",
                            }
                        })}
                            type="text"
                            name="city"
                            className="form-control"
                        />
                        <p className='m-0 invalid'>{errors.city?.message}</p>
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
                                className="dropdown-toggle form-control text-start buttonState"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="stateSelect"
                                aria-labelledby="stateLabel stateSelect"
                            >
                                {stateSelected}
                            </button>
                            <input
                                {...register('state', {
                                    required: 'This field is required',
                                    validate: {
                                        numberOnly: v => v != '- select -' || 'select a state'
                                    }
                                })}
                                type='hidden'
                                className='visually-hidden inputStateHidden'
                            />

                            <ul className="dropdown-menu" aria-labelledby="stateSelect">
                                <li><a className="dropdown-item item-state">Nevada</a></li>
                                <li><a className="dropdown-item item-state">Cal</a></li>
                                <li><a className="dropdown-item item-state">Arz</a></li>
                                <li><a className="dropdown-item item-state">Settle</a></li>
                                <li><a className="dropdown-item item-state">New york</a></li>
                            </ul>
                        </div>
                        <p className='m-0 invalid'>{errors.state?.message}</p>
                    </div>
                    <div className="stepField mb-3 zip">
                        <label className="form-label"> Zip Code *</label>
                        <input {...register("zip", {
                            required: "this zip is required",
                            validate: {
                                numberOnly: v => +v > 0 || 'input digits only'
                            }
                        })}
                            type="text"
                            name="zip"
                            className="form-control" />

                        <p className='m-0 invalid'>{errors.zip?.message}</p>
                    </div>
                    <div className="stepField mb-3 phoneNumber">
                        <label className="form-label"> Phone Number *</label>
                        <input type="text" name="phonenumer" className="form-control" />
                    </div>
                    <div className="mb-3 phoneCheck">
                        <div>
                            <input
                                type="radio"
                                name="cellphone"
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
                                name="homephone"
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
                        <button type='submit' className="btn btn-primary btn-submit">
                            save and continue
                        </button>
                    </div>
                </fieldset>
            </form>
        </UlDescription >

    );
}

export default Step1;
