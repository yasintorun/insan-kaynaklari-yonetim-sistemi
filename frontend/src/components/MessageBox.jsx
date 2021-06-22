import React from 'react'

///2 adet div içerir
export default function MessageBox(props) {
    return (
        <div className={`mt-3 ${props.className}`}>
            <div className="border " >
                <div className="bg-white" style={{ borderRadius: '15px 15px 0px 0px' }}>
                    <h3 className="p-4">
                        {props.children[0]}
                    </h3>
                </div>
                <div className="bg-light message-content" style={{ borderRadius: '0px 0px 15px 15px ' }}>
                    <div className="p-4">
                        {props.children[1]}
                    </div>
                </div>
            </div>
        </div>
    )
}
