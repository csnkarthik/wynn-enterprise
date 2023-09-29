'use client';
import UlDescription from '../utilities/UlDescription';
import { useRouter } from 'next/navigation';

function Step2() {
  const router = useRouter();

  function sumithandlerTemp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    router.push("/profile/enrollment/summary")
  }

  const titl = "About You";
  const desc = "Please take a moment to answer the following questions, which will assist us in both improving our service and curating a personalized experience for you each time you visit Wynn Resorts."


  return (
    <UlDescription title={titl} description={desc}>
      <form action="" className="">
        <fieldset className="field">
          <legend className="legends visually-hidden-focusable">
            get starteded
          </legend>
          <div className="stepField mb-3">
            <label className="form-label"> As a Private Access member, your
              opinions matter to our team. During your stay,
              which elements make you feel valued and appreciated?</label>
            <textarea  name="street" className="form-control" />
          </div>

          <div className="stepField mb-3">
            <label className="form-label"> As we strive to anticipate your needs,
              please indicate the reasons you repeatedly choose Wynn and Encore
              Las Vegas.</label>
            <textarea  name="street" className="form-control" />
          </div>

          <div className="stepField mb-3">
            <label className="form-label">Because we take pride in providing personalized
              experiences, which elements of service or amenities make you feel special
              and recognized?</label>
            <textarea  name="street" className="form-control" />
          </div>

          <div className="stepField mb-3">
            <label className="form-label"> Whether it happened at Wynn or another
              resort, please recall an experience that disappointed you in the past.</label>
            <textarea  name="street" className="form-control" />
          </div>


          <div className="stepField mb-3">
            <label className="form-label"> Inspiring our guests is also key to our philosophy —
              with that in mind, what inspires you?</label>
            <textarea name="street" className="form-control" />
          </div>

          <div className="stepField mb-3">
            <label className="form-label"> Delighting our guests is integral to everything we do.
              In what ways can we go above and beyond for you, either prior to or during your stay?
            </label>
            <textarea name="street" className="form-control" />
          </div>

          <div className='submit-buttons ' >
            <button type='submit' className="btn btn-primary btn-submit" onClick={(e) => sumithandlerTemp(e)}>
              save and continue
            </button>
          </div>
        </fieldset>
      </form>
    </UlDescription>
  );
}
export default Step2