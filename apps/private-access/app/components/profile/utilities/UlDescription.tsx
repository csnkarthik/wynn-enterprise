import React from 'react'

function UlDescription({ children, title, description, width = " " }: { children: React.ReactNode; title: string, description: string, width: string }) {
    return (
        <div className={`contentTab ${width}`} id="headingOne" >
            <div className="container">
                <h1 className="pt-4">{title}</h1>
                <p className="mb-4 mt-3 main-content-desc text-center">
                    {description}
                </p>
                {children}
            </div>
        </div>
    )
}

export default UlDescription