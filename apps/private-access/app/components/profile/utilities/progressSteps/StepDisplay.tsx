'use client'
import "./steps.scss";
import { usePathname, useRouter } from 'next/navigation';

function StepDisplay() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="container">
            <div className="steps mt-1 mb-1">
                <div className={`step-item ${pathname.includes("getstart") ? 'active' : ''}`}>
                    <button className="step-button text-center" onClick={() => router.push("/profile/enrollment/getstart")} aria-label="Step 1 of 3 Get Started">
                        1
                    </button>
                    <p className="step-title">Get Started</p>
                </div>
                <div className={`step-item ${pathname.includes("aboutyou") ? 'active' : pathname.includes("getstart") ? 'disabled' : ''}`}>
                    <button className="step-button text-center " onClick={() => router.push("/profile/enrollment/aboutyou")} aria-label="Step 2 of 3 About you">
                        2
                    </button>
                    <p className="step-title">About You</p>
                </div>
                <div className={`step-item ${pathname.includes("summary") ? 'active' : 'disabled'}`}>
                    <button className="step-button text-center " onClick={() => router.push("/profile/enrollment/summary")} aria-label="Step 3 of 3 Summary">
                        3
                    </button>
                    <p className="step-title">Summary</p>
                </div>
            </div>

            <p className="step-title step-title-m d-block d-sm-none text-center">
                {pathname.includes("getstart") && " Get Started"}
                {pathname.includes("aboutyou") && "About you"}
                {pathname.includes("summary") && " Summary"}

            </p>
        </div>
    )
}
export default StepDisplay