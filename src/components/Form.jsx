import Input from "./Input.jsx";

export default function Form({onChangeInput, userData}) {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <Input label='Initial Investment'
                           onChangeInput={onChangeInput}
                           id='initialInvestment'
                           userData={userData}
                    />
                    <Input label='Annual Investment'
                           onChangeInput={onChangeInput}
                           id='annualInvestment'
                           userData={userData}
                    />
                </div>
                <div className="input-group">
                    <Input label='Expected return'
                           onChangeInput={onChangeInput}
                           id='expectedReturn'
                           userData={userData}
                    />
                    <Input label='Duration'
                           onChangeInput={onChangeInput}
                           id='duration'
                           userData={userData}
                    />
                </div>
            </div>
        </>
    )
}