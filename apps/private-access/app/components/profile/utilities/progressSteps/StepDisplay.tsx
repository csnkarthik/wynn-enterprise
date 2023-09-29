'use client'
import "./steps.scss";
import { usePathname } from 'next/navigation';
function StepDisplay() {
    const pathname = usePathname();
    return (
        <div className="container">
            <div className="steps mt-1 mb-1">
                <div className={`step-item ${pathname.includes("getstart") ? 'active' : 'disabled'}`}>
                    <button className="step-button text-center " aria-label="Step 1 of 3 Get Started">
                        1
                    </button>
                    <p className="step-title">Get Started</p>
                </div>
                <div className={`step-item ${pathname.includes("aboutyou") ? 'active' : 'disabled'}`}>
                    <button className="step-button text-center " aria-label="Step 2 of 3 About you">
                        2
                    </button>
                    <p className="step-title">About You</p>
                </div>
                <div className={`step-item ${pathname.includes("summary") ? 'active' : 'disabled'}`}>
                    <button className="step-button text-center " aria-label="Step 3 of 3 Summary">
                        3
                    </button>
                    <p className="step-title">Summary</p>
                </div>
            </div>
            <p className="step-title step-title-m d-block d-sm-none text-center"> Get Started</p>
        </div>
    )
}
export default StepDisplay