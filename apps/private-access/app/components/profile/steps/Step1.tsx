import React from 'react'
function Step1() {
    return (
        <form action="" className=''>
            <fieldset className='field'>
                <legend className='legends'>
                    Step 1
                </legend>
                <div className="stepField mb-3">
                    <label className='form-label'> Street Address *</label>
                    <input type="text" name="street" className='form-control' />
                </div>
                <div className="stepField mb-3">
                    <label className='form-label'> Street Address Line 2</label>
                    <input type="text" name="street" className='form-control' />
                </div>
                <div className="stepField mb-3">
                    <label className='form-label'> City *</label>
                    <input type="text" name="street" className='form-control' />
                </div>

                <div className="stepField mb-3">
                    <label className='form-label' id='stateLabel' htmlFor='address_stateProvince'> State *</label>
                    <div className="dropdown">
                        <button className="dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            id="stateSelect" aria-labelledby="stateLabel stateSelect">
                            <span className="gray">- Select -</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="stateSelect">
                            <li>
                                <a className='dropdown-item item-state'>Nevada</a>
                            </li>
                            <li>
                                <a className='dropdown-item item-state'>Nevada</a>
                            </li>
                            <li>
                                <a className='dropdown-item item-state'>Nevada</a>
                            </li>
                            <li>
                                <a className='dropdown-item item-state'>Nevada</a>
                            </li>
                            <li>
                                <a className='dropdown-item item-state'>Nevada</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </fieldset>
        </form>
    )
}

export default Step1